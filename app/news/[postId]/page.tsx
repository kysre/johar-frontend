import React from 'react';

import axios from 'axios'

import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import RootLayout from "@/app/layout";
import {Container, Paper, Title} from "@mantine/core";
import classes from './PostPage.module.css'
import GlobalConfig from '@/app/app.config.js'
import PostList from "@/components/Post/PostList";
import CommentSection from '@/components/Comment/CommentSection';
import PostDetail from '@/components/Post/PostDetail';
import NotFoundImage from '@/components/Error/NotFound'
import Agency from "@/components/Post/Agency";

// @ts-ignore
export default async function PostPage({ params }) {
    const post = await fetchPostData(params.postId);
    if (!post) {
        return <NotFoundImage/>; // Add proper loading state
    }
    else{
        const reactions = await fetchPostReactions(params.postId);
        const comments = await fetchPostComments(params.postId);
        const relatedPosts = await fetchPostSuggestions(params.postId);
        const agency = await post.agency;
        if (agency.image == null){
            agency.image = 'http://directostv.teleame.com/wp-content/uploads/2016/05/BBC-One-Watch-online-live.png';
        }
        else{
            agency.image = 'http://localhost:8000/' + agency.image;
        }
        return (
            <RootLayout>
                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <PostDetail post={post} reactions={reactions}></PostDetail>
                    </Paper>
                </Container>


                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <Title ta="center" className={classes.title} style={{marginBottom: '20px', }}>
                            Agency
                        </Title>
                        <Agency agency={agency}></Agency>
                    </Paper>
                </Container>


                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <PostList posts={relatedPosts} title={'See Also'}>
                        </PostList>
                    </Paper>
                </Container>


                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <CommentSection comments={comments} PostId={params.postId} />
                    </Paper>
                </Container>
            </RootLayout>
        );

    }
};


const getStaticProps: GetStaticProps = async ({ params }) => {
    const postId = params?.postId as string;
    return { props: { postId } };
};

const fetchPostData = async (postId: string) => {
    try{
        const response = await axios.get(GlobalConfig.PostDetailApiSSR + postId);
        const post = await response.data;
        if (post.status =='ok'){
            if (post.news.image == null){
                post.news.image = 'https://i.pinimg.com/236x/0a/62/39/0a6239f18a9e0381dd04efe3661d3da2.jpg';
            }
            else{
                post.news.image = GlobalConfig.BaseBackendSSR + post.news.image;
            }
            return post.news;
        }
        return false;
    } catch (error){
        console.error('Error during API call', error)
    }
};

const fetchPostReactions = async (postId: string) =>{
    try {
        const response = await axios.get(GlobalConfig.FeedbackApiSSR + postId + '/reaction');
        const reactions = await response.data;
        let likes = 0;
        let dislikes = 0;
        for (const reaction of reactions.reactions){
            if (reaction.reactionType == 'like'){
                likes += 1;
            }
            else{
                dislikes += 1;
            }
            //todo check if user reacts post
        }
        return {likes: likes, dislikes: dislikes};
    } catch (error){
        console.error('Error during API call', error)
        return {likes: 0, dislikes: 0};
    }

};

const fetchPostComments = async (postId: string) =>{
    try{
        const response = await axios.get(GlobalConfig.FeedbackApiSSR + postId + '/comment');
        const comments = await response.data;
        return comments.comments;
    } catch (error){
        console.error('Error during API call', error)
    }
}

const fetchPostSuggestions = async (postId: string) =>{
    try{
        const response = await axios.get(GlobalConfig.PostSuggestionApiSSR + postId);
        const posts = await response.data;

        if (posts.status =='ok'){
            for (const news of posts.news) {
                if (news.image == null) {
                    news.image = 'https://i.pinimg.com/236x/0a/62/39/0a6239f18a9e0381dd04efe3661d3da2.jpg';
                }
                if (news.description.length > 30){
                    news.description = news.description.substring(0, 30);
                }
            }
        }
        return posts.news;
    } catch (error){
        console.error('Error during API call', error)
    }
}


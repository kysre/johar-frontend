import React from 'react';

import axios from 'axios'

import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import AddCommentForm from '@/components/Comment/AddCommentForm';
import RootLayout from "@/app/layout";
import {Container, Paper} from "@mantine/core";
import classes from './PostPage.module.css'
import GlobalConfig from '@/app/app.config.js'
import SeeAlso from "@/components/Post/SeeAlso";
import CommentSection from '@/components/Comment/CommentSection';
import PostDetail from '@/components/Post/PostDetail';
import NotFoundImage from '@/components/Error/NotFound'

// @ts-ignore
export default async function PostPage({ params }) {
    let post:any = {title:'s', content: 'string', imageSrc: 'string', writer: 'string', date: 'string'}
    post = await fetchPostData(params.postId);
    if (!post) {
        return <NotFoundImage/>; // Add proper loading state
    }
    else{
        const reactions = await fetchPostReactions(params.postId);
        const comments = await fetchPostComments(params.postId);
        const relatedPosts = await fetchPostSuggestions(params.postId);
        return (
            <RootLayout>
                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <PostDetail post={post} reactions={reactions}></PostDetail>
                    </Paper>
                </Container>


                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">

                    </Paper>
                </Container>


                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <SeeAlso posts={relatedPosts}>
                        </SeeAlso>
                    </Paper>
                </Container>


                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <CommentSection comments={comments} />
                    </Paper>
                </Container>
            </RootLayout>
        );

    }
};

const getStaticPaths: GetStaticPaths = async () => {
    // Fetch the list of post IDs from your API or database
    const postIds = ['QZ5WVBSrrTfj', 'kirjhae']; // Replace with actual post IDs

    // Generate paths based on the post IDs
    const paths = postIds.map((postId) => ({ params: { postId } }));

    return { paths, fallback: false };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
    const postId = params?.postId as string;
    const post = await fetchPostData(postId);

    return { props: { post } };
};

const fetchPostData = async (postId: string) => {
    try{
        const response = await axios.get(GlobalConfig.PostDetailApi + postId);
        const post = await response.data;

        console.log(post)
        if (post.status =='ok'){
            if (post.news.image == null){
                post.news.image = 'https://i.pinimg.com/236x/0a/62/39/0a6239f18a9e0381dd04efe3661d3da2.jpg';
            }
            else{
                post.news.image = 'http://localhost:8000/' + post.news.image;
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
        const response = await axios.get(GlobalConfig.FeedbackApi + postId + '/reaction');
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
        const response = await axios.get(GlobalConfig.FeedbackApi + postId + '/comment');
        const comments = await response.data;
        return comments.comments;
    } catch (error){
        console.error('Error during API call', error)

    }
}

const fetchPostSuggestions = async (postId: string) =>{
    try{
        const response = await axios.get(GlobalConfig.PostSuggestionApi + postId);
        const posts = await response.data;
        console.log(posts);

        if (posts.status =='ok'){
            for (const news of posts.news) {
                if (news.image == null) {
                    news.image = 'https://i.pinimg.com/236x/0a/62/39/0a6239f18a9e0381dd04efe3661d3da2.jpg';
                }
                if (news.description.length > 30){
                    news.description = news.description.substring(0, 30);
                }
            }
            console.log(posts);
        }
        return posts.news;
    } catch (error){
        console.error('Error during API call', error)
    }
}


import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import CommentSection from '@/components/Comment/CommentSection';
import PostDetail from '@/components/Post/PostDetail';
import AddCommentForm from '@/components/Comment/AddCommentForm';
import RootLayout from "@/app/layout";
import {Container, Paper} from "@mantine/core";
import classes from './PostPage.module.css'
import GlobalConfig from '@/app/app.config.js'



// @ts-ignore
export default async function PostPage({ params }) {
    let post:any = {title:'s', content: 'string', imageSrc: 'string', writer: 'string', date: 'string'}
    post = await fetchPostData(params.postId);
    if (!post) {
        return <p>Loading...</p>; // Add proper loading state
    }
    else{
        const reactions = await fetchPostReactions(params.postId);
        // todo get comments and related posts
        //const comments = await fetchPostComments(params.postId);
        const comments = [
            { id: '1', subscriber: 'John Doe', text: 'This is a great comment!', created_time: '2024-01-30',photo: 'https://tse1.mm.bing.net/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&pid=Api&P=0&h=180' },
            { id: '2', subscriber: 'Jane Smith', text: 'I agree with John!', created_time: '2024-01-31', photo: 'https://tse1.mm.bing.net/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&pid=Api&P=0&h=180' },
        ];
        const relatedPosts: any = [ {id:'123123412423', title:'related1', content:'salam dafsfgsdfnhsdngsdbrdxgfbwrthwtnwsdvnsgnsnsgddngsh', imageSrc:'https://tse1.mm.bing.net/th?id=OIP.ez6SppsgN-4VGZFOLWGw6gHaE7&pid=Api&P=0&h=180'},
                                    {id:'QZ5WFAHlA2Me', title:'related2', content:'salam afdbsdgbsgdhsdvnsfgdnwrfgnsfgnrsdgnsrgtnswbgtrbji', imageSrc:'https://tse1.mm.bing.net/th?id=OIP.1IeDGhHEZK4sESLtt0YirgHaHa&pid=Api&P=0&h=180'},
                                    {id:'QZ5WFAp6oPe1', title:'related2', content:'salamdsgbsfgnfhnsmnetsdty srtnsrynsrngysrygnbsrnbwsrnb abji', imageSrc:'https://tse1.mm.bing.net/th?id=OIP.1IeDGhHEZK4sESLtt0YirgHaHa&pid=Api&P=0&h=180'}];

        return (
            <RootLayout>
                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <PostDetail post={post} reactions={reactions}></PostDetail>
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
    const response = await fetch('http://127.0.0.1:8000/news/' + postId);
    const post = await response.json();
    if (post.status =='ok'){
        if (post.news.image == null){
            post.news.image = 'https://tse2.mm.bing.net/th?id=OIF.gSLkiZ%2bIHy48LBtMi0qx6g&pid=Api&P=0&h=180';
        }
        return post.news;
    }
    return false;

};

const fetchPostReactions = async (postId: string) =>{
    const response = await fetch('http://127.0.0.1:8000/news/feedback/' + postId + '/reaction');
    const reactions = await response.json();
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
};

const fetchPostComments = async (postId: string) =>{
    const response = await fetch('http://127.0.0.1:8000/news/feedback/' + postId + '/comment');
    const comments = await response.json();
    return comments.comments;
}
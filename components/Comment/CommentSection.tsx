'use client'
import { Container } from '@mantine/core';
import React from 'react';
import Comment from './Comment';
import AddCommentForm from "@/components/Comment/AddCommentForm"; // Assuming Comment component is in the same directory

interface CommentData {
    subscriber: {
        username: string;
        email: string;
    };
    text: string;
    created_time: string;
}

interface CommentSectionProps {
    comments: CommentData[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
    return (
        <Container>
            <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Comments</h2>
            {comments.map((comment) => (
                <Comment
                    author={comment.subscriber.username}
                    content={comment.text}
                    date={comment.created_time}
                    photo='https://tse3.mm.bing.net/th?id=OIP.AkKR5-4AJhHTNNDMp0NxvQAAAA&pid=Api&P=0&h=180'
                 />
            ))}
        </Container>
    );
};

export default CommentSection;
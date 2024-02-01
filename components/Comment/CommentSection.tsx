'use client'
import { Container } from '@mantine/core';
import React from 'react';
import Comment from './Comment';
import AddCommentForm from "@/components/Comment/AddCommentForm"; // Assuming Comment component is in the same directory

interface CommentData {
    id: string;
    subscriber: string;
    text: string;
    created_time: string;
    photo: string;
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
                    id={comment.id}
                    author={comment.subscriber}
                    content={comment.text}
                    date={comment.created_time}
                    photo={comment.photo}
                 />
            ))}
        </Container>
    );
};

export default CommentSection;
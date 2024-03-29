'use client'


import { Container } from '@mantine/core'
import React from 'react'
import Comment from './Comment'
import AddCommentForm from '@/components/Comment/AddCommentForm'

interface CommentData {
    id: number
    subscriber: {
        username: string
        email: string
    };
    text: string
    created_time: string
}

interface CommentSectionProps {
    comments: CommentData[]
    PostId: string
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, PostId }) => {
    let key= 0
    for (const comment of comments){
        comment.id = key
    }
    return (
        <Container>
            <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Comments</h2>
            {comments.map((comment) => (
                <Comment
                    key = {comment.id}
                    author={comment.subscriber.username}
                    content={comment.text}
                    date={comment.created_time}
                    photo='https://tse3.mm.bing.net/th?id=OIP.AkKR5-4AJhHTNNDMp0NxvQAAAA&pid=Api&P=0&h=180'
                 />
            ))}

            <AddCommentForm postId={PostId}></AddCommentForm>
        </Container>
    )
}

export default CommentSection

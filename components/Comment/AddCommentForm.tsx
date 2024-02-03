'use client'
import { Container, Paper, Input, Button, Group } from '@mantine/core'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import GlobalConfig from '@/app/app.config.js'


interface NewCommentFormProps {
    postId: string
}

const AddCommentForm: React.FC<NewCommentFormProps> = (PostId) => {
    const [content, setContent] = useState('');
    const [cookies] = useCookies(['token']);
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (content.trim() !== '') {
            // todo handle comment
            try{
                const comment = content.trim();
                const response = await axios.post(GlobalConfig.FeedbackApi + PostId.postId + '/comment', {
                    comment,
                    headers: {
                        'Authorization': `Token ` + cookies.token,
                    }
                });
                //todo
            } catch (error){
                console.error('Error during API call', error)
            }
            // Reset the form after submission
            setContent('')
        }
    }

    return (
        <Container style={{ width: '100%'}}>
            <Paper shadow="xs" radius="md" style={{padding: '30px', width: '100%'}}>
                <form onSubmit={handleFormSubmit}>
                        <Input
                            aria-placeholder="Comment"
                            placeholder="Write your comment"
                            required
                            multiline
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Button type="submit" style={{ marginTop: 10, alignContent:'center', alignItems:'center'}}>
                            Submit Comment
                        </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default AddCommentForm


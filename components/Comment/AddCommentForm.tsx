import { Container, Paper, Input, Button, Group } from '@mantine/core';
import React, { useState } from 'react';

interface NewCommentFormProps {
    onSubmit: (newComment: { content: string }) => void;
}

const AddCommentForm: React.FC<NewCommentFormProps> = ({ onSubmit }) => {
    const [content, setContent] = useState('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (content.trim() !== '') {
            onSubmit({ content });
            //todo
            // Reset the form after submission
            setContent('');
        }
    };

    return (
        <Container>
            <Paper shadow="xs" radius="md">
                <form onSubmit={handleFormSubmit}>
                    <Group>
                        <Input
                            aria-placeholder="Comment"
                            placeholder="Write your comment"
                            required
                            multiline
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Button type="submit" style={{ marginTop: 10 }}>
                            Submit Comment
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
};

export default AddCommentForm;

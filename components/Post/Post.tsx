'use client'
import React from 'react';
import { Container, Image, Title, Text, Group } from '@mantine/core';
import {useRouter} from "next/router";

interface PostProps {
    token: string;
    author: string;
    title: string;
    description: string;
    image: string;
}

const Post: React.FC<PostProps> = (post: PostProps) => {
    return (
        <Container>
            <Group style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ flex: '0 0 150px', marginRight: 15 }}>
                    {/* Set a fixed width (150px in this case) */}
                    <Image src={post.image} alt={`${post.title} Image`} radius="md" />
                </div>
                <div style={{ flex: 1 }}>
                    <Title order={2} style={{ marginBottom: 10 }}>
                        {post.title}
                    </Title>
                    <Text>{post.description}</Text>
                </div>
            </Group>
        </Container>
    );
};

export default Post;

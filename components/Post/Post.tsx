'use client'
import React from 'react';
import { Container, Image, Title, Text, Group } from '@mantine/core';
import {useRouter} from "next/router";

interface PostProps {
    id: string;
    title: string;
    content: string;
    imageSrc: string;
}

const Post: React.FC<PostProps> = (post: PostProps) => {


    return (
        <Container>
            <Group>
                <div style={{ flex: 1, marginRight: 15 }}>
                    <Image src={post.imageSrc} alt={`${post.title} Image`} radius="md" />
                </div>
                <div style={{ flex: 2 }}>
                    <Title order={2} style={{ marginBottom: 10 }}>
                        {post.title}
                    </Title>
                    <Text>{post.content}</Text>
                </div>
            </Group>
        </Container>
    );
};

export default Post;
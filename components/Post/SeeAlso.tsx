'use client'

import React from 'react';
import Post from './Post';
import {Container, Group, Title, Paper} from '@mantine/core';
import classes from "@/components/Post/SeeAlso.module.css";


interface RelatedPostsProps {
    posts: {id: string, title: string; content: string; imageSrc: string }[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {

    return (
        <Container>
            <Title ta="left" className={classes.title}>
                See Also
            </Title>
            <Group className={classes.group}>
                {posts.map((post, index) => (
                    <Post key={index} id={post.id} title={post.title} content={post.content} imageSrc={post.imageSrc} />
                ))}
            </Group>
        </Container>
    );
};

export default RelatedPosts;
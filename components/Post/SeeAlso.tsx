'use client'

import React from 'react'
import Post from './Post'
import { Container, Group, Title, Paper } from '@mantine/core'
import classes from '@/components/Post/SeeAlso.module.css'
import { number } from 'prop-types'

interface RelatedPostsProps {
  posts: {
    token: string
    author: string
    title: string
    description: string
    image: string
  }[]
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <Container>
      <Title
        ta="center"
        className={classes.title}
        style={{ marginBottom: '20px' }}
      >
        See Also
      </Title>
      <Group className={classes.group}>
        {posts.map((post, index) => (
          <Post
            key={index}
            token={post.token}
            author={post.author}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        ))}
      </Group>
    </Container>
  )
}

export default RelatedPosts

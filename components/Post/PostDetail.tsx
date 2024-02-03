'use client'


import React from 'react'
import Post from './Post'
import RelatedPosts from './PostList'
import { Container, Title, Text, Image } from '@mantine/core';
import {number} from 'prop-types'
import classes from './PostDetail.module.css'
interface Post {
  post: {
    token: string
    author: { username: string; email: string }
    title: string
    agency: { name: string; description: string; image: string }
    description: string
    image: string
    created_time: string
    categories: { id: number; title: string }[]
  }
  reactions: {
    likes: number
    dislikes: number
  }
}


const PostDetail: React.FC<Post> = ({ post, reactions }) => {
  return (
    <Container>
      <div className={classes.blogWrap}>
        <header>
          <p className={classes.blogDate}>Published {post.created_time}</p>
          <h1>{post.title}</h1>
          <div className={classes.blogSubCategory}>
            {post.categories.map((category, i) => (
              <div key={i}>
                <p className={classes.chip}>{category.title}</p>
              </div>
            ))}
          </div>
        </header>
        <img src={post.image} alt="cover" />

        <div className={classes.container}>
          <div className={classes.left}>
            <div className={classes.info}>
              <p>{post.author.username}</p>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.icon}>
              <span>{reactions.likes}</span>
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_86166.png"
                alt="Like Icon"
              />
            </div>
            <div className={classes.icon}>
              <span>{reactions.dislikes}</span>
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.lKr0x5AEsyu8S1V6epzmMAHaHC&pid=Api&P=0&h=180"
                alt="Dislike Icon"
              />
            </div>
          </div>
        </div>
        <p className={classes.blogDesc}>{post.description}</p>
      </div>
    </Container>
  )
}

export default PostDetail

'use client'

import React, { useState } from 'react'
import axios, { isAxiosError } from 'axios'
import { useCookies } from 'react-cookie'
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Flex,
  Space,
  Grid,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import classes from './CategoryPage.module.css'
import GlobalConfig from '../app.config.js'
import Post from '@/components/Post/Post'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export default function CategoryPage() {

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
    <Header/>
    <Container fluid style={{ margin: "50px" }}>
        <Title className={classes.title}>Category</Title>
        <Space h="sm" />
        <Grid >
        <Grid.Col span={4}><Post author='abbas' description='hello there' image='/bike.png' title='Good NEWS'/></Grid.Col>
        <Grid.Col span={4}><Post author='abbas' description='hello there' image='/bike.png' title='Good NEWS'/></Grid.Col>
        <Grid.Col span={4}><Post author='abbas' description='hello there' image='/bike.png' title='Good NEWS'/></Grid.Col>
        <Grid.Col span={4}><Post author='abbas' description='hello there' image='/bike.png' title='Good NEWS'/></Grid.Col>
        <Grid.Col span={4}><Post author='abbas' description='hello there' image='/bike.png' title='Good NEWS'/></Grid.Col>
        <Grid.Col span={4}><Post author='abbas' description='hello there' image='/bike.png' title='Good NEWS'/></Grid.Col>
        <Grid.Col span={4}><Post author='abbas' description='hello there' image='/bike.png' title='Good NEWS'/></Grid.Col>
        <Grid.Col span={4}><Post author='abbas' description='hello there' image='/bike.png' title='Good NEWS'/></Grid.Col>
        <Grid.Col span={4}><Post author='abbas' description='hello there' image='/bike.png' title='Good NEWS'/></Grid.Col>
          
        </Grid>
      </Container>
      <Footer/>
      </div>
  )
}

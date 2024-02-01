'use client'

import React, { useState } from 'react'
import axios from 'axios'
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
} from '@mantine/core'
import classes from './LoginPage.module.css'
import GlobalConfig from '../app.config.js'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cookie, setCookie] = useCookies(['token'])

  const handleClick = async () => {
    try {
      const response = await axios.post(GlobalConfig.LoginApi, {
        username,
        password,
      })
      const token = response.data.token
      setCookie('token', token, { path: '/' })
      console.log(token)
    } catch (error) {
      console.error('Error during API call', error)
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Don&apos;t have an account?{' '}
        <Anchor<'a'> href="register" fw={700} size="sm">
          Register
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Username"
          placeholder="Your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          mt="md"
        />
        <Button fullWidth mt="xl" onClick={handleClick}>
          Login
        </Button>
      </Paper>
    </Container>
  )
}

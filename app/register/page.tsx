'use client'

import React, { useState } from 'react'
import axios from 'axios'
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
import classes from './RegisterPage.module.css'
import GlobalConfig from '../app.config.js'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = async () => {
    try {
      const response = await axios.post(GlobalConfig.RegisterApi, {
        email,
        username,
        password,
      })
      console.log(response.data)
    } catch (error) {
      console.error('Error during API call', error)
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have account?{' '}
        <Anchor<'a'> size="sm" href="login" fw={700}>
          Login
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          label="Username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
          required
          mt="md"
        />
        <Button fullWidth mt="xl" onClick={handleClick}>
          Register
        </Button>
      </Paper>
    </Container>
  )
}

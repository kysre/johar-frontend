'use client'

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
  let api = GlobalConfig.LoginApi

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
        <TextInput label="Username" placeholder="Your username" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl">
          Login
        </Button>
      </Paper>
    </Container>
  )
}

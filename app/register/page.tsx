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
import classes from './RegisterPage.module.css'
import GlobalConfig from '../app.config.js'

export default function RegisterPage() {
  let api = GlobalConfig.RegisterApi

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
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <TextInput label="Username" placeholder="username" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl">
          Register
        </Button>
      </Paper>
    </Container>
  )
}

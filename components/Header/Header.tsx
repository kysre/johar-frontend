// Header.js

import React from 'react'
import { Box, Button, Group, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './Header.module.css'

export function Header() {
  // ... (unchanged code)

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Text className={classes.websiteName}>Johar</Text>
          <Group h="100%" gap={10} visibleFrom="sm" justify="center">
            <a href="#Home" className={classes.link}>
              Home
            </a>

            <a href="#Category" className={classes.link}>
              Category
            </a>
            <a href="#TrendingNews" className={classes.link}>
              Trend News
            </a>

            <a href="#Suggestions" className={classes.link}>
              Suggestions
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button variant="default">Sign up</Button>
          </Group>
        </Group>
      </header>
    </Box>
  )
}

'use client'

import { Container, Paper, Input, Button, Group } from '@mantine/core'
import React, { useState } from 'react'
import axios from 'axios'
import GlobalConfig from '@/app/app.config.js'

interface NewCommentFormProps {
  onSubmit: (newComment: { content: string }) => void
}

const AddCommentForm: React.FC<NewCommentFormProps> = () => {
  const [content, setContent] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (content.trim() !== '') {
      // todo handle comment

      // Reset the form after submission
      setContent('')
    }
  }

  return (
    <Container style={{ width: '100%' }}>
      <Paper shadow="xs" radius="md" style={{ padding: '30px', width: '100%' }}>
        <form onSubmit={handleFormSubmit}>
          <Input
            aria-placeholder="Comment"
            placeholder="Write your comment"
            required
            multiline
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            type="submit"
            style={{
              marginTop: 10,
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            Submit Comment
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default AddCommentForm

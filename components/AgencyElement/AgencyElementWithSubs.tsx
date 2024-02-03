import { Avatar, Paper } from '@mantine/core'
import React from 'react'

const AgencyElementWithSubs = ({
  imageUrl,
  username,
  subs,
}: {
  imageUrl: string
  username: string
  subs: number
}) => {
  return (
    <Paper
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'xl',
        borderRadius: 'md',
        padding: 'xl',
        textAlign: 'center',
      }}
    >
      <Avatar
        src={imageUrl}
        radius="xl"
        size="xl"
        style={{ marginBottom: '16px' }}
      />
      <text style={{ margin: '0' }}>{username}</text>
      <text style={{ margin: '0' }}>Subscriptions: {subs}</text>
    </Paper>
  )
}

export default AgencyElementWithSubs

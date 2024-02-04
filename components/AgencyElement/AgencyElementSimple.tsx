import { Avatar, Paper } from '@mantine/core'
import React from 'react'

const AgencyElementSimple = ({
  image,
  description,
  name,
}: {
  image: string
  description: string
  name: string
}) => {
  return (
    <Paper shadow="xs" radius="md" p="xl" style={{ textAlign: 'center' }}>
      <Avatar
        src={image}
        alt={description}
        radius="xl"
        size="xl"
        style={{ marginBottom: 16 }}
      />
      <p style={{ margin: 0 }}>{name}</p>
    </Paper>
  )
}

export default AgencyElementSimple

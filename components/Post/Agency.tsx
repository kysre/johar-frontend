import React from 'react'
import { Container, Paper, Image, Title, Button } from '@mantine/core'

interface AgencyProps {
  name: string
  photoSrc: string
  onSubscribe: () => void
}

const Agency: React.FC<AgencyProps> = ({ name, photoSrc, onSubscribe }) => {
  return (
    <Container>
      <Paper shadow="xs" radius="md">
        <div style={{ textAlign: 'center' }}>
          <Image
            src={photoSrc}
            alt={`${name} Logo`}
            width={150}
            height={150}
            radius="md"
          />
          <Title order={4} style={{ marginTop: 10 }}>
            {name}
          </Title>
          <Button onClick={onSubscribe} style={{ marginTop: 10 }}>
            Subscribe
          </Button>
        </div>
      </Paper>
    </Container>
  )
}

export default Agency

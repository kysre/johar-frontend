import {
  Title,
  Text,
  Anchor,
  Container,
  Flex,
  Button,
  Space,
} from '@mantine/core'
import classes from './Welcome.module.css'
import AgencyElementSimple from '../AgencyElement/AgencyElementSimple'
import styles from '../../app/styles.module.css'
import '../../app/globals.css'

interface Agency {
  name: string
  description: string
  image: string
}

interface SubscriptionsProps {
  agencies: Agency[]
}

export function Subscriptions({ agencies }: SubscriptionsProps) {
  return agencies.length > 0 ? (
    <div id="Home">
      <Container fluid style={{ margin: '50px' }}>
        <Title className={styles.title}>Subscriptions</Title>
        <Space h="sm" />
        <Flex className={styles.flexContainer}>
          {agencies.map((agency, index) => (
            <AgencyElementSimple
              key={index}
              image={agency.image}
              description={agency.description}
              name={agency.name}
            />
          ))}
        </Flex>
      </Container>
    </div>
  ) : (
    <></>
  )
}

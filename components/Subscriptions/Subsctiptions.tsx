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

export function Subscriptions() {
  return (
    <div id="Home">
      <Container fluid style={{ margin: '50px' }}>
        <Title className={styles.title}>Subscriptions</Title>
        <Space h="sm" />
        <Flex className={styles.flexContainer}>
          <AgencyElementSimple />
          <AgencyElementSimple />
          <AgencyElementSimple />
          <AgencyElementSimple />
          <AgencyElementSimple />
          <AgencyElementSimple />
        </Flex>
      </Container>
    </div>
  )
}

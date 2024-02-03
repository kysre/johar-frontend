import { Container, Flex, Space, Title } from '@mantine/core'
import styles from '../../app/styles.module.css'
import AgencyElementWithSubs from '../AgencyElement/AgencyElementWithSubs'

export function Suggestions() {
  return (
    <div id="Suggestions">
      <Container fluid style={{ margin: '50px' }}>
        <Title className={styles.title}>Suggestions</Title>
        <Space h="sm" />
        <Flex className={styles.flexContainer}>
          <AgencyElementWithSubs
            imageUrl={'/user.png'}
            username={'Abbas'}
            subs={5626}
          />
          <AgencyElementWithSubs
            imageUrl={'/user.png'}
            username={'Hasan'}
            subs={75626}
          />
          <AgencyElementWithSubs
            imageUrl={'/user.png'}
            username={'Ali'}
            subs={826}
          />
        </Flex>
      </Container>
    </div>
  )
}

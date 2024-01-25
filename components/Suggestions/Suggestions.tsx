import { Container, Flex, Space, Title } from "@mantine/core";
import styles from "../../app/styles.module.css";
import AgencyElementWithSubs from "../AgencyElement/AgencyElementWithSubs";

export function Suggestions() {
    return (
        <Container fluid h={50} style={{ margin: "50px" }}>
        <Title className={styles.title}>Suggestions</Title>
        <Space h="sm" />
        <Flex
          mih={50}
          bg="rgb(255,255,255)"
          align="center"
          wrap="wrap"
          direction={{ base: "column", sm: "row" }}
          // w={"max-content"}
          justify={"space-around"}
          display={"flex"}
        >
          <AgencyElementWithSubs/>
          <AgencyElementWithSubs/>
          <AgencyElementWithSubs/>
        </Flex>
      </Container>
    )
}
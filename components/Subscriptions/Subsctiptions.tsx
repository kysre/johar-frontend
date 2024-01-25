import {
  Title,
  Text,
  Anchor,
  Container,
  Flex,
  Button,
  Space,
} from "@mantine/core";
import classes from "./Welcome.module.css";
import AgencyElementSimple from "../AgencyElement/AgencyElementSimple";
import styles from "../../app/styles.module.css";
import "../../app/globals.css";

export function Subscriptions() {
  return (
      <Container fluid style={{ margin: "50px" }}>
        <Title className={styles.title}>Subscriptions</Title>
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
          <AgencyElementSimple />
          <AgencyElementSimple />
          <AgencyElementSimple />
          <AgencyElementSimple />
          <AgencyElementSimple />
          <AgencyElementSimple />
        </Flex>
      </Container>
  );
}

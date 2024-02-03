import { Title, Container, Flex, Button, Space, Paper } from "@mantine/core";
import styles from "../../app/styles.module.css";
import "../../app/globals.css";
import CategoryElement from "./CategoryElement";

export function Categories() {
  return (
    <div id="Category">
      <Container fluid style={{ margin: "50px" }}>
        <Title className={styles.title}>Categories</Title>
        <Space h="sm" />
        <Flex className={styles.flexContainer}>
          <CategoryElement imageUrl="/frame@3x.png" text="Politics" />
          <CategoryElement imageUrl="/frame@3x.png" text="Politics" />
          <CategoryElement imageUrl="/frame@3x.png" text="Politics" />
          <CategoryElement imageUrl="/frame@3x.png" text="Politics" />
          <CategoryElement imageUrl="/frame@3x.png" text="Politics" />
        </Flex>
      </Container>
    </div>
  );
}

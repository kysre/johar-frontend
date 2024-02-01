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
import SimpleNewsElement from "./SimpleNewsElement";

  
  export function TrendingNews() {
    return (
        <Container fluid style={{ margin: "50px" }}>
          <Title className={styles.title}>Trending News</Title>
          <Space h="sm" />
          <Flex className={styles.flexContainer}>
            <SimpleNewsElement imageUrl="/box.png" username="Abbas" date="12 June 2020" title="A good news" summary="This is a good news horrayyyy! \n Give me some advice about spending time in a good day!" />
            <SimpleNewsElement imageUrl="/horse.png" username="Abbas" date="12 June 2020" title="A good news" summary="This is a good news horrayyyy! \n Give me some advice about spending time in a good day!" />
            <SimpleNewsElement imageUrl="/bike.png" username="Abbas" date="12 June 2020" title="A good news" summary="This is a good news horrayyyy! \n Give me some advice about spending time in a good day!" /> 
            
          </Flex>
        </Container>
    );
  }

  
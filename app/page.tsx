import Image from "next/image";
import styles from "./styles.module.css";
import { Subscriptions } from "@/components/Subscriptions/Subsctiptions";
import { Suggestions } from "@/components/Suggestions/Suggestions";
import { Flex, Title } from "@mantine/core";
export default function Landing() {
  return (
    <div style={{display:'flex',flexDirection: 'column'}}>
        <Subscriptions />
        <Suggestions />
        
    </div>
  );
}

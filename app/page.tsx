import Image from "next/image";
import styles from "./styles.module.css";
import { Subscriptions } from "@/components/Subscriptions/Subsctiptions";
import { Suggestions } from "@/components/Suggestions/Suggestions";
import { Categories } from "@/components/Category/Categories";
import { TrendingNews } from "@/components/TrendingNews/TrendingNews";
import { Flex, Title } from "@mantine/core";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
export default function Landing() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Subscriptions />
      <Categories />
      <TrendingNews />
      <Suggestions />
      <Footer />
    </div>
  );
}

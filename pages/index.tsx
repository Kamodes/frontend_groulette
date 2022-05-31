import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Router from "next/router";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <>Groulette</>
      <Button
        onClick={() => {
          Router.push("/choice");
        }}
      >
        ジャンル選択に進む
      </Button>
    </div>
  );
};

export default Home;

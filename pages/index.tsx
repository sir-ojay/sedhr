import { useEffect } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import Head from "next/head";

const Home: NextPage = () => {
  useEffect(() => {
    Router.push("/auth/signin");
  }, []);
  return (
    <div className="">
      <Head>
        <title>Sedher</title>
      </Head>
    </div>
  );
};

export default Home;

import * as React from "react";
import Head from "next/head";

import Header from "src/components/Header/Header";

type HomeLayoutProps = {
  children?: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <div className="overflow-y-auto">
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50"></main>
    </div>
  );
};

export default HomeLayout;

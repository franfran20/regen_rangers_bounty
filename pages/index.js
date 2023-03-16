import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Hero } from "@/components/home/Hero";
import { WhoAreTheRegenRangers } from "@/components/home/WhoAreTheRegenRangers";
import { SafeGuardingWeb3 } from "@/components/home/SafeGuardingWeb3";
import { About } from "@/components/home/About";
import { Sponsors } from "@/components/home/Sponsors";
import { JoinCommunity } from "@/components/home/JoinCommunity";

export default function Home() {
  return (
    <>
      <Head>
        <title>Regen Rangers | Home</title>
        <meta
          name="Regen Rangers Home Page"
          content="Landing Page For Regen Rangers Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Hero />

        <WhoAreTheRegenRangers />

        <About />

        <JoinCommunity />

        <SafeGuardingWeb3 />

        <Sponsors />
      </main>
    </>
  );
}

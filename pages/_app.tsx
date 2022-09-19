import "../styles/globals.css";
import type { AppProps } from "next/app";
import styles from "../styles/home.module.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Imperium Wars</title>
        <meta name="description" content="Imperium Wars" />
        <link rel="icon" href="/ImperiumWarsLogo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

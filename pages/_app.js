import Head from "next/head";
import "../styles/globals.css";
import * as dotenv from 'dotenv'
dotenv.config()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

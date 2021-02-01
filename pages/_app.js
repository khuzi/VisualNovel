import Head from "next/head";

import { StylesProvider } from "@material-ui/core/styles";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <StylesProvider injectFirst>
        <Component {...pageProps} />
      </StylesProvider>
    </>
  );
}

export default MyApp;

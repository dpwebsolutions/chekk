import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import "../styles/global-styles.css";

const theme = {
  colors: {
    darkBackground: "#0b0d12",
    lightText: "#ffffff",
    primary: "#36fcbc",
    primaryDarker: "#02a36e",
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;

import React from "react";
import Head from "next/head";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;

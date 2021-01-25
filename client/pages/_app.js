import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo";
import PokemonState from "../context/PokemonState";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <PokemonState>
        <Component {...pageProps} />
      </PokemonState>
    </ApolloProvider>
  );
}

export default MyApp;

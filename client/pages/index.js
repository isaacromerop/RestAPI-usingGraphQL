import React from "react";
import Layout from "../components/Layout";
import { useQuery, gql } from "@apollo/client";
import PokemonList from "../components/PokemonList";

const GET_POKEMONS = gql`
  query getPokemons {
    getPokemons {
      next
      count
      previous
      results {
        url
        name
      }
    }
  }
`;

export default function Home() {
  const { data, loading } = useQuery(GET_POKEMONS);
  if (loading) return <h1>Loading...</h1>;
  return (
    <Layout>
      <PokemonList pokemon={data} />
    </Layout>
  );
}

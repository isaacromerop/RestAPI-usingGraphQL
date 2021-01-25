import React from "react";
import PokemonProfile from "../components/PokemonProfile";
import { useLazyQuery, gql } from "@apollo/client";

const GET_PAGE = gql`
  query getOtherPage($input: String!) {
    getOtherPage(input: $input) {
      count
      next
      previous
      results {
        name
        url
      }
    }
  }
`;

const PokemonList = ({ pokemon }) => {
  const [getOtherPage, { data, loading }] = useLazyQuery(GET_PAGE);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Pokédex</h1>
      {data && data.getOtherPage.previous && (
        <button
          onClick={() =>
            getOtherPage({
              variables: { input: data.getOtherPage.previous },
            })
          }
        >
          Previous page
        </button>
      )}
      <button
        onClick={() =>
          getOtherPage({
            variables: {
              input: data ? data.getOtherPage.next : pokemon.getPokemons.next,
            },
          })
        }
      >
        Next page
      </button>
      <ul>
        {data
          ? data.getOtherPage.results.map((pokemon) => (
              <PokemonProfile
                key={pokemon.name}
                url={pokemon.url}
                name={pokemon.name}
              />
            ))
          : pokemon.getPokemons.results.map((pokemon) => (
              <PokemonProfile
                key={pokemon.name}
                url={pokemon.url}
                name={pokemon.name}
              />
            ))}
      </ul>
    </div>
  );
};

export default PokemonList;

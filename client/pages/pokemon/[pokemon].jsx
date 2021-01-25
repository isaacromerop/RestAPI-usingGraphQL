import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const GET_POKEMON = gql`
  query getPokemon($input: String!) {
    getPokemon(input: $input) {
      id
      name
      height
      weight
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      location_area_encounters
    }
  }
`;

const Pokemon = () => {
  const router = useRouter();
  const {
    query: { name },
  } = router;
  const { data, loading } = useQuery(GET_POKEMON, {
    variables: { input: `https://pokeapi.co/api/v2/pokemon/${name}` },
  });
  if (loading) return <h1>Loading...</h1>;
  console.log(data.getPokemon);
  return (
    <div>
      <button onClick={() => router.back()}>Go back</button>
      <h1>{data.getPokemon.name.toUpperCase()}</h1>
      <img
        src={data.getPokemon.sprites.front_default}
        alt="pokemon image"
        width="200"
        height="200"
      />
    </div>
  );
};

export default Pokemon;

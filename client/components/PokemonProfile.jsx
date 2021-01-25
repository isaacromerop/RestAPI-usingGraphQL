import React from "react";
import { useQuery, gql } from "@apollo/client";
import Router from "next/router";

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
      location_area_encounters
    }
  }
`;

const PokemonProfile = ({ url, name }) => {
  const { data, loading } = useQuery(GET_POKEMON, {
    variables: {
      input: url,
    },
  });
  if (loading) return <h1>Loading...</h1>;

  const handleClick = (name) => {
    Router.push({
      pathname: "/pokemon/[name]",
      query: { name },
    });
  };
  return (
    <div>
      <img
        src={data.getPokemon.sprites.front_default}
        alt={name}
        width="100"
        height="100"
      />
      <li onClick={() => handleClick(name)}>{name}</li>
    </div>
  );
};

export default PokemonProfile;

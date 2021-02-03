import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Card, Image, Button, Icon } from "semantic-ui-react";

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
      types {
        type {
          name
        }
      }
    }
  }
`;

const PokemonProfile = ({ url }) => {
  const { data, loading } = useQuery(GET_POKEMON, {
    variables: {
      input: url,
    },
  });
  if (loading) return <h1>Loading...</h1>;
  return (
    <Card>
      <Image src={data.getPokemon.sprites.front_default} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.getPokemon.name.toUpperCase()}</Card.Header>
        <Card.Meta>
          <Icon name="resize vertical" />:{data.getPokemon.height / 10}m |{" "}
          <Icon name="weight" />:{data.getPokemon.weight / 10}kg
        </Card.Meta>
        <Card.Description>
          {data.getPokemon.types.map((type, index) => (
            <Button circular basic key={index}>
              {type.type.name}
            </Button>
          ))}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default PokemonProfile;

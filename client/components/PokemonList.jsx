import React, { useState } from "react";
import PokemonProfile from "../components/PokemonProfile";
import { useLazyQuery, gql } from "@apollo/client";
import {
  Button,
  List,
  Icon,
  Menu,
  Grid,
  Transition,
  Header,
  Image,
} from "semantic-ui-react";

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
  const [showPokemon, setShowPokemon] = useState({
    url: pokemon.getPokemons.results[0].url,
    name: pokemon.getPokemons.results[0].name,
  });
  const [getOtherPage, { data, loading }] = useLazyQuery(GET_PAGE);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <div>
        <Header as="h1" icon textAlign="center">
          <Header.Content>Pokédex</Header.Content>
        </Header>
      </div>
      <Menu className="">
        {data && data.getOtherPage.previous && (
          <Menu.Item position="left">
            <Button
              animated
              onClick={() =>
                getOtherPage({
                  variables: { input: data.getOtherPage.previous },
                })
              }
            >
              <Button.Content visible>Previous page</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </Button>
          </Menu.Item>
        )}
        <Menu.Item position="right">
          <Button
            animated
            onClick={() =>
              getOtherPage({
                variables: {
                  input: data
                    ? data.getOtherPage.next
                    : pokemon.getPokemons.next,
                },
              })
            }
          >
            <Button.Content visible>Next page</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Menu.Item>
      </Menu>
      <Grid columns={2}>
        <Grid.Column textAlign="center" className="centered column" width={5}>
          <List>
            {data
              ? data.getOtherPage.results.map((pokemon) => (
                  <List.Item
                    onClick={() =>
                      setShowPokemon({
                        url: pokemon.url,
                        name: pokemon.name,
                      })
                    }
                    key={pokemon.name}
                  >
                    {pokemon.name}
                  </List.Item>
                ))
              : pokemon.getPokemons.results.map((pokemon) => (
                  <List.Item
                    onClick={() =>
                      setShowPokemon({
                        url: pokemon.url,
                        name: pokemon.name,
                      })
                    }
                    key={pokemon.name}
                  >
                    {pokemon.name}
                  </List.Item>
                ))}
          </List>
        </Grid.Column>
        <Grid.Column textAlign="center" className="centered column" width={5}>
          <Transition>
            <PokemonProfile url={showPokemon.url} name={showPokemon.name} />
          </Transition>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default PokemonList;

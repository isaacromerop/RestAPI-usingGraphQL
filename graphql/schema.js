const { gql } = require("apollo-server");

const typeDefs = gql`
  type Pokemon {
    name: String!
    url: String!
  }
  type Data {
    count: String!
    next: String
    previous: String
    results: [Pokemon]
  }
  type Sprite {
    front_default: String!
  }
  type Nature {
    name: String!
  }
  type Type {
    slot: Int!
    type: Nature
  }
  type PokemonProfile {
    id: ID!
    name: String!
    height: Float!
    location_area_encounters: String!
    sprites: Sprite
    weight: Float!
    types: [Type]
  }
  type AreaName {
    name: String!
  }
  type Area {
    location_area: AreaName
  }
  type Query {
    #Pokemon queries
    getPokemons: Data
    getOtherPage(input: String!): Data
    getPokemon(input: String!): PokemonProfile
    #Location queries
    getEncounterArea(input: String!): [Area]
  }
`;

module.exports = typeDefs;

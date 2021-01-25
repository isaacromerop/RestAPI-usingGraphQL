const axios = require("axios").default;

const resolvers = {
  Query: {
    getPokemons: async () => {
      try {
        const results = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const pokemons = results.data;
        return pokemons;
      } catch (error) {
        console.log(error);
      }
    },
    getOtherPage: async (_, { input }) => {
      try {
        const results = await axios.get(input);
        const pokemons = results.data;
        return pokemons;
      } catch (error) {
        console.log(error);
      }
    },
    getPokemon: async (_, { input }) => {
      try {
        const results = await axios.get(input);
        const pokemon = results.data;
        return pokemon;
      } catch (error) {
        console.log(error);
      }
    },
    getEncounterArea: async (_, { input }) => {
      try {
        const results = await axios.get(input);
        const areas = results.data;
        return areas;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;

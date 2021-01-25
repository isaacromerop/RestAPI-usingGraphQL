import { SET_POKEMONS } from "../types/index";

const PokemonReducer = (state, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export default PokemonReducer;

import React, { useReducer } from "react";
import { SET_POKEMONS } from "../types/index";
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";

const PokemonState = ({ children }) => {
  const initialState = {
    pokemons: [],
  };
  const setPokemons = (pokemons) => {
    dispatch({
      type: SET_POKEMONS,
      payload: pokemons,
    });
  };
  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  return (
    <PokemonContext.Provider value={{ pokemons: state.pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;

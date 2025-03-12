import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Pokemon = {
  id: number;
  name: string;
  classification: string;
};

export type PokemonState = {
  pokemon_data: Array<Pokemon>;
  search_term: string | undefined;
  status: PokemonStatus;
};

export enum PokemonStatus {
  UNREQUESTED,
  LOADING,
  ERROR,
  COMPLETE,
}

const initialState: PokemonState = {
  pokemon_data: [],
  search_term: undefined,
  status: PokemonStatus.UNREQUESTED,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonStatus(state, action: PayloadAction<PokemonStatus>) {
      state.status = action.payload;
    },
    setPokemon(state, action: PayloadAction<Pokemon[]>) {
      state.pokemon_data = action.payload;
    },
    setPokemonSearchTerm(state, action: PayloadAction<string>) {
      state.search_term = action.payload;
    },
  },
});

export const { setPokemonStatus, setPokemon, setPokemonSearchTerm } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;

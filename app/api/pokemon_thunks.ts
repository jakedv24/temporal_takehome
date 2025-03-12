import {
  Pokemon,
  PokemonStatus,
  setPokemon,
  setPokemonStatus,
} from "../stores/pokemon_slice";
import { AppThunk } from "../stores/store";
import { queryPokemonForSearch } from "./pokemon_service";

export function fetchPokemonDataForSearch(search_term: string): AppThunk {
  return async (dispatch, getState) => {
    const state = getState();
    if (
      state.pokemon.status == PokemonStatus.COMPLETE &&
      state.pokemon.search_term == search_term
    ) {
      // no-op
      return;
    }

    dispatch(setPokemonStatus(PokemonStatus.LOADING));

    let pokemon: Pokemon[];
    try {
      pokemon = await queryPokemonForSearch(search_term);
    } catch (err) {
      console.error(err);
      dispatch(setPokemonStatus(PokemonStatus.ERROR));
      return;
    }

    dispatch(setPokemon(pokemon));
    dispatch(setPokemonStatus(PokemonStatus.COMPLETE));
  };
}

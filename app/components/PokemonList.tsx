"use client";

import React, { FC, useCallback, useEffect } from "react";
import { Pokemon, PokemonStatus } from "../stores/pokemon_slice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchPokemonDataForSearch } from "../api/pokemon_thunks";

const PokemonList: FC = ({}) => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.pokemon.pokemon_data);
  const pokemonStatus = useAppSelector((state) => state.pokemon.status);
  const searchTerm = useAppSelector((state) => state.pokemon.search_term);

  const fetchPokemon = useCallback(
    (searchTerm: string | undefined) => {
      console.log({ msg: "fetching pokemon for", searchTerm });
      if (searchTerm == undefined) {
        return;
      }

      dispatch(fetchPokemonDataForSearch(searchTerm));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchPokemon(searchTerm);
  }, [searchTerm, fetchPokemon]);

  const handleRetryClick = () => {
    fetchPokemon(searchTerm);
  };

  const pokemonElements = (pokemon: Pokemon[]) => {
    if (pokemon.length == 0) {
      return <p>No results found. Please try a different search term.</p>;
    }

    return pokemon.map((p) => {
      return <div key={p.id}>{p.name}</div>;
    });
  };

  if (pokemonStatus == PokemonStatus.UNREQUESTED)
    return <p>Unrequested, please enter a search term.</p>;
  if (pokemonStatus == PokemonStatus.LOADING) return <p>Loading...</p>;
  if (pokemonStatus == PokemonStatus.ERROR)
    return (
      <p>
        Error fetching pokemon.
        <button type="button" onClick={() => handleRetryClick()}>
          Retry
        </button>
      </p>
    );

  return <div>{pokemonElements(pokemon)}</div>;
};

export default PokemonList;

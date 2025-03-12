"use client";

import React, { FC, useEffect } from "react";
import { Pokemon } from "../stores/pokemon_slice";
import { useAppSelector } from "../hooks";
import { fetchPokemonDataForSearch } from "../api/pokemon_thunks";

const PokemonList: FC = ({}) => {
  const pokemon = useAppSelector((state) => state.pokemon.pokemon_data);
  const searchTerm = useAppSelector((state) => state.pokemon.search_term);

  useEffect(() => {
    if (searchTerm == undefined) {
      return;
    }

    fetchPokemonDataForSearch(searchTerm);
  }, [searchTerm]);

  const pokemonElements = (pokemon: Pokemon[]) => {
    return pokemon.map((p) => {
      return <div key={p.id}>{p.name}</div>;
    });
  };

  return <div>{pokemonElements(pokemon)}</div>;
};

export default PokemonList;

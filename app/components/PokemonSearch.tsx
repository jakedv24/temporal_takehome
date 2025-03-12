"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Input from "../components/Input";
import { useAppDispatch } from "../hooks";
import { setPokemonSearchTerm } from "../stores/pokemon_slice";
import PokemonList from "./PokemonList";

export default function PokemonSearch() {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm == undefined) return;

    const debounce = setTimeout(() => {
      dispatch(setPokemonSearchTerm(searchTerm));
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchTerm, dispatch]);

  return (
    <div>
      <Input value={searchTerm || ""} onChange={handleTextChange} />
      <PokemonList />
    </div>
  );
}

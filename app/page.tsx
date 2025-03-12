"use client";

import { Provider } from "react-redux";
import { store } from "./stores/store";
import PokemonSearch from "./components/PokemonSearch";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <PokemonSearch />
      </Provider>
    </div>
  );
}

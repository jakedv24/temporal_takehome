import { Pokemon } from "../stores/pokemon_slice";

const BASE_URL = "https://meowing-bristle-alamosaurus.glitch.me";

type PokemonResp = {
  pokemon: Pokemon[];
  nextPage: string | undefined;
};

export async function queryPokemonForSearch(
  search_term: string
): Promise<Pokemon[]> {
  if (!search_term) {
    return [];
  }

  try {
    const { pokemon, nextPage } = await queryPagedPokemon(
      search_term,
      undefined
    );

    console.log({ pokemon, nextPage });

    let pokemon_acc = pokemon;
    let nextPageParam = nextPage;
    while (nextPageParam) {
      const { pokemon, nextPage } = await queryPagedPokemon(
        search_term,
        nextPageParam
      );

      pokemon_acc = pokemon_acc.concat(pokemon);
      nextPageParam = nextPage;
    }

    return pokemon_acc;
  } catch (error) {
    console.error(error);
    throw new Error("error getting paginated pokemon");
  }
}

async function queryPagedPokemon(
  search_term: string,
  page: string | undefined
): Promise<PokemonResp> {
  const resp = await fetch(
    `${BASE_URL}/api/pokemon/search/${search_term}${
      page ? `?page=${page}` : ""
    }`
  );

  if (!resp.ok) {
    throw new Error("error getting response from api");
  }

  return resp.json();
}

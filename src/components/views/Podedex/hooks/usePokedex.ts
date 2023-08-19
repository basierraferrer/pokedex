import { useEffect, useState } from "react";
import { getPokemonDetailByUrlApi, getPokemonsApi } from "../../../../api/PokeApi";
import { IPokemonDetail } from "../../../../types";

export function usePokedex() {
  const [pokemonList, setPokemonList] = useState<IPokemonDetail[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState<Error | undefined>(undefined)
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const loadPokemons = async () => {
    try {
      setIsLoading(true);
      const result = await getPokemonsApi(nextUrl);
      console.log("🚀 ~ file: usePokedex.ts:15 ~ loadPokemons ~ nextUrl:", nextUrl);
      setNextUrl(result.next);

      const pokemonArray: IPokemonDetail[] = await Promise.all(
        result.results.map(async (item) => {
          const pokemonDetail = await getPokemonDetailByUrlApi(item.url);
          return ({
            id: pokemonDetail.id,
            image: pokemonDetail.sprites.other['official-artwork'].front_default,
            name: pokemonDetail.name,
            order: pokemonDetail.order,
            type: pokemonDetail.types[0].type.name,
          });
        })
      );

      setPokemonList([...pokemonList, ...pokemonArray])
    } catch (error) {
      console.log(error);
      setHasError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!isLoading) loadPokemons();
  }, [])

  return { pokemonList, isLoading, hasError, nextUrl, loadPokemons };
}
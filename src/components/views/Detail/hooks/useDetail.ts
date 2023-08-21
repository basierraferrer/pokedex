import { useEffect, useState } from "react";
import { getPokemonDetailsApi } from "../../../../api/PokeApi";
import { Pokemon } from "../../../../api/types/api";

export function useDetail(id: number) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState<Error | undefined>(undefined)


  const getDetailPokemon = async () => {
    try {
      setIsLoading(true);
      const result = await getPokemonDetailsApi(id);
      setPokemon(result);

    } catch (error) {
      setHasError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDetailPokemon()
  }, [id])

  return { isLoading, pokemon, hasError };
}
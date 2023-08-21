import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { usePokedex } from './hooks/usePokedex'
import PokeList from '../../organisms/PokeList';

interface IPokedexProps {
  goToDetail: (id: number, name: string) => void
}

export default function Pokedex({ goToDetail }: IPokedexProps) {
  const { isLoading, pokemonList, hasError, nextUrl, loadPokemons } = usePokedex();
  return (
    <PokeList
      isLoading={isLoading}
      list={pokemonList}
      hasError={hasError}
      hasMore={!!nextUrl}
      loadMoreItems={loadPokemons}
      goToDetail={goToDetail}
    />
  )
}
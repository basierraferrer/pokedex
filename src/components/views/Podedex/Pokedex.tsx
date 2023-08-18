import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { usePokedex } from './hooks/usePokedex'
import PokeList from '../../organisms/PokeList';

export default function Pokedex() {
  const { isLoading, pokemonList, hasError, nextUrl, loadPokemons } = usePokedex();
  return (
    <PokeList
      isLoading={isLoading}
      list={pokemonList}
      hasError={hasError}
      hasMore={!!nextUrl}
      loadMoreItems={loadPokemons}
    />
  )
}
import React from 'react'
import { Text } from 'react-native'

import { usePokedex } from './hooks/usePokedex'
import PokeList from '../../organisms/PokeList';
import Loader from '../../atoms/Loader';

interface IPokedexProps {
  goToDetail: (id: number, name: string) => void
}

export default function Pokedex({ goToDetail }: IPokedexProps) {
  const { isLoading, pokemonList, hasError, nextUrl, loadPokemons } = usePokedex();

  // if is loading and its the first time
  if (isLoading && !pokemonList.length)
    return <Loader />
  // has error and no have elements to show
  if (hasError && !pokemonList.length)
    return <Text>No Data: Error</Text>

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
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import HeaderDetail from '../../molecules/HeaderDetail'
import { useDetail } from './hooks/useDetail';
import Types from '../../molecules/Types';
import Stats from '../../molecules/Stats';
import Loader from '../../atoms/Loader';

interface IPokemonDetailProps {
  id: number
}

export default function PokemonDetail({ id }: IPokemonDetailProps) {
  const { isLoading, hasError, pokemon } = useDetail(id);

  if (isLoading) {
    return <Loader />
  }

  if (!pokemon) return null;

  return (
    <ScrollView>
      <HeaderDetail
        image={pokemon.sprites.other['official-artwork'].front_default}
        name={pokemon.name}
        order={pokemon.order}
        type={pokemon.types[0].type.name}
      />
      <Types types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}
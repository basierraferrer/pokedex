import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { IPokemonDetail } from '../../types';
import PokemonCard from '../molecules/PokemonCard';

interface PokeListProps {
  isLoading?: boolean,
  list: IPokemonDetail[],
  hasError?: Error,
}

export default function PokeList({ isLoading, list, hasError }: PokeListProps) {

  if (isLoading)
    return <ActivityIndicator />

  if (hasError)
    return <Text>No Data: Error</Text>

  return (
    <FlatList
      data={list}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <PokemonCard {...item} />}
      style={styles.flatListContainer}
    />
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5
  }
})
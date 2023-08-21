import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, Platform } from 'react-native';
import { IPokemonDetail } from '../../types';
import PokemonCard from '../molecules/PokemonCard';

interface PokeListProps {
  isLoading: boolean
  list: IPokemonDetail[]
  hasError?: Error
  hasMore: boolean
  loadMoreItems: () => Promise<void>
  goToDetail: (id: number, name: string) => void
}

export default function PokeList({ isLoading, list, hasError, hasMore, loadMoreItems, goToDetail }: PokeListProps) {
  // if is loading and its the first time
  if (isLoading && !list.length)
    return <ActivityIndicator />
  // has error and no have elements to show
  if (hasError && !list.length)
    return <Text>No Data: Error</Text>

  const loadMore = () => {
    !isLoading && hasMore && loadMoreItems();
  }

  return (
    <FlatList
      data={list}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <PokemonCard {...item} onPress={goToDetail} />}
      style={styles.flatListContainer}
      onEndReached={loadMore}
      ListFooterComponent={isLoading &&
        hasMore ?
        (
          <ActivityIndicator
            size='large'
            style={styles.spinner}
            color="#AEAEAE"
          />
        ) : null}
    />
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 30 : 0
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60
  }
})
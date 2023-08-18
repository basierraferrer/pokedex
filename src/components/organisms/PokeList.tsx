import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, Platform } from 'react-native';
import { IPokemonDetail } from '../../types';
import PokemonCard from '../molecules/PokemonCard';
import { hasIn } from 'lodash';

interface PokeListProps {
  isLoading: boolean,
  list: IPokemonDetail[],
  hasError?: Error,
  hasMore: boolean
  loadMoreItems: () => Promise<void>
}

export default function PokeList({ isLoading, list, hasError, hasMore, loadMoreItems }: PokeListProps) {

  if (isLoading)
    return <ActivityIndicator />

  if (hasError)
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
      renderItem={({ item }) => <PokemonCard {...item} />}
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
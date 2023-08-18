import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { usePokedex } from './hooks/usePokedex'
import PokeList from '../../organisms/PokeList';

export default function Pokedex() {
  const { pokemonList } = usePokedex();
  console.log("🚀 ~ file: Pokedex.tsx:8 ~ Pokedex ~ pokemonList:", pokemonList);
  return (
    <View>
      <Text>Pokedex view</Text>
    </View>
  )
}
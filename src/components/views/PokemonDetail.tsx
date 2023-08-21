import { View, Text } from 'react-native'
import React from 'react'

interface IPokemonDetailProps {
  id: number
}

export default function PokemonDetail({ id }: IPokemonDetailProps) {
  return (
    <View>
      <Text>PokemonDetail {id}</Text>
    </View>
  )
}
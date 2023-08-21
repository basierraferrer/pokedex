import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { PokemonType } from '../../api/types/api'
import { getColorByType } from '../../utils/getColor'
import { capitalize } from 'lodash'

interface TypeDetailProps {
  types: PokemonType[]
}

export default function TypeDetail({ types }: TypeDetailProps) {
  return (
    <View style={styles.content}>
      {types.map((type, index) => <Text key={index} style={{
        backgroundColor: getColorByType(type.type.name.toLowerCase()),
        ...styles.pill
      }}>{capitalize(type.type.name)}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pill: {
    borderRadius: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    paddingHorizontal: 30,
    paddingVertical: 5
  }
})
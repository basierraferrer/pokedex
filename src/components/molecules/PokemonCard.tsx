import React from 'react'
import { capitalize } from 'lodash'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import { IPokemonDetail } from '../../types'
import { getColorByType } from '../../utils/getColor'

export default function PokemonCard({ id, image, name, order, type }: IPokemonDetail) {

  const bgCard = {
    backgroundColor: getColorByType(type),
    ...styles.bgStyle
  }

  const onPress = () => {
    console.log(`Go to ${name} ...`);
  }
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgCard}>
            <Text style={styles.number}>#{`${order}`.padStart(3, '0')}</Text>
            <Text style={styles.name}>{capitalize(name)}</Text>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyle: {
    borderRadius: 15,
    flex: 1,
    padding: 10
  },
  number: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  name: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    paddingTop: 10
  },
  image: {
    bottom: 2,
    height: 90,
    position: 'absolute',
    right: 2,
    width: 90,
  }
})
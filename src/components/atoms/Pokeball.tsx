import React from 'react'
import { Image } from 'react-native'

export default function Pokeball() {
  return (
    <Image
      source={require('../../assets/pokeball.png')}
      style={{
        width: 75,
        height: 75,
        top: -15
      }}
    />
  )
}
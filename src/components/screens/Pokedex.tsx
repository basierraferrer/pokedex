import React from 'react'
import { SafeAreaView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TStackParams } from '../../types'
import Pokedex from '../views/Podedex/Pokedex'

export default function PokedexScreen({ navigation }: NativeStackScreenProps<TStackParams, 'Pokedex'>) {
  const goToDetail = (id: number, name: string) => {
    navigation.navigate('Pokemon', { id, name })
  }
  return (
    <SafeAreaView>
      <Pokedex goToDetail={goToDetail} />
    </SafeAreaView>
  )
}
import React from 'react'
import { View } from 'react-native'
import PokemonDetail from '../views/PokemonDetail'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TStackParams } from '../../types'

export default function PokemonScreen({ navigation, route }: NativeStackScreenProps<TStackParams, 'Pokemon'>) {

  return (
    <View>
      <PokemonDetail id={route.params.id} />
    </View>
  )
}
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import PokemonDetail from '../views/Detail/PokemonDetail'
import { TStackParams } from '../../types'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function PokemonScreen({ navigation, route }: NativeStackScreenProps<TStackParams, 'Pokemon'>) {

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => <Icon
        name="arrow-left"
        size={16}
        color="black"
        style={{ marginLeft: 10 }}
        onPress={navigation.goBack}
      />
    })
  })

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PokemonDetail id={route.params.id} />
    </SafeAreaView>
  )
}
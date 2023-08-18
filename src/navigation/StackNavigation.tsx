import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import PokedexScreen from '../components/screens/Pokedex';
import PokemonScreen from '../components/screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pokedex"
        component={PokedexScreen}
        options={
          {
            title: '',
            headerTransparent: true,
          }
        } />
      <Stack.Screen
        name="pokemon"
        component={PokemonScreen}
        options={
          {
            title: 'Pokemon'
          }
        }
      />
    </Stack.Navigator>
  )
}
import React from 'react'
import { capitalize } from 'lodash';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TStackParams } from '../types';
import PokedexScreen from '../components/screens/Pokedex';
import PokemonScreen from '../components/screens/Pokemon';

const Stack = createNativeStackNavigator<TStackParams>();

export default function NativeStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Pokedex">
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={
          {
            title: '',
            headerTransparent: true,
            animation: 'slide_from_left'
          }
        } />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={
          ({ route }) => ({
            title: capitalize(route.params.name),
            headerTitleAlign: 'center',
            animation: 'slide_from_right',
          })
        }
      />
    </Stack.Navigator>
  )
}
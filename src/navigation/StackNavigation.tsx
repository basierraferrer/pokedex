import React from 'react'
import { capitalize } from 'lodash';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TStackParams } from '../types';
import BackButton from '../components/atoms/BackButton';
import PokedexScreen from '../components/screens/Pokedex';
import PokemonScreen from '../components/screens/Pokemon';

const Stack = createNativeStackNavigator<TStackParams>();

export default function StackNavigation() {
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
            animation: 'slide_from_right'
          })
        }
      />
    </Stack.Navigator>
  )
}
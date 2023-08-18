import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PokeStackNavigation from './StackNavigation';

import AccountScreen from '../components/screens/Account';
import FavoriteScreen from '../components/screens/Favorites';

import Pokeball from '../components/atoms/Pokeball';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={
          {
            title: "Favoritos",
            tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />
          }
        }
      />
      <Tab.Screen
        name="Pokedex"
        component={PokeStackNavigation}
        options={
          {
            title: '',
            tabBarIcon: () => <Pokeball />,
            headerTransparent: true,
          }
        }
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={
          {
            title: 'Mi cuenta',
            tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />
          }
        }
      />
    </Tab.Navigator>
  )
}

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NativeStackNavigation from './NativeStackNavigation';

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
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />
          }
        }
      />
      <Tab.Screen
        name="Main"
        component={NativeStackNavigation}
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
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />
          }
        }
      />
    </Tab.Navigator>
  )
}

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function BackButton() {
  const navigation = useNavigation();

  const handleBack = () => {
    console.log('go to back...');
    //navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={handleBack}>
      <Icon name="arrow-left" color='black' style={{
        marginRight: 8
      }} />
    </TouchableWithoutFeedback>
  )

}

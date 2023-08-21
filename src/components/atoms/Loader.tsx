import React from 'react'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Loader() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator
        size='large'
        color='blue'
      />

    </SafeAreaView>
  )
}
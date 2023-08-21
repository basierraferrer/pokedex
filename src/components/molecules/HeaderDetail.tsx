import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getColorByType } from '../../utils/getColor'

interface HeaderProps {
  image: string | null,
  name: string,
  order: number,
  type: string
}

export default function HeaderDetail({ image, name, order, type }: HeaderProps) {
  const source = image ? { uri: image } : require('../../assets/pokeball.png');
  const bgStyle = {
    backgroundColor: getColorByType(type.toLowerCase()),
    ...styles.backGround,
  }
  return (
    <View style={styles.header}>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.contentImg}>
          <Text style={styles.order}>#{`${order}`.padStart(3, '0')}</Text>
          <Image source={source} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    height: 'auto',
  },
  backGround: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderBottomEndRadius: 200,
    borderBottomLeftRadius: 200,
    transform: [{ scaleX: 1.5 }]
  },
  content: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  order: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    position: 'absolute',
    right: 10,
    top: 0
  },
  image: {
    width: 250,
    height: 250,
    //resizeMode: 'contain'
  }
})
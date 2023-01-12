import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styles from './styles/sts'
import { View } from 'react-native'
import ICard from './components'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ICard></ICard>
    </View>
  )
}

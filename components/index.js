import { View, ScrollView } from 'react-native'
import React from 'react'
import bd from '../databases/info.json'
import styles from '../styles/sts'
import Card from './Card'
export default function ICard( ) {
  return (
    <ScrollView style={styles.scroll}>
      <View>
        {bd.map((item, index) => {
          return <Card item={item} key={index} />
        })}
      </View>
    </ScrollView>
  )
}

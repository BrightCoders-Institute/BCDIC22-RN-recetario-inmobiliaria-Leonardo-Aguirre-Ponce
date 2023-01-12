import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/sts'
import { Ionicons, EvilIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import PropTypes from 'prop-types'

export default function Card(props) {
  const [clicked, setClicked] = useState(false)
  return (
    <View style={styles.card}>
      <View
        style={{
          justifyContent: 'center',
          position: 'relative',
          alignItems: 'center',
          width: '28%',
        }}
      >
        <Image style={styles.img} source={{ uri: props.item.pic }} />
        <View style={styles.starContainer}>
          <AntDesign name="star" size={12} color="#EEBA00" />
          <Text
            style={{
              color: '#7A6229',
              marginLeft: 5,
              fontWeight: '700',
            }}
          >
            4.7
          </Text>
        </View>
      </View>
      <View style={styles.contentCard}>
        <Text style={[styles.bold, styles.fontxl]}>{props.item.name}</Text>
        <View style={styles.location}>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={{ marginLeft: 3, color: 'gray' }}>
            {props.item.loc}
          </Text>
        </View>
        <View style={styles.info}>
          <View style={styles.row}>
            <Ionicons name="bed-outline" size={24} color="gray" />
            <Text style={styles.iconSpace}>
              {props.item.featrs.rooms}
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="shower" size={24} color="gray" />
            <Text style={styles.iconSpace}>
              {props.item.featrs.baths}
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="move-resize" size={24} color="gray" />
            <Text style={styles.iconSpace}>
              {props.item.featrs.ft} ft²
            </Text>
          </View>
        </View>
        <Text>{props.item.rent}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonHeart}
        onPress={() => setClicked(!clicked)}
      >
        {clicked ? (
          <AntDesign name="heart" size={12} color="white" />
        ) : (
          <AntDesign name="hearto" size={12} color="white" />
        )}
      </TouchableOpacity>
    </View>
  )
}
Card.propTypes = {
  item: PropTypes.object,
}

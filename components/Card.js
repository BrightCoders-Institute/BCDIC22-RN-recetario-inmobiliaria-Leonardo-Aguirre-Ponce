import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions, Text } from 'react-native';
import dbase from '../databases/info.json';
//impor

const { width } = Dimensions.get('window');

export default class App extends Component {
	
  render() {
    return (
      <ScrollView 
        ref={(scrollView) => { this.scrollView = scrollView; }}
        style={styles.container}
        //pagingEnabled={true}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>
        <View style={{
          marginTop: 100,
          justifyContent: 'space-between',
          borderWidth: 2,
          backgroundColor: '#F5FDFF',
          width: '70%',
          height: '25%',
          borderRadius: 10,
          paddingHorizontal : 30
          }}>
            <Text>
              hola
            </Text>
          
        </View>

        <View style={styles.view2} />
        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { },
  view: {
    
  },
  view2: {
    marginTop: 100,
    backgroundColor: 'red',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
});

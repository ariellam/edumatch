import React, {Component} from 'react'
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native'
const BLUE = '#3EB2FF'
const ORANGE = '#FF9539'
const RED = '#FE0101'

export default class extends Component {

  render() {
    return(
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.userName}> Ariel Lam</Text>
        </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  userName: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLUE,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: RED,
  }
})

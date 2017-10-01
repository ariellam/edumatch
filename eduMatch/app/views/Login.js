import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class extends Component {
  // async componentDidMount() {
  //   await new Promise(r=>setTimeout(r, 3000))
  //   this.props.navigation.navigate('Signup')
  // }
  static navigationOptions = {
    title: 'Student'
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EB2FF'
  }
})

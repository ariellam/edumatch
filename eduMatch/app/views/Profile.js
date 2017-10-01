import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class extends Component {
  // async componentDidMount() {
  //   await new Promise(r=>setTimeout(r, 3000))
  //   this.props.navigation.navigate('Signup')
  // }
  render() {
    return(
      <View>
        <Text>Profile</Text>
      </View>
    )
  }
}

import React, {Component} from 'react'
import {ScrollView, TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
const BLUE = '#3EB2FF'
const ORANGE = '#FF9539'
const RED = '#FE0101'

export default class Login extends Component {


  //states to change color and title depending type of user


  render() {
    return(
      <View style={styles.container}>

        <View style={styles.username}>
          <TextInput placeholder="Username" />
        </View>

        <View style={styles.password}>
          <TextInput placeholder="Password" />
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={{color: ORANGE, fontSize: 26}} children='Login'/>
          </TouchableOpacity>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLUE,
    padding: 20,
  },

  username: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 250,



  },
  password: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    

  },

})

import React from 'react'
import PropTypes from 'prop-types'
import {Alert, StyleSheet, Button, Text, View } from 'react-native'
import {
  StackNavigator,
} from 'react-navigation'
import Main from './views/Main'
import Login from './views/Login'
import Profile from './views/Profile'
import Signup from './views/Signup'

const App = StackNavigator({
  Main: { screen: Main },
  Login: { screen: Login },
  Profile: { screen: Profile },
  Signup: { screen: Signup },
})

export default class app extends React.Component {
  render() {
    return <App />

  }
}


const styles = StyleSheet.create({





});

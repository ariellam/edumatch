/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class eduMatch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          
        </Text>
          <Button onPress={() => Alert.alert('Login')} title="Login" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          <Button onPress={() => Alert.alert('Sign up')} title="Sign Up" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F88D8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('eduMatch', () => eduMatch);

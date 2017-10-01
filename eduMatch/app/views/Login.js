import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';

export default class Login extends Component {

    render() {
    return(
    <ScrollView style={{padding: 20}}>
      <Text 
          style={{fontSize: 27, top: 102, left: 156,}}>
          Login
      </Text>

      <View style={styles.username}>
      <TextInput placeholder='Username' />
      </View>

      <View style={styles.password}>
      <TextInput placeholder='Password' />
      </View>

      <View style={styles.loginButton}>
      <Button onPress={() => Alert.alert('asd')} title="Enter" />
      </View>
    </ScrollView>

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
  loginButton: {
   position:'absolute',
   top: 400,
   left: 150
  },
  username: {
   position:'absolute',
   top: 250,
   left: 150
  },
  password: {
   position:'absolute',
   top: 300,
   left: 150
  },
});
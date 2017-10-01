import React from 'react';
import PropTypes from 'prop-types';
import {Alert, StyleSheet, Button, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Login from './views/Login'
import Profile from './views/Profile'
import Signup from './views/Signup'

const App = StackNavigator({
  Login: { screen: Login },
  Profile: { screen: Profile },
  Signup: { screen: Signup },
});

export default class app extends React.Component {
  render() {
    return <App />
    // return (
    //   <View >
    //     <NavigatorIOS
    //       initialRoute={{
    //         title: 'Welcome Student',
    //         passProps: {index: 1},
    //       }}
    //       style={{flex: 1}}
    //     />
    //     <Button style = {styles.buttons} onPress={() => Alert.alert('login')} title="Login"/>
    //   </View>
    //
    // )
  }
}

class mentor extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: mentor,
      title: 'Welcome Mentor',
      passProps: {index: nextIndex}
    });
  }

  render() {
    return (
      <View style = {styles.mentorButton}>
        <Text>Current Scene: { this.props.title }</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mentorButton: {
    position: 'relative',
    top: 50,

  },
  buttons: {
    position: 'relative',
    top: 250,



  }
});
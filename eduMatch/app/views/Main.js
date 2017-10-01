import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const BLUE = '#3EB2FF'
const ORANGE = '#FF9539'

export default class extends Component {
  // async componentDidMount() {
  //   await new Promise(r=>setTimeout(r, 3000))
  //   this.props.navigation.navigate('Signup')
  // }
  static navigationOptions = {
    header: null
  }
  state = {backgroundColor: BLUE}
  render() {
    return(
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <View style={{height: 61, flexDirection: 'row'}}>
          <TouchableOpacity style={styles.studentButton } onPress={() => this.setState({backgroundColor: BLUE})}>
            <Text style={styles.studentButtonText}  children='Student'/>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => this.setState({backgroundColor: ORANGE})} style={styles.mentorButton}>
            <Text style={styles.studentButtonText} children='Mentor'/>
          </TouchableOpacity>
        </View>

          <View style={{flex: 1, paddingTop: 51}}>
            <View style={{alignItems: 'center'}}>
            <View style={{width: 134, height: 134, backgroundColor: 'white'}}/>
            <Text style={{fontFamily: 'Avenir', color:'white', fontSize: 60}} >EduMatch</Text>
          </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{color: BLUE, fontSize: 26}} children='Login'/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signupButton} onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={{color: BLUE, fontSize: 26}} children='Sign Up'/>
              </TouchableOpacity>
            </View>

          </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20
  },
  studentButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLUE
  },
  studentButtonText: {
    color: 'white',
    fontSize: 26,

  },
  mentorButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ORANGE,
  },
  loginButton: {
    marginHorizontal: 55,
    height: 82,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  signupButton: {
    marginHorizontal: 55,
    height: 82,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

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
  render() {
    return(
      <View style={styles.container}>
        <View style={{height: 61, flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: BLUE }}>
            <Text style={{color: 'white', fontSize: 26}}  children='Student'/>
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: ORANGE}}>
            <Text style={{color: 'white', fontSize: 26}}  children='Mentor'/>
          </TouchableOpacity>
        </View>

          <View style={{flex: 1, paddingTop: 51}}>
            <View style={{alignItems: 'center'}}>
            <View style={{width: 134, height: 134, backgroundColor: 'white'}}/>
            <Text style={{fontFamily: 'Avenir', color:'white', fontSize: 60}} >EduMatch</Text>
</View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableOpacity style={{marginHorizontal: 55, height: 82, backgroundColor: 'white', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 28}}>
                <Text style={{color: BLUE, fontSize: 26}} children='Login'/>
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 55, height: 82, backgroundColor: 'white', borderRadius: 16, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: BLUE, fontSize: 26}} children='Sign Up'/>
              </TouchableOpacity>
            </View>

          </View>

        <Text>Main</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE,
    paddingTop:20
  }
})

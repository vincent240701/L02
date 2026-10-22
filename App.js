import React, {Component} from 'react';
import { View, Text } from 'react-native';

const Welcome = ({ code , name }) => {
  return (
      <Text>
        Welcome to {code} - {name}
      </Text>
  )
}
class Moduleinfo extends Component {
  render() {
    return (
        <View>
          <Text></Text>
          <Text> These are my modules this semester: </Text>
          <Welcome code="C346" name="Mobile app development"/>
          <Welcome code="C105" name="Introduction to programming"/>
          <Welcome code="C337" name="Immersive technology"/>
        </View>
    )
  }
}
export default Moduleinfo;
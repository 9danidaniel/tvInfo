import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';

class Footer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Daniel Azulay</Text>
      </View>
    );
  }
}
export default Footer;
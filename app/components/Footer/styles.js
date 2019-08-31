import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';

var {
    height,
    width
  } = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        position: 'absolute',
        marginTop: height-105,
        width: width,
        backgroundColor: '#0C1821',
        padding: 15,
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontFamily: 'Roboto-Regular',
    }
})
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';

var {
    height,
    width
  } = Dimensions.get('window');


export default StyleSheet.create({
    mainContainer: {
        
    },
    detailContainer: {
      height: 380,
      paddingBottom: 20,
      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 20
    },
    summaryText: {
      fontSize: 16,
    },
    genreText: {
      fontSize: 19,
      marginTop: 10,
      color: 'grey'
    },
    timeText: {
      fontSize: 16,
      marginTop: 10,
      color: '#0C1821'
    },
    titleText: {
      fontSize: 16,
      marginTop: 10,
      color: '#0C1821'
    },
    scheduleText: {
      fontSize: 16,
      marginTop: 10,
      color: 'grey'
    },
    networkText: {
      fontSize: 16,
      marginTop: 10,
      color: 'grey'
    },
    langText: {
      fontSize: 16,
      marginTop: 10,
      color: 'grey'
    },
})
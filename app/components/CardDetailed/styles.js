import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';

var {
    height,
    width
  } = Dimensions.get('window');


export default StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 5,
      flexDirection: 'row'
    },
    titlesContainer: {
        marginLeft: 15,
    },
    showTitleText: {
        fontSize: 22,
        marginRight: 120,
        fontFamily: 'Raleway-Regular',
    },
    ratingTitleText: {
      fontSize: 26,
      marginRight: 120,
      fontFamily: 'Roboto-Regular',
  },
  ratingTitleTextGreen: {
    fontSize: 26,
    marginRight: 120,
    color: 'green',
    fontFamily: 'Roboto-Regular',
},
    imgStyle: {
        width: width-250,
        height: 150,
    }
})
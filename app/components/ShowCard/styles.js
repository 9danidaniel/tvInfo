import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';

var {
    height,
    width
  } = Dimensions.get('window');


export default StyleSheet.create({
    container: {
      padding: 25,
      marginTop: 5,
      flexDirection: 'row'
    },
    titlesContainer: {
        marginLeft: 15,
        marginRight: 30
    },
    showTitleText: {
        fontSize: 19,
        marginRight: 130,
        fontFamily: 'Raleway-Regular',
    },
    ratingTitleText: {
      fontSize: 26,
      //marginRight: 120,
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
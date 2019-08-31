import React, {Component} from 'react';
import {View, Text,Image, YellowBox} from 'react-native';
import styles from './styles.js';
import Rating from 'react-native-rating'

class CardDetailed extends Component {

  constructor(props){
    YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps is deprecated']);
    super(props);
	this.state = {
      starCount: 1
    }
  }  

  render () {
    const {showTitle, showImage, showRating} = this.props;
    return (
      <View>
        <View style={styles.container}>
            <Image
                    resizeMode="contain"
                    style = {styles.imgStyle}
                    source={{ uri: showImage}}
                />
                <View style={styles.titlesContainer}>
                    <Text style={styles.showTitleText}>{showTitle}</Text>
                    <Text style={(showRating >= 8) ? styles.ratingTitleTextGreen : styles.ratingTitleText} >{(showRating == null) ? 'no rating' : showRating}</Text>
                    <Rating
                        selectedStar={require('tvInfo/app/images/starfilled.png')}
                        unselectedStar={require('tvInfo/app/images/starunfilled.png')}
                        stagger={80}
                        containerStyle={{flexDirection: 'row',opacity: 0.9}}
                        initial={((showRating*10)/100)*5}
                        editable={false}
                        maxScale={1.4}
                        starStyle={{
                        width: 20,
                        height: 20,
                        marginRight: 3
                        }}
                    />
                </View>
        </View>
        <View
            style={{
                borderBottomColor: 'black',
                opacity: 0.1,
                borderBottomWidth: 1,
            }}
        />
      </View>
    );
  }
}
export default CardDetailed;
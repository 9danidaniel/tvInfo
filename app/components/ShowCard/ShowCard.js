import React, {Component} from 'react';
import {View, Text,Image, YellowBox, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import Rating from 'react-native-rating'
import Icon from 'react-native-vector-icons/SimpleLineIcons'


class ShowCard extends Component {

  constructor(props){
    YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps is deprecated']);
    super(props);
	this.state = {
      starCount: 1
    }
  }  

  showDetailes = () => {
      this.props.navigation.navigate('ShowScreen', {
          showTitle: this.props.showTitle,
          showImage: this.props.showImage,
          showRating: this.props.showRating,
          showSummary: this.props.showSummary,
          showGenres: this.props.showGenres,
          showTime: this.props.showTime,
          showSchedule: this.props.showSchedule,
          showNetwork: this.props.showNetwork,
          showLang: this.props.showLang
      })
  }

  render () {
    const {showTitle, showImage, showRating} = this.props;
    return (
      <TouchableOpacity onPress={this.showDetailes}>
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
        <Icon name="arrow-right" size={25} style={{ position: 'absolute', marginLeft: 300, marginTop: 85, opacity:0.3}} color='grey'/>
        <View
            style={{
                borderBottomColor: 'black',
                opacity: 0.1,
                borderBottomWidth: 1,
            }}
        />
      </TouchableOpacity>
    );
  }
}
export default ShowCard;
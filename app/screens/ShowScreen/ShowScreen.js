import React, {Fragment, Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView
} from 'react-native';
import styles from './styles.js';
import Footer from 'tvInfo/app/components/Footer/Footer'
import CardDetailed from '../../components/CardDetailed/CardDetailed.js';



export default class ShowScreen extends Component{

  constructor(props){
    super(props);
		this.state = {
    }
  }

  render(){
    const { navigation } = this.props;
    const showTitle = navigation.getParam('showTitle', '');
    const showImage = navigation.getParam('showImage', '');
    const showRating = navigation.getParam('showRating', '');
    const showSummary = navigation.getParam('showSummary', '');
    const regex = /(<([^>]+)>)/ig;
    const showSummaryClean = showSummary.replace(regex, '');
    const showGenres = navigation.getParam('showGenres', '');
    const showTime = navigation.getParam('showTime', '');
    const showSchedule = navigation.getParam('showSchedule', '');
    const showNetwork = navigation.getParam('showNetwork', '');
    const showLang = navigation.getParam('showLang', '');


    return (
        <View>
            <StatusBar
                      backgroundColor="#0C1821"
                      barStyle="light-content"
                  />
          <View style={styles.mainContainer}>
              <CardDetailed
                showTitle={showTitle}
                showImage={showImage}
                showRating={showRating}
              />
              <ScrollView style={styles.detailContainer}>
                <Text style={styles.summaryText}>{showSummaryClean}</Text>
                <View style={{flexDirection: 'row'}}>
                  { showGenres.map((item, key)=>(
                  <Text key={key} style={styles.genreText} > { item+' ' } </Text>)
                  )}
                </View>
                <Text style={styles.timeText}>{'Airing at '+showTime}</Text>
                <Text style={styles.titleText}>On days</Text>
                <View >
                  { showSchedule.map((item, key)=>(
                  <Text key={key} style={styles.scheduleText} > { item+' ' } </Text>)
                  )}
                </View>
                <Text style={styles.titleText}>Network</Text>
                <Text style={styles.networkText}>{showNetwork}</Text>
                <Text style={styles.titleText}>Language</Text>
                <Text style={styles.langText}>{showLang}</Text>

                <Text style={{marginTop: 100}}>...</Text>
              </ScrollView>
            </View>
          <Footer/>  
        </View>
    );
  };
}




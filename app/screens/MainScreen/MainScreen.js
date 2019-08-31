import React, {Fragment, Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Footer from 'tvInfo/app/components/Footer/Footer'
import ShowCard from 'tvInfo/app/components/ShowCard/ShowCard'

var {
  height,
  width
} = Dimensions.get('window');


export default class MainScreen extends Component{

  constructor(props){
    super(props);
		this.state = {
      loading: true,
      data: []
    }
  }

componentDidMount(){
  this.fetchData()
  
}

fetchData = async () => {
  fetch("http://api.tvmaze.com/shows")
  .then(response => response.json())
  .then((responseJson)=> {
    this.setState({
    loading: false,
    data: responseJson
    })
  })
  .catch(error=>console.log(error)) //to catch the errors if any
  
}


render(){
  if(this.state.loading){
    return( 
      <View style={{marginTop: 35}}> 
        <ActivityIndicator size="large" color="#0C1821"/>
      </View>
  )}
    return (
        <View>
            <StatusBar
                      backgroundColor="#0C1821"
                      barStyle="light-content"
                  />
          <View style={styles.mainContainer}>
              <FlatList 
                data={this.state.data}
                keyExtractor= {item=>item.id.toString()}
                renderItem={
                  ({item,index}) => {
                  return(
                    <ShowCard
                    navigation={this.props.navigation}
                    showTitle={item.name}
                    showImage={item.image.medium}
                    showRating={item.rating.average}
                    showSummary={item.summary}
                    showGenres={item.genres}
                    showTime={item.schedule.time}
                    showSchedule={item.schedule.days}
                    showNetwork={(item.hasOwnProperty("network").name) ? item.network.name : '...'} //problem with api network name cannot be fetched
                    showLang={item.language}
                    />
                  );
                }
                }
                />
            </View>
          <Footer/>  
        </View>
    );
  };
}




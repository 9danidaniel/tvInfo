import React, {Component} from 'react';
import {
  UIManager,
  View,
} from 'react-native';
import MainNavigator from './app/config/routes.js'


export default class tvInfo extends Component{

  constructor(props){
		super(props);
		this.state = {
		
    }
  }

  
  render(){
    UIManager.setLayoutAnimationEnabledExperimental &&   UIManager.setLayoutAnimationEnabledExperimental(true);
    return(
      <MainNavigator/>
    )
  }


};




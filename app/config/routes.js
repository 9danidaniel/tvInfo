import { createStackNavigator, createAppContainer } from 'react-navigation';
import { fromLeft, fromRight } from 'react-navigation-transitions';

import MainScreen from 'tvInfo/app/screens/MainScreen/MainScreen.js';
import ShowScreen from 'tvInfo/app/screens/ShowScreen/ShowScreen.js';



const MainNavigator = createStackNavigator(
    {
        MainScreen: {
            screen: MainScreen,
            navigationOptions: () => ({
                title: 'tvInfo',
                headerTitleStyle: {
                    fontFamily: 'Raleway-Regular'
                }
              }),
        },
        //TODO CHANGE TO SHOW TITLE
        ShowScreen: {
            screen: ShowScreen,
            navigationOptions: ({navigation}) => ({
                title: navigation.getParam('showTitle', 'show details'),
                headerTitleStyle: {
                    fontFamily: 'Raleway-Regular'
                }
              }),
        },
    }, 
    {
        initialRouteName: 'MainScreen',
        transitionConfig: () => fromRight(),
    }
);


export default createAppContainer(MainNavigator);

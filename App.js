import React from 'react';

import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import ViewUser from './pages/ViewUser';
 
import SplashScreen from './pages/SplashScreen';



 
const App = createStackNavigator({
 SplashScreen: {
     screen: SplashScreen,
   },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#1565C0' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'Welcom User',
      headerStyle: { backgroundColor: '#1565C0' },
      headerTintColor: '#ffffff',
    },
  },
  // LoginUser: {
  //   screen: ViewUser,
  //   navigationOptions: {
  //     title: 'Welcome User',
  //     headerStyle: { backgroundColor: '#1565C0' },
  //     headerTintColor: '#ffffff',
  //   },
  // },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#1565C0' },
      headerTintColor: '#ffffff',
    },
  },
    
  
});

export default createAppContainer(App);
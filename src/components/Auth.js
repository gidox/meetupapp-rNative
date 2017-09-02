import React from 'react';
import { TabNavigator } from 'react-navigation';

import Login from './Login';

import SignUp from './SignUp';
import {  navigationOptions } from '../config/navOptions';

const Auth = TabNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp }
}, {
  tabBarOptions: {
    style: {
      backgroundColor: 'red',
      height: 80,
      paddingVertical: 25
    },
    indicatorStyle: {
      backgroundColor: '#eaeaea'
    }
  },
  navigationOptions: {
    ...navigationOptions
  }
})
export default Auth;
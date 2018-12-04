import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation'



export default LoginNav = createStackNavigator({

}, { 
  headerMode: 'none',
  initialRouteName: 'Wellcome',
  navigationOptions: {
    gesturesEnabled: false
  }
})

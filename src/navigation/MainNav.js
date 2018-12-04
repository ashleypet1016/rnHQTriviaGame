import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

export default MainNav = createBottomTabNavigator({

}, { 
  headerMode: 'none',
  initialRouteName: 'CategoryList',
  navigationOptions: {
    gesturesEnabled: false
  },
  tabBarComponent: View,
  lazy: false
})

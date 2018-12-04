import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'

import { width, height } from 'constants/config'

import Main from 'layouts/Main'
import About from 'layouts/About'
import Settings from 'layouts/Settings'
import Wellcome from 'layouts/Wellcome'
import SignIn from 'layouts/SignIn'

const DrawerNavigatorConfig = {
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth: width(90),
  drawerPosition: 'right',
  drawerBackgroundColor: 'transparent',
  initialRouteName: 'MainTabNav',
  contentComponent: props => <CustomDrawerContentComponent {...props} />,
}

export default DrawerNav = createStackNavigator({
  Wellcome: {
    screen: Wellcome
  },
  Main: {
    screen: Main
  },
  Settings: {
    screen: Settings
  },
  About: {
    screen: About
  },
  SignIn: {
    screen: SignIn
  }
}, { 
  headerMode: 'none',
  initialRouteName: 'Wellcome',
  navigationOptions: {
    gesturesEnabled: false
  }
})
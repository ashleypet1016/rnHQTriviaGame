import React, { Component } from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import store, { persistor, addListener, App } from './ReduxStore'

@connect(state => ({
    state: state.routes,
  }),
  dispatch => ({
    dispatch: dispatch
  })
)
export default class AppWithNavigationState extends Component {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <App {...this.props}/> 
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  }
})


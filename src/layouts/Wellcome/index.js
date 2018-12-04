import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import { connect } from 'react-redux';

import { width, height, overlay, font, urlsAndReducersKeys } from 'constants/config'
import { checkNextProps } from 'utils'
import images from 'images'

import StdBtn from 'components/StdBtn'
import Loading from 'components/Loading'

import fetchServ from 'actions/fetchServ'
import { setUserData, unsetUserData } from 'actions/utils'

export default class Wellcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      isLoading: false
    }
  }

  async componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps) {

  }

  onPressGuest = () => {
    const { navigation } = this.props
    navigation.navigate('Main')
  }

  onPressGetStarted = () => {
    const { navigation } = this.props
    navigation.navigate('SignIn')
  }
  

  render() {
    const { navigation } = this.props
    const { isLoading } = this.state
    return (
      <View style={styles.wrapper}>  
        <View style={styles.content}>
          <View style={styles.topPanel}>
            <View style={styles.guestBtnWrapper}>
              <StdBtn
                onPress={this.onPressGuest}
                customTitleStyle={styles.guestBtnCustomTitleStyle}
                customInnerStyle={styles.guestBtnCustomInnerStyle}
                title={'Guest'} />
            </View>
          </View> 
          <View style={styles.centerPanel}>
            <View style={styles.logoWrapper}>
              <Image style={styles.logoImage} source={images.logoBig} />
            </View>
            <View style={styles.logoTextWrapper}>
              <Text style={styles.logoText}>
                Live trivia game snow
              </Text>
            </View>
          </View>
          <View style={styles.bottomPanelWrapper}>
            <View style={styles.getStartedBtnWrapper}>
              <StdBtn
                onPress={this.onPressGetStarted}
                customTitleStyle={styles.getStartedBtnCustomTitleStyle}
                borderRadius={width(20)}
                bgOverlayColor="#C44A6D"
                title={'Get started'} />
            </View>
            <View style={styles.bottomTextWrapper}>
              <Text style={styles.normText}>
                By signing up you agree to the <Text style={styles.boldTeext}>Terms of Use</Text>, <Text style={styles.boldTeext}>Privacy Policy</Text>, <Text style={styles.boldTeext}>Rules</Text>
              </Text>
            </View>
          </View>
        </View>
        <Loading show={isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#343D8F'
  }, 
  topPanel: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: width(4),
    marginTop: Platform.OS == 'ios'
      ? width(2)
      : width(6),
  },
  guestBtnWrapper: {
    height: width(9),
    width: width(20),
    marginTop: width(2),
    alignSelf: 'flex-end'
  },
  guestBtnCustomInnerStyle: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderRadius: width(12)
  },
  guestBtnCustomTitleStyle: {
    fontSize: font.small,
    textAlign: 'center',
    fontWeight: '700',
  },
  centerPanel: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoWrapper: {
    height:  width(30),
    width: width(60),
    marginTop: width(8)
  },
  logoImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  logoTextWrapper: {
    marginTop: width(8)
  },
  logoText: {
    fontSize: font.huge,
    color: 'white',
    fontWeight: '700'
  },
  getStartedBtnWrapper: {
    height: width(18),
    width: width(80)
  },
  getStartedBtnCustomTitleStyle: {
    fontSize: font.big,
    textAlign: 'center',
    fontWeight: '700',
  },
  bottomTextWrapper: {
    width: width(80),
    flexWrap: 'wrap',
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width(4)
  },
  bottomPanelWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width(8),
  },
  normText: {
    fontSize: font.regular,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.4)'
  },
  boldTeext: {
    fontWeight: '800'
  },
});

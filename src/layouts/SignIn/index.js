import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

import { width, height, font } from 'constants/config'
import images from 'images'

import NavBar from 'components/NavBar'
import StdBtn from 'components/StdBtn'

export default class SignIn extends Component {
  onPressNext = () => {
    const { navigation } = this.props
    navigation.navigate('Main')
  }

  render() {
    const { navigation } = this.props
    const navBarProps = {
      leftPart: {
        image: 'arrowBackWhite',
        onPress: () => navigation.goBack()
      },
      centerPart: {
        text: 'Sign in to play',
        customTextStyles: {
          fontSize: font.huge,
          color: 'white',
          fontWeight: '700'
        }
      },
      rightPart: {
        comp: (
          <View style={styles.nextBtnWrapper}>
            <StdBtn
              onPress={this.onPressNext}
              customTitleStyle={styles.nextCustomTitleStyle}
              borderRadius={width(20)}
              bgOverlayColor="#4D54A3"
              title={'Next'} />
          </View>
        )
      }
    }
    return (
      <View style={styles.wrapper}>
        <NavBar {...navBarProps} />
        <View style={styles.container}>
          <View style={styles.formWrapper}>
            <TouchableOpacity>
              <View style={styles.formInner}>
                <View style={styles.countryCodeWrapper}>
                  <View style={styles.countryCodeImageWrapper}>
                    <Image style={styles.countryCodeImage} source={images.flagRus}/>
                  </View>
                  <View style={styles.countryNameWrapper}>
                    <Text style={styles.countryNameText}>
                      Russian Federation
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.phoneInputWrapper}>
              <TextInput 
                underlineColorAndroid="transparent"
                placeholder="Your phone number"
                placeholderColor="#C7C7CB"
                style={styles.phoneInput} />
            </View>
            <View style={styles.hintTextWrapper}>
              <Text style={styles.hintText}>
                By tapping Next, an SMS may be sent. Message & data rates may applay.
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#343D8F'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextBtnWrapper: {
    height: width(9),
    width: width(20)
  },
  nextCustomTitleStyle: {
    color: 'white',
    fontSize: font.regular,
    fontWeight: '700'
  },
  formWrapper: {

  },
  formInner: {
    width: width(90),
    alignItems: 'center',
    justifyContent: 'center'
  },
  countryCodeWrapper: {
    height: width(16),
    width: '100%',
    borderRadius: width(10),
    borderWidth: 1,
    borderColor: '#555DB2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  countryCodeImageWrapper: {
    height: width(8),
    width: width(8)
  },
  countryCodeImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  countryNameWrapper: {
    marginLeft: width(2)
  },
  countryNameText: {
    color: '#878CB3',
    fontSize: font.regular,
    fontWeight: '700'
  },
  phoneInputWrapper: {
    marginTop: width(2),
    height: width(15),
    borderRadius: width(10),
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: width(10),
    marginTop: width(6)
  },
  phoneInput: {
    color: '#B7B7BF',
    fontSize: font.big,
    alignSelf: 'flex-start',
    width: '100%',
    textAlign: 'center'
  },
  hintTextWrapper: {
    marginTop: width(4),
    flexShrink: 1,
    flexWrap: 'wrap',
    width: width(90)
  },
  hintText: {
    fontSize: font.regular,
    color: '#7C82D8',
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: font.regular * 1.4
  }
});


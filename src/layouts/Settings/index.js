import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Switch from 'react-native-switch-pro'

import { width, height, font } from 'constants/config'
import images from 'images'

import StdBtn from 'components/StdBtn'
import NavBar from 'components/NavBar'
import Sep from 'components/Sep'

export default class Settings extends Component {
  onPressLogout = () => {
    const { navigation } = this.props
    navigation.navigate('Wellcome')
  }

  onPressAvatarChange = () => {

  }

  onPressUserNameChange = () => {

  }

  render() {
    const { navigation } = this.props
    const navBarProps = {
      leftPart: {
        image: 'arrowBackBlack',
        onPress: () => navigation.goBack()
      },
      centerPart: {
        text: 'Settings',
        customTextStyles: {
          fontSize: font.huge,
          color: 'black',
          fontWeight: '700'
        }
      },
      rightPart: {
        comp: (
          <View style={styles.logoutBtnWrapper}>
            <StdBtn
              onPress={this.onPressLogout}
              customTitleStyle={styles.logoutCustomTitleStyle}
              borderRadius={width(20)}
              bgOverlayColor="#BE4F6C"
              title={'Logout'} />
          </View>
        )
      }
    }
    return (
      <View style={styles.wrapper}>
        <NavBar {...navBarProps} />
        <ScrollView scrollEnabled={true} style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarImageWrapper}>
              <Image style={styles.avatarImage} source={images.exampleAvatar}/>
            </View>
            <View style={styles.changeAvatarBtnWrapper}>
              <TouchableOpacity onPress={this.onPressAvatarChange}>
                <View style={styles.changeAvatarBtnImageWrapper}>
                  <Image style={styles.changeAvatarBtnImage} source={images.editSmallPurple} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userNameWrapper}>
            <Text style={styles.userNameText}>
              Testing123
            </Text>
            <View style={styles.changeUserNameBtnWrapper}>
              <TouchableOpacity onPress={this.onPressUserNameChange}>
                <View style={styles.changeeUserNameBtnImageWrapper}>
                  <Image style={styles.changeeUserNameBtnImage} source={images.editSmallPurple} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.referalCodeWrapper}>
            <View style={styles.referalCodeTitleWrapper}>
              <Text style={styles.referalCodeTitle}>
                APPLY REFERAL CODE
              </Text>
            </View>
            <View style={styles.referalCodeInputWrapper}>
              <TextInput 
                underlineColorAndroid="transparent"
                placeholder="Referal code"
                placeholderColor="#B7B7BF"
                style={styles.referalInput} />
              <View style={styles.questionBtnWrapper}>
                <Text style={styles.questionBtnText}>
                  ?
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.otherSettingsWrapper}>
            <Sep />
            <View style={styles.otherSettingItemWrapper}>
              <View style={styles.leftPartSettingItem}>
                <View style={styles.otherSettinItemTitleWrapper}>
                  <Text style={styles.otherSettingItemTitleText}>
                    Discovarable nearby
                  </Text>
                </View>
                <View style={styles.otherSettingsItemDescWrapper}>
                  <Text style={styles.otherSettingsItemDescText}>
                    Enable this setting to be discovarable to people playing HQ near you. It's fun!
                  </Text>
                </View>
              </View>
              <View style={styles.rightPartSettingItem}>
                <Switch />
              </View>
            </View>
            <View style={styles.otherSettingItemWrapper}>
              <View style={styles.leftPartSettingItem}>
                <View style={styles.otherSettinItemTitleWrapper}>
                  <Text style={styles.otherSettingItemTitleText}>
                    Refresh contacts
                  </Text>
                </View>
                <View style={styles.otherSettingsItemDescWrapper}>
                  <Text style={styles.otherSettingsItemDescText}>
                    Enable this to automaticly keep your ontacts on HQ up to date.
                  </Text>
                </View>
              </View>
              <View style={styles.rightPartSettingItem}>
                <Switch />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {

  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: width(4)
  },
  logoutBtnWrapper: {
    height: width(9),
    width: width(24)
  },
  logoutCustomTitleStyle: {
    color: 'white',
    fontSize: font.regular,
    fontWeight: '700'
  },
  avatarWrapper: {
    marginTop: width(6)
  },
  avatarImageWrapper: {
    height: width(40),
    width: width(40),
    borderRadius: width(40),
    overflow: 'hidden',
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  changeAvatarBtnWrapper: {
    position: 'absolute',
    top: width(2),
    right: width(2),
  },
  changeAvatarBtnImageWrapper: {
    height: width(10),
    width: width(10),
    borderRadius: width(7),
    borderWidth: 1,
    borderColor: '#B3B2C2',
    padding: width(1),
    backgroundColor: 'white'
  },
  changeAvatarBtnImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    marginLeft: width(0.4)
  },
  userNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width(2)
  },
  userNameText: {
    fontSize: font.huge,
    color: '#585B67',
    fontWeight: '800'
  },
  changeUserNameBtnWrapper: {
    marginLeft: width(2),
  },
  changeeUserNameBtnImageWrapper: {
    height: width(9),
    width: width(9),
    borderRadius: width(7),
    borderWidth: 1,
    borderColor: '#B3B2C2',
    padding: width(1)
  },
  changeeUserNameBtnImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    marginLeft: width(0.4)
  },
  referalCodeWrapper: {
    marginTop: width(4),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width(5)
  },
  referalCodeTitleWrapper: {

  },
  referalCodeTitle: {
    fontSize: font.big,
    color: '#9B9AB4',
    fontWeight: '700'
  },
  referalCodeInputWrapper: {
    marginTop: width(2),
    width: '100%',
    height: width(15),
    borderRadius: width(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBEBF0',
    paddingHorizontal: width(10),
    flexDirection: 'row',
  },
  referalInput: {
    color: '#B7B7BF',
    flex: 1,
    fontSize: font.big
  },
  questionBtnWrapper: {
    height: width(8),
    width: width(8),
    borderRadius: width(8),
    backgroundColor: '#B3B2C4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionBtnText: {
    color: 'white',
    fontSize: font.big,
    fontWeight: '700'
  },
  otherSettingsWrapper: {
    marginTop: width(4),
    paddingHorizontal: width(5)
  },
  otherSettingItemWrapper: {
    marginVertical: width(3),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftPartSettingItem: {
    width: width(70),
    flexShrink: 1,
    flexWrap: 'wrap'
  },
  otherSettinItemTitleWrapper: {

  },
  otherSettingItemTitleText: {
    fontSize: font.big,
    color: 'black',
    fontWeight: '800'
  },
  otherSettingsItemDescWrapper: {
    marginTop: width(3)
  },
  otherSettingsItemDescText: {
    fontSize: font.regular,
    color: '#B0AFC1',
  }
});
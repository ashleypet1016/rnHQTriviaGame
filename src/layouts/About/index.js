import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';

import { width, height, font } from 'constants/config'
import images from 'images'

import NavBar from 'components/NavBar'

const menuItemsArray = [
  {
    key: 'howToPlay',
    text: 'How to play',
    image: 'howToPlay'
  },
  {
    key: 'submitTrivia',
    text: 'Submit trivia',
    image: 'submitTrivia'
  },
  {
    key: 'getHelp',
    text: 'Get help',
    image: 'getHelp'
  },
  {
    key: 'rateUs',
    text: 'Rate us',
    image: 'rateUs'
  },
]

export default class About extends Component {

  keyExtractor = (item, idx) => 'menuItem_' + item.key + '_' + idx

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.itemInner}>
          <View style={styles.iconWrapper}>
            <Image style={styles.iconImage} source={images[item.image]}/>
          </View>
          <View style={styles.menuTextWrapper}>
            <Text style={styles.menuText}>
              {item.text}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const { navigation } = this.props
    const navBarProps = {
      leftPart: {
        image: 'arrowBackBlack',
        onPress: () => navigation.goBack()
      },
      centerPart: {
        text: 'About',
        customTextStyles: {
          fontSize: font.huge,
          color: 'black',
          fontWeight: '700'
        }
      }
    }
    return (
      <View style={styles.wrapper}>
        <NavBar {...navBarProps} />
        <View style={styles.container}>
          <View style={styles.menuItemsWrapper}>
            {
              menuItemsArray.map((item, idx) => <View key={this.keyExtractor(item, idx)}>{this.renderItem({item, index: idx})}</View>)
            }
          </View>
          <View style={styles.bottomPartWrapper}>
            <View style={styles.socialIconsWrapper}>
              <View style={styles.socialIconWrapper}>
                <View style={styles.socialImageWrapper}>
                  <Image style={styles.socialImage} source={images.twitter} />
                </View>
              </View>
              <View style={styles.socialIconWrapper}>
                <View style={styles.socialImageWrapper}>
                  <Image style={styles.socialImage} source={images.instagram} />
                </View>
              </View>
              <View style={styles.socialIconWrapper}>
                <View style={styles.socialImageWrapper}>
                  <Image style={styles.socialImage} source={images.facebook} />
                </View>
              </View>
            </View>
            <View style={styles.otherItemsWrapper}>
              <View style={styles.otherItemWrapper}>
                <Text style={styles.otherItemText}>
                  Terms
                </Text>
              </View>
              <View style={styles.otherItemWrapper}>
                <Text style={styles.otherItemText}>
                  Privacy
                </Text>
              </View>
              <View style={styles.otherItemWrapper}>
                <Text style={styles.otherItemText}>
                  Rules
                </Text>
              </View>
            </View>
            <View style={styles.versionWrapper}>
              <Text style={styles.versionText}>
                1.3.13
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
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
  },
  menuItemsWrapper: {
    marginTop: width(25),
    marginLeft: width(12)
  },
  itemWrapper: {
    marginVertical: width(2),
    width: '100%',
  },
  itemInner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: width(12),
    height: width(12)
  },
  iconImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  menuTextWrapper: {
    marginLeft: width(4)
  },
  menuText: {
    fontSize: font.big,
    color: 'black',
    fontWeight: '800'
  },
  bottomPartWrapper: {
    marginTop: width(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialIconWrapper: {
    height: width(16),
    width: width(16),
    borderRadius: width(20),
    borderColor: '#E4E4E4',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width(2)
  },
  socialImageWrapper: {
    height: width(6),
    width: width(6)
  },
  socialImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  otherItemsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width(4)
  },
  otherItemWrapper: {
    marginHorizontal: width(2)
  },
  otherItemText: {
    fontSize: font.big,
    color: '#9695B0',
  },
  versionWrapper: {
    marginTop: width(3)
  },
  versionText: {
    fontSize: font.regular,
    color: '#9695B0',
    fontWeight: '800'
  }
});
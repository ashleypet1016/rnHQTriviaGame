import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { width, height, font } from 'constants/config'
import images from 'images'


export default class LeaderboardModal extends Component {
  render() {
    const { item, idx } = this.props
    const { avatar, userName, amount } = item
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.leftPart}>
            <View style={styles.indexWrapper}>
              <Text style={styles.indexText}>
                {idx + 1}
              </Text>
            </View>
            <View style={styles.avatarImageWrapper}>
              <Image style={styles.avatarImage} />
            </View>
            <View style={styles.userNameWrapper}>
              <Text style={styles.userNameText}>
                {userName}
              </Text>
            </View>
          </View>
          <View style={styles.rightPart}>
            <View style={styles.amountWrapper}>
              <Text style={styles.amountText}>
                ${amount}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: width(3)
  },
  container: {
    paddingHorizontal: width(6),
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection: 'row'
  },
  leftPart: {
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection: 'row'
  },
  rightPart: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  indexWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  indexText: {
    fontSize: font.regular,
    color: '#BDC1F1',
    fontWeight: '700'
  },
  avatarImageWrapper: {
    marginLeft: width(4),
    height: width(10),
    width: width(10),
    borderRadius: width(16),
    overflow:'hidden',
    backgroundColor: 'red'
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  userNameWrapper: {
    marginLeft: width(4)
  },
  userNameText: {
    fontSize: font.regular,
    fontWeight: '700',
    color: 'white'
  },
  amountWrapper: {
    marginTop: width(2),
    paddingHorizontal: width(1),
    paddingVertical: width(0.4),
    backgroundColor: '#4A52A6',
    borderRadius: width(10)
  },
  amountText: {
    fontSize: font.regular,
    color: 'white',
    fontWeight: '700'
  },
})
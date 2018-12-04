import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { width, height, font } from 'constants/config'
import images from 'images'

export default class NewsItem extends Component {
  render() {
    const { item, idx } = this.props
    const { categoryName, title, text, date, id, humanDate } = item
    const textShort = text && text.length > 70
      ? (text.substr(0, 60) + '...').replace(/\\n/g,' ')
      : text
    const titleShort = text && text.length > 16
      ? text.substr(0, 16) + '...'
      : text
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.topPartWrapper}>
            <View style={styles.categoryNameWrapper}>
              <Text style={styles.categoryNameText}>
                {categoryName}
              </Text>
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.titleText}>
                {titleShort}
              </Text>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>
                {textShort}
              </Text>
            </View>
          </View>
          <View style={styles.bottomPartWrapper}>
            <View style={styles.humanTextWrapper}>
              <View style={styles.clockImageWrapper}>
                <Image style={styles.clockImage} source={images.clockWhite} />
              </View>
              <Text style={styles.dateText}>
                {humanDate}
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
    paddingVertical: width(0.5),
    paddingHorizontal: width(1)
  },
  container: {
    height: width(60),
    paddingVertical: width(3),
    paddingHorizontal: width(3),
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: width(3),
    shadowOpacity: 0.14,
    shadowRadius: 2,
    shadowOffset: {
        height: 2,
        width: 1
    },
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  topPartWrapper: {

  },
  bottomPartWrapper: {

  },
  categoryNameWrapper: {

  },
  categoryNameText: {
    fontSize: font.regular * 1.3,
    fontWeight: '600'
  },
  titleWrapper: {
    marginTop: width(2)
  },
  titleText: {
    fontSize: font.huge,
    fontWeight: '700'
  },
  textWrapper: {
    marginTop: width(4)
  },
  text: {
    fontSize: font.regular * 1.3,
    lineHeight: font.regular * 1.9
  },
  humanTextWrapper: {
    marginTop: width(5),
    flexDirection: 'row',
    alignItems: 'center'
  },
  clockImageWrapper: {
    height: width(3.4),
    width: width(3.4)
  },
  clockImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  dateText: {
    marginLeft: width(2),
    fontSize: font.small,
    color: '#3f3f3f'
  }
});

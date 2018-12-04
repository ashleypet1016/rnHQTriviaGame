import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Modal } from 'react-native';

import { width, height, font } from 'constants/config'
import images from 'images';

import NavBar from 'components/NavBar'
import StdBtn from 'components/StdBtn'

export default class ExtraLifeModal extends Component {

  onPressShareCode = () => {

  }

  render() {
    const { onPressCloseModal, show } = this.props
    const navBarProps = {
      leftPart: {
        image: 'crossBlack',
        onPress: onPressCloseModal
      },
      centerPart: {
        text: 'Extra Lives',
        customTextStyles: {
          fontSize: font.huge,
          color: 'black',
          fontWeight: '700'
        }
      }
    }
    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={show}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={styles.wrapper}>
          <NavBar {...navBarProps} />
          <View style={styles.container}>
            <View style={styles.topPart}>
              <View style={styles.hearAreatWrapper}>
                <View style={styles.heartImageWrapper}>
                  <Image style={styles.heartImage} source={images.extraLive} />
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.text}>
                    Wrong answer? Continue playing with an Extra Life. Extra Lives are applied automaticly nd once per game. <Text style={styles.link}>Learn more</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomPart}>
              <View style={styles.btnDescWrapper}>
                <Text style={styles.btnDescText}>
                  GET EXTRA LIVES
                </Text>
              </View>
              <View style={styles.shareCodeBtnWrapper}>
                <StdBtn
                  onPress={this.onPressShareCode}
                  customTitleStyle={styles.shareCodeBtnBtnCustomTitleStyle}
                  borderRadius={width(20)}
                  bgOverlayColor="#C44A6D"
                  title={'Share code: testing22'} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topPart: {
    width: '100%'
  },
  hearAreatWrapper: {
    width: '100%',
    marginTop: width(4),
    height: width(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  heartImageWrapper: {
    height: width(24),
    width: width(24)
  },
  heartImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  textWrapper: {
    marginTop: width(20),
    width: width(70),
    flexShrink: 1,
    flexWrap: 'wrap'
  },
  text: {
    fontSize: font.regular * 1.1,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
    lineHeight: font.regular * 1.5
  },
  link: {
    color: '#6C73CB'
  },
  bottomPart: {
    marginBottom: width(6),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnDescWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  btnDescText: {
    fontSize: font.big,
    color: '#9B9AB4',
    fontWeight: '700'
  },
  shareCodeBtnWrapper: {
    marginTop: width(2),
    width: width(80),
    height: width(14)
  },
  shareCodeBtnBtnCustomTitleStyle: {
    fontSize: font.big,
    textAlign: 'center',
    fontWeight: '700',
  }
});


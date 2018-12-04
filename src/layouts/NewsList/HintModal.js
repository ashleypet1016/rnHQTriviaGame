import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { font, width, height } from 'constants/config'
import images from 'images'

import StdModal from 'components/StdModal'

export default class HintModal extends Component {
  
  onPressOkay = () => {
    const { onPressTriggerModal } = this.props
    onPressTriggerModal && onPressTriggerModal()
  }

  render() {
    const { onPressTriggerModal, show } = this.props
    const blurProps = {
      ref: 0,
      amount: 2,
    }
    return (
      <StdModal  
        animationType="fade"
        blur={blurProps}
        show={show}>
        <View style={styles.wrapper}>
          <View style={styles.containerWrapper}>
            <View style={styles.container}>
              <View style={styles.topTextWrapper}>
                <Text style={styles.topText}>
                  Добавляйте понравившиеся новости в свой список и читайте их подробно
                </Text>
              </View>
              <View style={styles.mainPartWrapper}>
                <View style={styles.hindRow}>
                  <View style={styles.hintImageWrapper}>
                    <Image
                      style={styles.hintImage}
                      source={images.plusBtnBlue} />
                  </View>
                  <Text style={styles.hintText}>
                    Интересно, добавить к себе в список.
                  </Text>
                </View>
                <View style={styles.hindRow}>
                  <View style={styles.hintImageWrapper}>
                    <Image
                      style={styles.hintImage}
                      source={images.crossBtnRed} />
                  </View>
                  <Text style={styles.hintText}>
                    Не интересно, скрыть новость.
                  </Text>
                </View>
              </View>
              <View style={styles.bottomPartWrapper}>
                <TouchableOpacity onPress={this.onPressOkay}>
                  <Text style={styles.okayBtnText}>
                    Понятно
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </StdModal>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  wrapper: {
  },
  containerWrapper: {
  },
  container: {
    paddingVertical: width(5),
    paddingHorizontal: width(5),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topTextWrapper: {
    
  },
  topText: {
    fontSize: font.big,
    width: width(80),
    flexShrink: 1,
    flexWrap: 'wrap'
  },
  mainPartWrapper: {
    marginVertical: width(10),
    width: '100%'
  },
  bottomPartWrapper: {

  },
  okayBtnText: {
    fontSize: font.big,
    color: '#5B61EF'
  },
  hindRow: {
    paddingVertical: width(3),
    paddingHorizontal: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },  
  hintImageWrapper: {
    height: width(6),
    width: width(6)
  },
  hintImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  hintText: {
    fontSize: font.regular,
    marginLeft: width(6),
    width: width(50),
    flexShrink: 1,
    flexWrap: 'wrap'
  }
});

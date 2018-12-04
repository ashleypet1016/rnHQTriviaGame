import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { width, height } from 'constants/config'
import images from 'images'

export default class StdInput extends Component {
  render() {
    const { placeholderUp, placeholder, value, onChangeText, icon, wrapperCustomStyle, heighlighted, onBlur,
      onFocus, autoCapitalize, secureTextEntry, error, readOnly, isButton, onPress, placeholderTextColor, customInputStyle } = this.props
    const InputComp = isButton
      ? TouchableOpacity
      : View
    return (
      <View style={[styles.container, wrapperCustomStyle, error && styles.containerError, heighlighted && styles.containerActive]}>
        {
          placeholderUp
            ? placeholder 
              ? <Text style={styles.upperText}>{placeholder}</Text>
              : null
            : null
        }  
        <InputComp onPress={isButton ? onPress : null } style={styles.iconAndInputWrapper}>
          {
            readOnly
              ? <Text style={styles.input}>{value}</Text>
              : <TextInput
                  {...this.props}
                  underlineColorAndroid="transparent"  
                  placeholder={!placeholderUp
                    ? placeholder
                    : ''
                  }
                  onChangeText={onChangeText}
                  value={value}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  placeholderTextColor="black"
                  autoCapitalize={autoCapitalize}
                  secureTextEntry={secureTextEntry}
                  placeholderTextColor={placeholderTextColor}
                  style={[styles.input, customInputStyle && customInputStyle]} />
          }
          {
            icon && images[icon]
              ? <View style={styles.iconImageWrapper}>
                  <Image source={images[icon]} style={styles.image} />
                </View>
              : null
          }
        </InputComp>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: width(2),
  },
  containerActive: {
    borderBottomColor: '#83C0E4',
  },
  containerError: {
    borderBottomColor: '#CE5759',
  },
  upperText: {
    color: '#D7D7D7',
    fontSize: width(3.6)
  },
  iconAndInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconImageWrapper: {
    height: width(4),
    width: width(4),
    marginHorizontal: width(2),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  input: {
    flex: 1,
    height: width(10),
    fontSize: width(4)
  }
})
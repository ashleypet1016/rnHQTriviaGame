import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import { width, height, font, tabBarMenuItems } from 'constants/config'
import images from 'resources/images'

export default class StdModal extends Component {
  keyExtractor = (item, index) => 'tabBarBtn_' + item.key

  onPressTabBarItem = (key) => {
    const { navigation } = this.props
    console.log(key)
    switch (key) {
      default:
        navigation.navigate(key)
    }
  }

  renderItem = ({ item, index }) => {
    const { navigation } = this.props
    const currentRoute = navigation.state.routes[navigation.state.index]
    const isCurrentRoute = currentRoute.key == item.key
    return (
      <TouchableOpacity style={{flex: 1}} onPress={() => this.onPressTabBarItem(item.key)}>
        <View style={[styles.menuItemWrapper, isCurrentRoute && styles.menuItemWrapperHighlighted]}>
          <View style={[styles.menuItemInner, isCurrentRoute && styles.menuItemInnerHighlighted]}>
            <View style={styles.menuItemIconWrapper}>
              <Image source={
                isCurrentRoute
                  ? images[item.icon + 'Active']
                  : images[item.icon]
              } style={styles.menuItemImage} />
            </View>  
            {
              item.text ?
                  <Text style={[styles.menuItemTitle, isCurrentRoute && styles.menuItemTitleHighlighted]}>
                    {item.text}
                  </Text>
                : null
            }
          </View>  
        </View>  
      </TouchableOpacity>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.wrapper}>
        {
          tabBarMenuItems && tabBarMenuItems.map((item, index) => this.renderItem({item, index}))
        }  
      </View>  
    )
  }
}

// <FlatList
//   horizontal={true}  
//   data={tabBarMenuItems}
//   extraData={this.props}
//   keyExtractor={this.keyExtractor}
//   renderItem={this.renderItem}/> 

const styles = StyleSheet.create({
  wrapper: {
    width: width(100),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItemWrapper: {
    paddingVertical: width(4),
  },
  menuItemWrapperHighlighted: {
    backgroundColor: 'white'
  },
  menuItemInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,
    paddingVertical: width(0),
  },
  menuItemInnerHighlighted: {
    borderRightWidth: 0
  },
  menuItemIconWrapper: {
    height: width(5),
    width: width(5)
  },
  menuItemImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  menuItemTitle: {
    fontSize: font.small,
    color: 'white',
    marginLeft: width(1),
    width: width(18),
    textAlign: 'center'
  },
  menuItemTitleHighlighted: {
    color: '#993932'
  }
})
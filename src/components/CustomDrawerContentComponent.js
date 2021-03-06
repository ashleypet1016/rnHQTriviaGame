import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import ImageLoad from 'react-native-image-placeholder'

import { width, heigh, drawerMenuItems, statusBarHeight, font } from 'constants/config'
import images from 'resources/images'

class MenuItem extends PureComponent {
  renderIconOrImage = (image, icon) => {
    if (image) {
      return (
        <Image source={image} style={{width: '100%', height: '100%', resizeMode: 'contain'}} />
      )
    }
    return null
  }

  render() {
    const { handleMenuItemAction, text, icon, image, action, active, isLast } = this.props
    return (
      <TouchableOpacity disabled={action == 'no'} onPress={() => handleMenuItemAction(action)}>
        <View style={[styles.menuItemWrapper, action == 'no' && {opacity: 0.4}]}>
          <View style={styles.menuItemInner}>
            <View style={[styles.menuItemIconWrapper]}>
              {this.renderIconOrImage(image, icon)}
            </View>
            <View style={styles.menuItemTextWrapper}>
              <Text style={styles.menuItemText}>{text}</Text>
            </View>  
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

@connect(
  state => ({
    drawer: state.drawer,
    user: state.user
  }),
  dispatch => ({
    triggerDrawer: () => {
      dispatch(ApiUtils.triggerDrawer())
    },
  })
)
export default class CustomDrawerContentComponent extends Component {
  componentWillReceiveProps(nextProps) {
    
  }
  
  handleMenuItemAction = (action) => {
    const { navigation } = this.props
    switch (action) {
      case 'logout':
        navigation.navigate('Login')
        break
      default:
        navigation.navigate(action)
    }
  }

  render() {
    const { navigation, userData } = this.props
    const avatar = userData && userData.userModel && userData.userModel.avatar
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>  
          <View style={styles.topPartWrapper}>
            <Text style={styles.titleText}>
              Info MVT
            </Text>
            <View style={styles.logoWrapper}>
              <Image source={images.drawerLogoImage} style={styles.logoImage}/>
            </View>  
          </View>  
          <View style={styles.listitemsWrapper}>  
            {
              drawerMenuItems && drawerMenuItems.map((menuItem, idx) => {
                const active = navigation.state.routes[navigation.state.index].routeName == menuItem.action
                return (
                  <MenuItem
                    key={menuItem.action + '_' + idx}
                    idx={idx}
                    isLast={idx == drawerMenuItems.length - 1}
                    active={active}
                    handleMenuItemAction={this.handleMenuItemAction}
                    {...menuItem} />
                )
              })
            }  
          </View>  
        </View>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatarImage} source={avatar && {uri: avatar} || images.userHeartIconGrey} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  content: {
    width: width(78.4),
    height: '100%',
    backgroundColor: 'white'
  },
  topPartWrapper: {
    backgroundColor: '#993A32',
    height: width(24),
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titleText: {
    marginRight: width(13),
    color: 'white',
    fontSize: font.huge,
    width: width(16),
    textAlign: 'center',
    fontWeight: '600'
  },
  logoWrapper: {
    height: width(17),
    width: width(17),
    marginRight: width(2)
  },
  logoImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  listitemsWrapper: {
    flex: 1
  },
  menuItemWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  menuItemInner: {
    height: width(11),
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItemIconWrapper: {
    marginHorizontal: width(3),
    height: width(10),
    width: width(10)
  },
  menuItemTextWrapper: {
    
  },
  menuItemText: {
    fontSize: font.big,
    color: 'black',
    fontWeight: '600',
    marginLeft: width(2)
  },
  avatarWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width(24),
    height: width(24),
    borderRadius: width(24),
    borderColor: '#A07B7C',
    borderWidth: 2,
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  }
})
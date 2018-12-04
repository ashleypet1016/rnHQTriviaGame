
import { Dimensions, Platform, StyleSheet, StatusBar } from 'react-native'
import moment from 'moment'

import images from 'resources/images'

const window = Dimensions.get('window');

export const overlay = StyleSheet.absoluteFillObject

export const isIphoneX = Platform.OS === 'ios' && (window.height === 812 || window.width === 812)

export const statusBarHeight = Platform.OS == 'ios' ? isIphoneX ? 44 : 20 : StatusBar.currentHeight

export const width = (pers) => pers / 100 * window.width
export const height = (pers) => (pers / 100 * window.height) - statusBarHeight

export const extendTouchableArea = { hitSlop: { top: width(4), bottom: width(4), left: width(4), right: width(4)}}

export const widthForOr = (initialOrientationKey, orientationkey) => initialOrientationKey == 'PORTRAIT'
    ? orientationkey == 'PORTRAIT' ? width : height
    : orientationkey == 'LANDSCAPE' ? height : width


export const heightForOr = (initialOrientationKey, orientationkey) => initialOrientationKey == 'PORTRAIT'
  ? orientationkey == 'PORTRAIT' ? height : width
  : orientationkey == 'LANDSCAPE' ? width : height

export const demWidth = Dimensions.get('window').width
export const demHeight = Dimensions.get('window').height

export const randomBool = () => Math.round(Math.random())

export const debounce = async (action, time, type='promise') => {
  const unblockAction = (timeToWait) => {
    setTimeout(() => {
      this.blockAction = false
    }, timeToWait + 20)
  }
  if (!this.blockAction) {
    this.blockAction = true
    if (type == 'callback') {
      action(() => unblockAction(time))
    } else if (type == 'promise') {
      await action()
      unblockAction(time)
    }
  }
}

export const font = {
	tiny: width(3),
	small: width(3.8),
	regular: width(4.2),
	medium: width(4.8),
	big: width(5.2),
	huge: width(6.2)
}

// export const baseUrl = 'http://207.154.198.245/' 
export const baseUrl = 'http://localhost:3000'

export const serverUrls = {

}

export const urlsAndReducersKeys = Object.keys(serverUrls).reduce((acc, cur) => {
  acc[cur] = { type: cur.toUpperCase(), ...serverUrls[cur] }
  return acc
}, {})

// list of white listed params for back end. The key of params is type of action that is used in redux
export const whiteListParams = {
  
}

// list of required params for UX
export const requiredList = {

}

// adapter params to convert key of params from client to params for back end (params from client are keys, and params for back ed are values). The key of params is type of action that is used in redux
export const adapterKeyParams = {
  // SINGUP: {
  //   firstName: 'fname',
  //   middleName: 'Mname',
  //   lastName: 'lname',
  //   birthday: 'dob',
  //   appartmentNumber: 'apt',
  //   streetNumber: 'stnum',
  //   streetName: 'stname',
  //   zipCode: 'zip',
	// 	promotionCode: 'PromoCode',
	// 	address: 'address2'
	// },
}

export const categoriesData = [

]

export const adapterValueParams = {
	// SINGUP: {
	// 	birthday: (dateString) => moment(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD')
	// },
}

export const daysInWeekFull = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


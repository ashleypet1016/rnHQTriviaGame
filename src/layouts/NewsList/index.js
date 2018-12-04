import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { connect } from 'react-redux';

import { font, width, height, debounce, urlsAndReducersKeys } from 'constants/config'
import { checkNextProps } from 'utils'
import images from 'images'

import HintModal from './HintModal'
import StackList from 'components/StackList'
import NewsItem from './NewsItem'
import Loading from 'components/Loading'

import fetchServ from 'actions/fetchServ'
import { setHint } from 'actions/utils'

const animationSpeed = 300

const fakeNews = [
  {
    categoryName: 'Investing',
    title: 'A Discount Toner Cartridge Is Better1',
    text: 'The buying of large-screen TVs has absolutely skyrocketed latel...',
    date: 1231231,
    humanDate: '14 minutes ago',
    id: 11123
  },
  {
    categoryName: 'Investing',
    title: 'A Discount Toner Cartridge Is Better2',
    text: 'The buying of large-screen TVs has absolutely skyrocketed latel...',
    date: 1231231,
    humanDate: '14 minutes ago',
    id: 2234,
  },
  {
    categoryName: 'Investing',
    title: 'A Discount Toner Cartridge Is Better3',
    text: 'The buying of large-screen TVs has absolutely skyrocketed latel...',
    date: 1231231,
    humanDate: '14 minutes ago',
    id: 3234
  },
  {
    categoryName: 'Investing',
    title: 'A Discount Toner Cartridge Is Better4',
    text: 'The buying of large-screen TVs has absolutely skyrocketed latel...',
    date: 1231231,
    humanDate: '14 minutes ago',
    id: 1234
  },
  {
    categoryName: 'Investing',
    title: 'A Discount Toner Cartridge Is Better5',
    text: 'The buying of large-screen TVs has absolutely skyrocketed latel...',
    date: 1231231,
    humanDate: '14 minutes ago',
    id: 2324,
  },
  {
    categoryName: 'Investing',
    title: 'A Discount Toner Cartridge Is Better6',
    text: 'The buying of large-screen TVs has absolutely skyrocketed latel...',
    date: 1231231,
    humanDate: '14 minutes ago',
    id: 3234
  },
  {
    categoryName: 'Investing',
    title: 'A Discount Toner Cartridge Is Better7',
    text: 'The buying of large-screen TVs has absolutely skyrocketed latel...',
    date: 1231231,
    humanDate: '14 minutes ago',
    id: 1324
  },
  {
    categoryName: 'Investing',
    title: 'A Discount Toner Cartridge Is Better8',
    text: 'The buying of large-screen TVs has absolutely skyrocketed latel...',
    date: 1231231,
    humanDate: '14 minutes ago',
    id: 2242,
  },
  {
    categoryName: 'Investing',
    title: 'A Discount Toner Cartridge Is Better9',
    text: 'The buying of large-screen TVs has absolutely skyrocketed latel...',
    date: 1231231,
    humanDate: '14 minutes ago',
    id: 32342
  },
]

@connect(
	state => ({
    hints: state.hints,
    userData: state.userData,
    getCategories: state.getCategories,
    evalNewsItems: state.evalNewsItems,
    getNewsItemsToEval: state.getNewsItemsToEval,
    insertUsersNewsItem: state.insertUsersNewsItem
	}),
  dispatch => ({
    actionSetHint: (hintName) => {
      dispatch(setHint(hintName))
    },
    actionEvalNewsItems: (data) => {
      dispatch(fetchServ(urlsAndReducersKeys.evalNewsItems, data))
    },
    actionGetNewsItemsToEval: (data) => {
      dispatch(fetchServ(urlsAndReducersKeys.getNewsItemsToEval, data))
    },
    actionInsertUsersNewsItem: (data) => {
      dispatch(fetchServ(urlsAndReducersKeys.insertUsersNewsItem, data))
    },
  })
)
export default class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hintModalShow: false,
      newsData: [],
      liked: [],
      disliked: [],
      isLoading: false
    }
  }

  setState(state, callback = () => {}){
    return new Promise((resolve, reject) => {
      super.setState(state, () => {
        if (typeof callback != "function") { reject(`${callback} is not a function`)}
        else {resolve(callback())}
      })
    })
  }

  async componentWillReceiveProps(nextProps) {
    const { navigation } = this.props
    const propsCheckerGetNewsItemsToEval = checkNextProps(nextProps, this.props, 'getNewsItemsToEval', 'anyway')
    if (propsCheckerGetNewsItemsToEval == 'error') {
      const error = nextProps.getNewsItemsToEval.response.status == 'failed' && nextProps.getNewsItemsToEval.response.desc
      this.setState({ isLoading: false });
      error && Alert.alert(error)
    } else if (propsCheckerGetNewsItemsToEval && propsCheckerGetNewsItemsToEval != 'empty') {
      const data = nextProps.getNewsItemsToEval.response.data
      const categories = nextProps.getCategories.response.data.items
      await this.setState({
        isLoading: false,
        newsData: data.items.map((newsItem, idx) => {
          const foundCategory = categories.find((category) => category.tag == newsItem.mainTag)
          newsItem.categoryName = foundCategory && foundCategory.title || newsItem.categoryName
          return newsItem
        })
      })
    } else if (propsCheckerGetNewsItemsToEval == 'empty') {
      this.setState({ isLoading: false });
    }

    const propsCheckerEvalNewsItems = checkNextProps(nextProps, this.props, 'evalNewsItems')
    if (propsCheckerEvalNewsItems == 'error') {
      const error = nextProps.evalNewsItems.response.status == 'failed' && nextProps.evalNewsItems.response.desc
      this.setState({ isLoading: false });
      error && Alert.alert(error)
    } else if (propsCheckerEvalNewsItems && propsCheckerEvalNewsItems != 'empty') {
      const data = nextProps.evalNewsItems.response.data
      await this.setState({ isLoading: false })
      navigation.navigate('Feed')
    } else if (propsCheckerEvalNewsItems == 'empty') {
      this.setState({ isLoading: false });
    }

    const propsCheckerInsertUsersNewsItem = checkNextProps(nextProps, this.props, 'insertUsersNewsItem')
    if (propsCheckerInsertUsersNewsItem == 'error') {
      const error = nextProps.insertUsersNewsItem.response.status == 'failed' && nextProps.insertUsersNewsItem.response.desc
      this.setState({ isLoading: false });
      error && Alert.alert(error)
    } else if (propsCheckerInsertUsersNewsItem && propsCheckerInsertUsersNewsItem != 'empty') {
      const data = nextProps.insertUsersNewsItem.response.data
      console.log('nextProps.insertUsersNewsItem.response.data')
      console.log(data)
    } else if (propsCheckerInsertUsersNewsItem == 'empty') {
      this.setState({ isLoading: false });
    }
  }

  addToLikedOrDisliked = (type, value) => {
    let newState = this.state[type]
    newState.push(value)
    this.setState({[type]: newState})
  }
  
  async componentDidMount() {
    const { hints, actionSetHint, userData, actionGetNewsItemsToEval } = this.props
    const { newsData } = this.props
    if (userData && userData.data && userData.data.token) {
      await this.setState({isLoading: true})
      actionGetNewsItemsToEval({
        token: userData.data.token
      })
    }
    if (!(hints && hints.alreadySaw && hints.alreadySaw.NewsList)) {
      setTimeout(() => {
        this.onTriggerHintModal()
        actionSetHint('NewsList')
      }, 300)
    }
  }

  onTriggerHintModal = () => {
    const { hintModalShow } = this.state
    this.setState({hintModalShow: !hintModalShow})
  }

  onPressOkay = () => {
    const { onPressTriggerModal } = this.props
    onPressTriggerModal && onPressTriggerModal()
  }

  renderItem = ({ item, index }) => {
    return <NewsItem item={item} idx={index} />
  }

  keyExtractor = (item, idx) => 'newsItem_' + item._id + '_' + idx 

  setDataKeyValueByNewsId = async (id, keyValue) => {
    let { newsData }  = this.state
    newsData[id] = {...newsData[id], ...keyValue}
    await this.setState({newsData: newsData})
  }

  onPressPlus = () => {
    const { actionInsertUsersNewsItem, userData } = this.props
    const { newsData } = this.state
    debounce(
      () => new Promise(async resolve => {
        this.addToLikedOrDisliked('liked', newsData[newsData.length - 1]._id)
        if (userData && userData.data && userData.data.token) {
          actionInsertUsersNewsItem({
            newsItemId: newsData[newsData.length - 1]._id,
            token: userData.data.token
          })
        }
        await this.setDataKeyValueByNewsId(newsData.length - 1, {moveSide: 'left'})
        await this.sliceLastNewsData()
        resolve()
      }),
      animationSpeed
    )
  }

  unblockAction = (time) => {
    setTimeout(() => {
      this.blockAction = false
    }, time+ 200)
  }

  onPressCross = () => {
    const { newsData } = this.state
    debounce(
      () => new Promise(async resolve => {
        this.addToLikedOrDisliked('disliked', newsData[newsData.length - 1]._id)
        await this.setDataKeyValueByNewsId(newsData.length - 1, { moveSide: 'right' })
        await this.sliceLastNewsData()
        resolve()
      }),
      animationSpeed
    )
  }

  sliceLastNewsData = async () => {
    const { userData, actionGetNewsItemsToEval } = this.props
    const { newsData } = this.state
    await this.setState({newsData: newsData.slice(0, -1)})
  }

  goNext = async () => {
    const { actionEvalNewsItems, userData } = this.props
    const { liked, disliked } = this.state
    if (userData && userData.data && userData.data.token) {
      actionEvalNewsItems({
        token: userData.data.token,
        liked,
        disliked
      })
    }
  }
  
  render() {
    const { hintModalShow, newsData, isLoading } = this.state
    const stackOptions = {
      itemOffset: width(7),
      changeOpacity: true,
      animation: {
        speed: animationSpeed
      }
    }
    return (
      <View style={styles.wrapper}>
        <HintModal
          show={hintModalShow}
          onPressTriggerModal={this.onTriggerHintModal} />
        <View style={styles.container}>
           <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>
              Список новостей
            </Text>
          </View>
          {
            newsData && newsData.length ?
              <View style={styles.content}>
                <View style={styles.stackListWrapper}>
                  <StackList
                    stackOptions={stackOptions}
                    style={styles.stackListStyle}
                    data={newsData}
                    extraData={this.state}
                    itemWrapperStyle={{ padding: 2 }}
                    itemContainerStyle={{padding: 2}}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem} />
                </View>
                <View style={styles.buttonsWrapper}>
                  <TouchableOpacity onPress={this.onPressPlus}>
                    <View style={styles.btnImageWrapper}>
                      <Image style={styles.btnImage} source={images.plusBtnBlue} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.onPressCross}>
                    <View style={[styles.btnImageWrapper, styles.crossBtnImageWrapper]}>
                      <Image style={styles.btnImage} source={images.crossBtnRed} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              : <View style={[styles.content, styles.verticalCenter]}>
                  <View style={styles.noDataTextWrapper}>
                    <Text style={styles.noDataText}>
                      Список новостей пуст
                      Обновление через 2 часа
                    </Text>
                  </View>
                </View>
          }
        </View>
        <Loading show={isLoading} />
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
    alignItems: 'center',
    flex: 1
  },
  titleWrapper: {
    marginTop: width(8)
  },
  titleText: {
    fontSize: font.huge,
    fontWeight: '700'
  },
  content: {
    alignItems: 'center'
  },
  stackListStyle: {
    width: width(86),
    height: height(55),
  },
  stackListWrapper: {
    marginTop: width(5),
  },
  buttonsWrapper: {
    marginTop: width(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(65)
  },
  btnImageWrapper: {
    height: width(8),
    width: width(8)
  },
  btnImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  crossBtnImageWrapper: {
    height: width(7),
    width: width(7)
  },
  verticalCenter: {
    justifyContent: 'center',
    flex: 1
  },
  noDataTextWrapper: {
    width: width(60),
    flexWrap: 'wrap',
    flexShrink: 1
  },
  noDataText: {
    fontSize: font.regular,
    color: 'black',
    textAlign: 'center',
    opacity: 0.6,
    marginTop: width(-14),
    lineHeight: font.regular * 1.5
  }
});

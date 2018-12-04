import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Modal } from 'react-native';

import { width, height, font } from 'constants/config'
import images from 'images'

import NavBar from 'components/NavBar'
import StdBtn from 'components/StdBtn'

import LeaderBoardItem from './LeaderBoardItem'

const leaderbordDataFake = [
  {
    key: 1,
    userName: 'Testing',
    amount: '12343'
  },
  {
    key: 2,
    userName: 'Testing1',
    amount: '1233'
  },
  {
    key: 3,
    userName: 'Testing2',
    amount: '13'
  },
  {
    key: 4,
    userName: 'Testing3',
    amount: '2343'
  },
  {
    key: 5,
    userName: 'Testing4',
    amount: '1234'
  },
]

export default class LeaderboardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'thisWeek',
      leaderbordData: leaderbordDataFake,
    }
  }
  
  onPressThisWeek = () => {
    const { activeTab } = this.state
    activeTab != 'thisWeek' && this.setState({activeTab: 'thisWeek'})
  }

  onPressAllTime = () => {
    const { activeTab } = this.state
    activeTab != 'allTime' && this.setState({activeTab: 'allTime'})
  }

  renderItem = ({item, index}) => {
    return <LeaderBoardItem
      item={item}
      idx={index} />
  }

  keyExtractor = (item, idx) => 'leaderBoardItem_' + item.key + '_' + idx

  render() {
    const { onPressCloseModal, show } = this.props
    const { activeTab, leaderbordData } = this.state
    const navBarProps = {
      leftPart: {
        image: 'crossWhite',
        onPress: onPressCloseModal
      },
      centerPart: {
        text: 'Leaderboard',
        customTextStyles: {
          fontSize: font.huge,
          color: 'white',
          fontWeight: '700'
        }
      },
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
            <View style={styles.topBtnsWrapper}>
              <View style={styles.topBtnWrapper}>
                <StdBtn
                  onPress={this.onPressThisWeek}
                  customTitleStyle={styles.topBtnCustomTitleStyle}
                  customInnerStyle={
                    activeTab == 'thisWeek'
                      ? styles.topBtnCustomInnerStyleActive
                      : styles.topBtnCustomInnerStyle
                  }
                  title={'This week'} />
              </View>
              <View style={styles.topBtnWrapper}>
                <StdBtn
                  onPress={this.onPressAllTime}
                  customTitleStyle={styles.topBtnCustomTitleStyle}
                  customInnerStyle={
                    activeTab == 'allTime'
                      ? styles.topBtnCustomInnerStyleActive
                      : styles.topBtnCustomInnerStyle
                  }
                  title={'All time'} />
              </View>
            </View>
            <View style={styles.bestRaitingsWrapper}>
              <View style={styles.bestItemWrapper}>
                <View style={styles.bestItemAvatarWrapper}>
                  <View style={styles.bestItemAvatarSmallImageWrapper}>
                    <Image style={styles.bestItemAvatarImage} />
                  </View>
                  <View style={[styles.numbCircleWrapper, {backgroundColor: '#8182E4'}]}>
                    <Text style={styles.numbCircleText}>
                      2
                    </Text>
                  </View>
                </View>
                <View style={styles.userNameWrapper}>
                  <Text style={styles.userNameText}>
                    Testing
                  </Text>
                </View>
                <View style={styles.amountWrapper}>
                  <Text style={styles.amountText}>
                    $123
                  </Text>
                </View>
              </View>
              <View style={styles.bestItemWrapper}>
                <View style={styles.bestItemAvatarWrapper}>
                  <View style={styles.bestItemAvatarBigImageWrapper}>
                    <Image style={styles.bestItemAvatarImage} />
                  </View>
                  <View style={[styles.numbCircleWrapper, {backgroundColor: '#F3D56C'}]}>
                    <Text style={styles.numbCircleText}>
                      1
                    </Text>
                  </View>
                </View>
                <View style={styles.userNameWrapper}>
                  <Text style={styles.userNameText}>
                    Testing
                  </Text>
                </View>
                <View style={styles.amountWrapper}>
                  <Text style={styles.amountText}>
                    $123
                  </Text>
                </View>
              </View>
              <View style={styles.bestItemWrapper}>
                <View style={styles.bestItemAvatarWrapper}>
                  <View style={styles.bestItemAvatarSmallImageWrapper}>
                    <Image style={styles.bestItemAvatarImage} />
                  </View>
                  <View style={[styles.numbCircleWrapper, {backgroundColor: '#BE4F6C'}]}>
                    <Text style={styles.numbCircleText}>
                      3
                    </Text>
                  </View>
                </View>
                <View style={styles.userNameWrapper}>
                  <Text style={styles.userNameText}>
                    Testing
                  </Text>
                </View>
                <View style={styles.amountWrapper}>
                  <Text style={styles.amountText}>
                    $123
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.leaderboardListWrapper}>
              <FlatList
                style={styles.leaderboardList}
                renderItem={this.renderItem}
                data={leaderbordData}
                keyExtractor={this.keyExtractor} />
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
    backgroundColor: '#343F8A'
  },
  container: {
    flex: 1
  },
  topBtnsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(4),
    marginVertical: width(4)
  },
  topBtnWrapper: {
    height: width(10),
    width: '45%'
  },
  topBtnCustomInnerStyleActive: {
    borderRadius: width(12),
    backgroundColor: '#BE4F6C'
  },
  topBtnCustomInnerStyle: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: width(12)
  },
  topBtnCustomTitleStyle: {
    fontSize: font.small,
    textAlign: 'center',
    fontWeight: '700',
  },
  bestRaitingsWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: width(6)
  },
  bestItemWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bestItemAvatarWrapper: {

  },
  bestItemAvatarSmallImageWrapper: {
    height: width(20),
    width: width(20),
    borderRadius: width(20),
    backgroundColor: 'orange',
    padding: width(1)
  },
  bestItemAvatarBigImageWrapper: {
    height: width(28),
    width: width(28),
    borderRadius: width(28),
    backgroundColor: 'red',
    padding: width(1)
  },
  bestItemAvatarImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: 'red'
  },
  numbCircleWrapper: {
    height: width(8),
    width: width(8),
    borderRadius: width(8),
    position: 'absolute',
    top: width(1),
    left: width(1),
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numbCircleText: {
    fontSize: font.regular,
    color: 'white',
    fontWeight: '700'
  },
  userNameWrapper: {
    marginTop: width(2)
  },
  userNameText: {
    fontSize: font.regular,
    color: 'white',
    fontWeight: '700'
  },
  amountWrapper: {
    marginTop: width(2),
    paddingHorizontal: width(2.4),
    paddingVertical: width(1),
    backgroundColor: '#4A52A6',
    borderRadius: width(10)
  },
  amountText: {
    fontSize: font.regular,
    color: 'white',
    fontWeight: '700'
  },
  leaderboardListWrapper: {
    marginTop: width(2),
    flex: 1
  },
  leaderboardList: {
    flex: 1
  }
});

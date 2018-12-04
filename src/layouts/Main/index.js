import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';

import { width, height, font, overlay } from 'constants/config'
import images from 'images'

import StdBtn from 'components/StdBtn'

import LeaderboardModal from './LeaderboardModal'
import ExtraLivesModal from './ExtraLivesModal'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLeaderboardModal: false,
      showExtraLivesModal: false
    }
  }
  onPressHelp = () => {
    const { navigation } = this.props
    navigation.navigate('About')
  }

  onPressGetMoreLives = () => {
    
  }

  onPressLeaderboard = () =>{
    this.triggerLeaderboardModal()
  }

  triggerLeaderboardModal = () => {
    const { showLeaderboardModal } = this.state
    this.setState({showLeaderboardModal: !showLeaderboardModal})
  }

  onPressExtraLives = () =>{
    this.triggerExtraLivesModal()
  }

  triggerExtraLivesModal = () => {
    const { showExtraLivesModal } = this.state
    this.setState({showExtraLivesModal: !showExtraLivesModal})
  }

  onPressInvite = () => {

  }

  onPressOther = () => {
    const { navigation } = this.props
    navigation.navigate('Settings')
  }

  render() {
    const { navigation } = this.props
    const { showLeaderboardModal, showExtraLivesModal } = this.state
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.topPanelWrapper}>
            <View style={styles.row}>
              <View style={styles.addUserBtnWrapper}>
                <Image style={styles.addUserImage} source={images.addUserWhite} />
              </View>
              <View style={styles.logoWrapper}>
                <Image style={styles.logoImage} source={images.logoSmall} />
              </View>
              <TouchableOpacity onPress={this.onPressHelp}>
                <View style={styles.helpBtnWrapper}>
                  <Text style={styles.helpBtnText}>
                    ?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.scheduleWrapper}>
              <View style={styles.noScheduleTextWrapper}>
                <Text style={styles.noScheduleText}>
                  Error loading schedule
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomPanelWrapper}>
            <View style={styles.whiteBoxWrapper}>
              <View style={styles.whiteBox}>
                <View style={styles.whiteBoxTopPart}>
                  <View style={styles.avatarWrapper}>
                    <Image style={styles.avatarImage} source={images.exampleAvatar} />
                  </View>
                  <View style={styles.userNameWrapper}>
                    <Text style={styles.userNameText}>
                      testing23
                    </Text>
                  </View>
                  <View style={styles.otherBtnWrapper}>
                    <TouchableOpacity onPress={this.onPressOther}>
                      <View style={styles.otherBtnTextWrapper}>
                        <Text style={styles.otherBtnText}>
                          ...
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.whiteBoxMiddlePart}>
                  <View style={[styles.whiteBoxMiddleOnePart, styles.rightBorder]}>
                    <View style={styles.topTitleWrapper}>
                      <Text style={styles.topTitleText}>
                        BALANCE
                      </Text>
                    </View>
                    <View style={styles.valueNumbWrapper}>
                      <Text style={styles.valueNumbText}>
                        $0
                      </Text>
                    </View>
                  </View>
                  <View style={styles.whiteBoxMiddleOnePart}>
                    <View style={styles.topTitleWrapper}>
                      <Text style={styles.topTitleText}>
                        WEEKLY RANK
                      </Text>
                    </View>
                    <View style={styles.valueNumbWrapper}>
                      <Text style={styles.valueNumbText}>
                        -
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.whiteBoxBottomPart}>
                  <View style={styles.row}>
                    <View style={styles.extraLiveWrapper}>
                      <Text style={styles.extraLifeText}>
                        EXTRA LIFES
                      </Text>
                    </View>
                    <View style={styles.lifesWrapper}>
                      <Image style={styles.lifeImage} source={images.heartMediumPurple} />
                      <View style={styles.lifeCounterWrapper}>
                        <Text style={styles.lifeCountText}>
                          8
                        </Text>
                      </View>
                    </View>
                    <View style={styles.getMoreWrapper}>
                      <StdBtn
                        onPress={this.onPressExtraLives}
                        customTitleStyle={styles.getMoreBtnCustomTitleStyle}
                        customInnerStyle={styles.getMoretBtnCustomInnerStyle}
                        customNotHeightlightedTitleStyle={{color: '#9C9CB4'}}
                        title={'Get more'} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.btnsWrapper}>
              <View style={styles.btnWrapper}>
                <StdBtn
                  onPress={this.onPressLeaderboard}
                  customTitleStyle={styles.btnCustomTitleStyle}
                  borderRadius={width(20)}
                  bgOverlayColor="#6B72CA"
                  title={'Leaderboard'} />
              </View>
              <View style={styles.btnWrapper}>
                <StdBtn
                  onPress={this.onPressInvite}
                  customTitleStyle={styles.btnCustomTitleStyle}
                  borderRadius={width(20)}
                  bgOverlayColor="#6B72CA"
                  title={'Invite'} />
              </View>
            </View>
          </View>
        </View>
        <LeaderboardModal 
          onPressCloseModal={this.triggerLeaderboardModal} 
          show={showLeaderboardModal}/>
        <ExtraLivesModal 
          onPressCloseModal={this.triggerExtraLivesModal} 
          show={showExtraLivesModal}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#343D8F',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topPanelWrapper: {
    marginTop: Platform.OS == 'ios'
      ? width(2)
      : width(4),
    width: '100%',
    paddingHorizontal: width(4),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addUserBtnWrapper: {
    height: width(12),
    width: width(12)
  },
  addUserImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  logoWrapper: {
    height: width(14),
    width: width(25),
    marginTop: width(2)
  },
  logoImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  helpBtnWrapper: {
    height: width(10),
    width: width(10),
    borderRadius: width(10),
    backgroundColor: '#6B72CA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  helpBtnText: {
    fontSize: font.big,
    color: 'white',
    fontWeight: '800'
  },
  bottomPanelWrapper: {
    width: '100%',
  },
  noScheduleTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  noScheduleText: {
    color: 'white',
    marginTop: width(10),
    fontSize: font.huge,
    textAlign: 'center',
    fontWeight: '700'
  },
  whiteBoxWrapper: {
    marginVertical: width(2),
    width: '100%',
    paddingHorizontal: width(4)
  },
  whiteBox: {
    width: '100%',
    borderRadius: width(4),
    backgroundColor: 'white'
  },
  whiteBoxTopPart: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: width(5)
  },
  otherBtnWrapper: {
    position: 'absolute',
    top: width(4),
    right: width(4),
  },
  otherBtnTextWrapper: {
    height: width(8),
    width: width(8),
    borderRadius: width(8),
    backgroundColor: '#CDCBD8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  otherBtnText: {
    fontSize: font.big,
    color: 'white',
    fontWeight: '800',
    marginTop: width(-3),
  },
  avatarWrapper: {
    height: width(18),
    width: width(18),
    borderRadius: width(14),
    overflow: 'hidden'
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  userNameWrapper: {
    marginTop: width(2)
  },
  userNameText: {
    fontSize: font.big,
    color: '#343D8F',
    fontWeight: '800'
  },
  whiteBoxMiddlePart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CCCBD8',

  },
  whiteBoxMiddleOnePart: {
    flex: 1,
    paddingVertical: width(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightBorder: {
    borderRightWidth: 1,
    borderColor: '#CCCBD8'
  },
  topTitleWrapper: {

  },
  topTitleText: {
    color: '#9796B1',
    fontSize: font.big,
    fontWeight: '800'
  },
  valueNumbWrapper: {
    marginVertical: width(2)
  },
  valueNumbText: {
    color: '#343D8F',
    fontSize: font.huge,
    fontWeight: '800'
  },
  whiteBoxBottomPart: {
    width: '100%',
    paddingHorizontal: width(4),
    paddingVertical: width(4)
  },
  extraLiveWrapper: {
    
  },
  extraLifeText: {
    color: '#9796B1',
    fontSize: font.big * 0.9,
    fontWeight: '800'
  },
  lifesWrapper: {
    height: width(14),
    width: width(14)
  },
  lifeImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  lifeCounterWrapper: {
    ...overlay,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lifeCountText: {
    fontSize: font.regular,
    color: 'white',
    fontWeight: '700'
  },
  getMoreWrapper: {
    height: width(12),
    width: width(30)
  },
  getMoreBtnCustomTitleStyle: {
    fontSize: font.regular,
    textAlign: 'center',
    fontWeight: '700',
    color: '#9C9CB4'
  },
  getMoretBtnCustomInnerStyle: {
    borderWidth: 1,
    borderColor: '#9C9CB4',
    borderRadius: width(12)
  },
  btnsWrapper: {
    height: width(22),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: width(4),
    paddingHorizontal: width(4)
  },
  btnWrapper: {
    width: '48%'
  },
  btnCustomTitleStyle: {
    fontSize: font.big,
    textAlign: 'center',
    fontWeight: '700',
  },
});


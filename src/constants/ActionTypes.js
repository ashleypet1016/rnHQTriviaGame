import { serverUrls } from 'constants/config'

const requestSubTypes = ['FETCHING', 'ERROR', 'SUCCESS']

const utilsActionTypesArray = ['SET_ERRORS', 'RESET_HINTS', 'SET_HINT', 'SET_SETTINGS', 'RESET_SETTINGS', 'SET_USERDATA', 'UNSET_USERDATA']

const utilsActionTypes = utilsActionTypesArray.reduce((sum, cur) => {
  sum[cur] = cur
  return sum
}, {})

const requestActionTypes = Object.keys(serverUrls).reduce((acc, cur) => {
  const type = cur.toUpperCase()
  requestSubTypes.forEach(requestSubType => {
    const actionType = 'FETCH_' + type + '_' + requestSubType
    acc[actionType] = actionType
  })
  return acc
}, {})

export default {...utilsActionTypes, ...requestActionTypes}

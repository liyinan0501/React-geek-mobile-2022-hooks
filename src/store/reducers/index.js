const { combineReducers } = require('redux')

function test(state = 0, action) {
  return state
}

export default combineReducers({ test })

// import { combineReducers } from 'redux'

const defalutState = {
  count: 1,
  message: '',
  name: '',
  list: null,
};

const changeCount = (count: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return action.count
    default:
      return count
  }
}

const changeMessage = (message: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_MESSAGE':
      return action.message
    default:
      return message
  }
}

const changeName = (name: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return name
  }
}

const changeTestList = (list: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_TEST_LIST':
      return action.list
    default:
      return list
  }
}

const reducer = (state = defalutState, action: any) => {
  return {
    count: changeCount(state.count, action),
    message: changeMessage(state.message, action),
    name: changeName(state.name, action),
    list: changeTestList(state.list, action),
  };
}

export default reducer;

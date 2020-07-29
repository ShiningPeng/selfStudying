import * as actionTypes from './actionTypes'


const defaultStore = {
    inputValue: 'Write Something',
    list:[]
}

// JSON.parse(JSON.stringify())  深拷贝
export default (state = defaultStore, action) => {
    // console.log(state, action)
    // reducer里只能接受state，不能改变state
    if (action.type === actionTypes.CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === actionTypes.ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === actionTypes.DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if (action.type === actionTypes.GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    return state
}
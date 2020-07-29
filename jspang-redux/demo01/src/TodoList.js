import React, { Component } from 'react'
import store from './store'
import {  changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios'



export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.handleClilck = this.handleClilck.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }


    componentDidMount() {
        axios.get('http://rap2.taobao.org:38080/app/mock/261420/getList').then((res) => {
            // console.log(res)
            const data = res.data.data.list
            const action = getListAction(data)
            store.dispatch(action)
        })
    }

    changeInputValue(e) {
        // console.log(e.target.value)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    handleClilck() {
        // console.log('clicked')
        if (this.state.inputValue) {
            const action = addItemAction()
            store.dispatch(action)
        }

    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                handleClilck={this.handleClilck}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        )
    }
}

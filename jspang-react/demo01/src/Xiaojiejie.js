import React, { Component, Fragment } from 'react';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: ['基础按摩', '精油推背']
        }
    }
    inputChange(e) {
        // console.log(e.target.value)
        this.setState({
            inputVal: this.input.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        }, () => {//setState是一个异步操作，也就是说渲染虚拟DOM需要时间，
            // 所以react16之后在这个函数后面增加了一个回调函数，
            // 如果console放在setState外面，那么结果始终少1
            console.log(this.ul.querySelectorAll('li').length)
        })
    }
    deleteItem(index) {
        // console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    render() {
        return (
            <Fragment>
                {/* Fragment组件用来包裹html结构，用来替代不需要的最外层的div */}
                <div>
                    <label htmlFor="jspang">增加服务：</label>
                    <input
                        id="jspang"
                        className="input"
                        value={this.state.inputVal}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => {
                            this.input = input
                        }}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button></div>
                <ul ref={(ul) => this.ul = ul}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Xiaojiejie
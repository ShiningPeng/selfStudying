import React, { Component, Fragment } from 'react';
import './style.css'
import Axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Box from './Box'

class Xiaojiejie extends Component {
    // 在某一时刻可以自动执行的函数成为生命周期函数
    // constructor是es6的写法，可以当成初始化阶段
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: []
        }
    }

    // componentWillMount() {
    //     // 
    //     console.log('componentWillMount---组件将要挂载到页面的时刻')
    // }
    componentDidMount() {
        // console.log('componentDidMount---组件挂载完成的时刻')
        Axios.post('http://rap2.taobao.org:38080/app/mock/261420/xiaojiejie').then((res) => {
            console.log('获取数据成功',JSON.stringify(res))
            this.setState({
                list:res.data.data
            })
        }).catch(error => {
            console.log('获取数据失败' + error)
        })
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
            // console.log(this.ul.querySelectorAll('li').length)
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
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate')
    //     return true
        // 需要返回一个布尔值，true或者false,一般情况必须要写true，
        // 否则不执行后面函数如componentWillUpdate和render
    // }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate')
    // }

    
    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }
    render() {//这个函数不可缺
        // console.log('render---组件挂载中')
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
                <Box />
            </Fragment>
        )
    }
}

export default Xiaojiejie
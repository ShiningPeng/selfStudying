import React, { Component } from 'react';
import PropTypes from 'prop-types'



class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick() {
        // console.log(this.props.index)
        // this.props.list = []
        this.props.deleteItem(this.props.index)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        if(nextProps.content!==this.props.content){
            return true
        }else{
            return false
        }
    }
    // componentWillReceiveProps() {
    //     // 组件第一次存在于DOM中，函数是不会被执行的
    //     // 如果这个函数已经存在DOM中，函数才会被执行
    //     console.log('child-componentWillReceiveProps')
    // }

    // componentWillUnmount() {
    //     // 当组件将要被删除时执行
    //     console.log('componentWillUnmount')
    // }

    render() { 
        console.log('child-render')
        return ( 
        <li onClick={this.handleClick}>
            {this.props.avname}为你做-{this.props.content}
        </li> 
        );
    }
}
// 父组件向子组件传值时校验传递的值是否正确
XiaojiejieItem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
// 设置默认值
XiaojiejieItem.defaultProps={
    avname:'松岛枫'
}
 
export default XiaojiejieItem;
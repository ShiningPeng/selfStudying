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
    render() { 
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
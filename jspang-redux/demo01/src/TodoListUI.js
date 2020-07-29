import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'

// 无状态组件，其实就是一个函数，方法，可以使用箭头函数或者匿名函数，性能更高，相对class而言
// 无业务逻辑，只有UI
const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button type='primary' onClick={props.handleClilck}>增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => {
                        props.deleteItem(index)
                    }} >{item}</List.Item>)}
                />
            </div>
        </div>
    );
}



export default TodoListUI;
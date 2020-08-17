## 快速搭建react项目框架
- 一、安装react脚手架
npm install -g create-react-app
- 二、创建一个react项目
create-react-app 项目名称
但是react-script版本太高可能会导致一些问题比如项目跑不起来，会报错，所以建议将package.json中的react-script版本改低点为2.1.8（一个前辈建议的）,然后npm install一下
所以也建议单独建一个react模板项目，要用的时候拿过来修改一下名字即可，节约时间
- 三、启动项目
npm run start  或 yarn start
项目会在localhost:3000 启动

# react4.0之后 组件化思维 路由也是一个组件

**react最常用组件框架ant.design**
## 如何在react项目中引入ant.design组件?
- 步骤：
1. 将ant.design的包下载到本地
npm i antd -S
2. 在需要用到ant.design组件的地方进行引入如
import { Button } from 'antd';
import { Spin, Alert, Button, notification, Upload, Icon, Modal } from 'antd';
import  Table  from './Table';
3. 在需要用该组件的render函数的return中写入该标签才算是对该组件进行了调用
```html
<div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
  </div>
<Table />
```
或者联合路由组件使用
<Route path="/table" component={Table} />

4. 标签中有变量或者函数的话，需要在render外定义，变量写在state中，函数判断是不是全局的，是的话写在class外，不是的话就写在class内，变量的改变是通过this.setState，就像小程序的setData一样，另外在state中定义的变量如果在render中需要使用的话需要将其解构出来
  const { spinning, fileList, previewVisible, previewImage } = this.state;
5. 如果是将某些功能单独拎出来作为组件写的话需要在最后向外输出这个类
export default Label;
并且类名与组件标签名不能一致，不然会报错。在引入自己写的组件时不能加{} 如
import  {Table}  from './Table';
这样是会报错的，应该把{}去掉

## 总结：
1. 当一个组件里面有父子组件的话，只需要在最后输出父类，子类会在父类中被调用。
2. 一个组件有父子组件的话，绑定的事件在event对象的target.value获取到改变的值，自定义的属性可以在event.target.dataset.value里获取到。
3. react强调不可变数据（函数式编程思想）  所以使用浅拷贝赋值，利用slice函数

## input标签设置ref属性
<input ref={this.searchRef} />
searchRef = React.createRef();
value = this.searchRef.current.value;
这里的value就是获取到的input框输入的内容

## react项目的入口文件是/src/index.js
ReactDom.render(<App />,document.getElementById('root'));

## react生命周期函数
主要要记的
1. 挂载的时候
componentWillMount、componentDidMount、render
在componentDidMount之后才能获取到真实的dom结构，在componentWillMount的时候产生的是虚拟的dom结构
2. 更新的时候
  - state改变导致的更新:
    shouldComponentUpdate(默认值为true) -> componentWillUpdate -> render -> componentDidUpdate 
  - props改变导致的更新:
    componentWillReceiveProps -> shouldComponentUpdate(默认值为true) -> componentWillUpdate -> render -> componentDidUpdate

## useState  API
  const [ parentCount, setParentCount] = useState(0);
  结构出来的第一个参数是默认值，第二个是改变值的方法
  <button onClick={() => setParentCount(parentCount + 1)}>setParentCount</button>

## redux和react-redux
- redux     单向数据流的思想，action,reducer,state都是属于redux的，是一个js库，原生js
- react-redux 把redux的很多东西封装成了组件



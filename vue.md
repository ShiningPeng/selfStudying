## vue快速搭建框架
- vue init webpack name
- cd /name
- npm run dev


## 移动端的自适应 px2rem
- npm install px2rem-loader --save-dev
- assets/css/function.stylus
 px2rem($px)
        return ($px / 2) * 1rem
在需要写样式为px时，可以在所在的文件引入此文件，将px转化为rem

## vue封装好的@ 代表的是src
## 定义好的组件怎么调用：
1. 在App.vue中script中import引入该组件
import header from '@/component/header'
2. 在export default 中的component中声明：
'v-header':header
3. 在template中调用
<template><v-header></v-header></template>

## 如何在调用的组件里面写入东西，需要用到slot插槽
1. 在组件的template中需要定义好slot，它是作为标签的一个属性，如<div slot="left-icon"></div>
2. 将该组件在App.vue中调用
3. 在APP.vue的template中的组件标签中写入如
<v-header><div slot="left-icon"></div></v-header>

## 页面之间的跳转
router-link的to属性，属性中放配置的url
<router-link to=""></router-link>

**组件的export default**
组件的export default中需要有的name:'组件名'，这里的组件名就是所调用的页面的component的value，如header.vue里面name:'hd'
所调用的页面中component{'v-header':hd} 

## <keep-alive></keep-alive>
用法: <keep-alive><router-view></router-view></keep-alive>
vue中保存上一个路由组件的状态的一个方法，如，在一个tab页下滑动到一半，然后切换到别的tab页，后面我又切回原来的tab页，如果没有这个标签的话就会回到最上面需要重新往下滑，有的话会保存之前的状态，直接回到离开时的位置，缓存之前的状态，不需要重新渲染，节省资源。

## 页面中不会受路由影响的东西放到APP.vue中写

## img标签中可以直接定义宽高，不需要在css中写

## 将页面扯满全屏
position fixed
top 0
left 0
bottom 0
right 0

## filter blur(20px)  将图片置为黑白还是彩色的

## <router-link>
标签就相当于html中的<a>标签，router-link标签中的to属性就相当于a标签中的href，会跳转到路由中定义好的页面

## 两个毫不相干的组件之间传值（通信方式）：
1. 定义一个bus全局变量，一个页面设置修改变量，另一个页面获取这个变量（此方法较为传统，适用于没有使用vuex仓库的项目）
2. 使用vuex仓库
数据存在本地存储时刷新页面数据还在，而vuex存储的数据在页面刷新之后就不在了

**内部指令**
## v-html和v-text的区别：
当给他们赋值的字符串中含有标签名时，v-html会进行编译，而v-text还是把它当场字符串展示在页面上如
<p v-html='<span>hello world!</span>'></p>      //hello world!
<p v-text='<span>hello world!</span>'></p>      //<span>hello world!</span>
当字符串中不含有标签时两者效果是一样的

## {{}}
在这其中可以进行js运算

#绑定变量和方法
## v-bind
v-bind可缩写为':',用来绑定标签的属性<a v-bind:href="link"></a>,link是data中的一个变量,不使用v-bind时<a href="link"></a> link只是一个字符串"link"而不是data中的一个变量,
v-bind 绑定的 class 与本身的class不冲突,绑定class的时候可以用变量名，数组，对象
:class="active"   :class="[classA,classB]"  :class="{'red-font':true}"   
绑定方法和变量时只需写变量名或方法名  v-html="message",不需要使用{}

## v-for
渲染数组 v-for="(item, index) in items"
渲染对象v-for="(value, key) in object"

数组的filter、concat、slice方法不会触发双向绑定数据的更新
更改数组的某一项是也不会触发数据的更新，重新渲染，可以通过Vue的全局方法，Vue.set(数组名,索引,值)方法能够达到重新渲染的效果

## v-if和v-show
v-if 当条件为假时元素会从文档流里被删除
v-show 当条件为假时还会存在dom结构，只是通过display:none 来控制不显示

## v-on修改器
参数keydown和修改器.enter配合使用
@keydown.enter="onKeydown"

## 绑定自定义事件
子组件绑定方法后，在该方法中this.$emit('abc','可以传的参数')   //abc为事件名
父组件通过@abc="方法名"  来监听，子组件触发的时候，父组件绑定的方法也会执行

## input
input输入时通过v-model进行绑定input框输入的值，双向数据绑定

```html
<select v-model="selection">
  <option>1</option>
  <option>2</option>
</select>
{{selection}}
<input v-model="myBox" type="radio" value="apple">
<input v-model="myBox" type="radio" value="banana"> 
<input v-model="myBox" type="radio" value="pinapple">
```
```js
data(){
  return {
    model:[],
    selection:null
  }
} 
```

在标签中的属性需要绑定的时候必须要加上v-bind:或者:   ,否则该属性只是一个字符串而不是变量名

## v-model的三种修改器
<input v-model="myvalue">{{myvalue}}
v-model.lazy 延迟加载 就是等输入完了之后才去修改v-model所绑定的值
而没有.lazy修改器的时候，输入什么就会显示什么，实时的进行更改
.numbere 强制输入的值的类型为number 没有这个修改器的时候输入的都是string
.trim  清除输入的内容两端的空格

## 通过计算属性和方法来改变data里的值得区别
计算属性的更新只会对data里要操作的值进行更新
通过方法的话，任何时候去调用可以获得data里的值，当计算属性里的返回值与data中的值无关时，计算属性中的值就一直会是初始值，而方法中的话就会重新计算所涉及的属性

## 监听属性

watch:{
  myval: function (val, oldVal) {}}

## 父子组件之间的通信
子组件 -> 父组件：触发一个事件，emit触发事件，向父组件传递信息this.$emit('my-event',参数) ，在父组件的子组件标签中通过v-on监听事件
父组件 -> 子组件：props
因为对大小写不敏感，所以参数名需要通过-连接，并且都是小写字母，通过这样的方式传到子组件的变量在子组件中会自动地改为以驼峰命名，例如父组件传给子组件number-to-do,在子组件的props接收到之后，在页面中渲染时{{numberToDo}}可以访问到这个变量
props接收两种类型，一种是数组，一种是对象，可以规定传值得类型等
传的值在父组件的子组件标签中通过v-bind绑定
 <v-header :myval="myVal" @my-event="方法名"></v-header>
 其中myval和方法名都是父组件中自定义的，而myVal和my-event都是从子组件传过来的，不能更改，否则就接收不到。子组件中传过来的参数可以在绑定的方法的形参中获取到

## 插槽<slot></slot>也是父组件向子组件传递数据的一个方式
父组件的子组件标签内部插入别的标签的话，在子组件中可以通过<slot></slot>标签获取到父组件中插入的内容，还可以为插槽设定默认值，在子组件的<slot>标签的属性中，可以通过name属性来和父组件中写入的标签进行对应（具名的slot），在父组件中需要在子组件标签内部的其他标签的属性中设置slot属性，来和子组件的<slot>标签中的name属性对应

## 动态组件
is绑定组件 :is="组件标签名"，类似路由，动态组件也支持<keep-alive>的内置标签

## 过渡效果
<transition></transition>标签包裹需要使用过渡效果的标签,还可以用在组件上，将router-view包裹，组件也有切换效果，能够使动作变得更加柔和，不会那么生硬，transition 需要进行命名name，另外还要结合一些属性才能起效果
CSS实现过渡：vue在过渡的不同阶段会给不同的类名来控制样式：完全不显示的时候类名为v-enter
,进入显示过程中得到v-enter-active,完全存在的时候离开会有一个类名v-leave,开始不展现的时候，也就是在不显示的过程中会赋予v-leave-active类名
v-if，v-show，动态组件绑定:is,transition中的mode属性可以控制组件进出效果的先后顺序in-out,out-in。
在相同标签名时，vue中的transition不会进行，需要用key将相同标签区分开时，才会执行过渡

# es6中对一个变量的导出需要用{}包起来，引用时也要用{}引入进来

## vue-router
router-view、router-link
命名视图：
<router-view name="header"></router-view>可以在这里给标签添加name属性，来添加对应的组件
命名路由就是某个路由设置了name属性，
要使用vue-router的步骤：
1. 先安装 npm install vue-router --save-dev
2. 在main.js中全局使用
```js
import VRouter from 'vue-router';
Vue.use(VRouter);
//在本地实例化一个router来配置路由，也就是做一个映射表，什么地址使用什么组件
let router = new VRouter({
  mode:'history' //可以将浏览器设置为history模式
  routes:[{
    path:'/hello',
    component:Hello,
    name:'Hello'
  },
  {},{}
  ]
})
```
3. 之后将router在vue实例中声明
```js
new Vue({
  el:'#app',
  router,
  template:'<App>',
  components:{
    App
  }
})
```

<router-link :to="{path:'apple'}"></router-link>
通过to来设置跳转路由，相当于h5的a标签中的href属性，
也可以通过具名的路由进行跳转，也就是设置了name属性的路由，可以通过name来访问路由
:to="{name:'Apple'}"
router-link里还可以指定跳转之后渲染的标签，通过tag属性，<router-link :to="{name:'Apple'}" tag="li"></router-link>

## 路由的参数
传参方式
1. 可以在配置映射时在routes的path中添加参数
path:'/apple/:color'
**在页面中可以通过this.$route.params获取到传递的参数**
2. 在绑定的router-link的to属性中传入的对象可以带参数
<router-link :to="{name:'/hello', params:{id:123}}">
3. 通过绑定点击事件，在点击事件中设置路由
<div @click="go"></div>
go(){
  this.$router.push('/look/look-two')
  //this.$router.push({ path: '/look/look-two'})
  //this.$router.push({name:'LookTwo',param:{ id: 12345}})
}
可以通过这样传参也可以这样来实现页面之间的跳转，就相当于router-link的功能


## 钩子函数
beforeRouteEnter(),beforeRouteLeave() 类似于生命周期函数，
beforeRouteEnter()在路由跳转的时候产生
就拿跳远来比喻，beforeRouteEnter是你将要起跳的时候，脚还没有离开地面，
beforeRouteLeave是你将要落地的时候，脚还没有到达地面
都接收三个参数(to, from, next)

## 子路由
在一级路由下的二级路由，二级路由渲染到一级路由页面上，不会到根组件
写法:
```js
routes:[{
    path:'/hello',
    component:Hello,
    name:'Hello',
    children:[{
        path:'/apple',
        component:Apple,
        name:'Apple'
      }]
    },{},{}]
```

## 重定向
routes的path为根目录'/',还有一个redirect属性为'重定向的地址'

## cross-env
作用：运行跨平台设置（Windows和iOS）和使用环境变量的脚本
安装：npm install --save-dev cross-env
切换项目打开的端口：
在package.json文件的script中修改脚本
如"script":{
      "start":"cross-env PORT=4000 node app.js"
  }


## 组件式开发
能够抽离出来当组件写的就尽量抽出来，如果比较固定的话可以考虑留在页面中，比如只有某一个页面有某个模块，那就写在那个页面中，不用抽出来。而很多页面都有的功能模块可以拿出来作为组件，比如很多板块都有评论功能，可以拿出来写成组件

## 消除router-link的下划线
使用router-link包裹内容的时候，这部分里面的文字会出现下划线，消除下划线只需要加入这几行样式即可,样式放在由router-link包裹的内容同级css
```css
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
```

## 为什么子组件不能修改父组件传过来的数据
vue的设计是单向数据流，数据的流动只能自上而下，从父组件传给子组件，易于监测数据的流动，出现错误能够更加快速定位到错误的位置，避免数据混乱

**props接收的参数是从父组件的标签中的属性中传过来的**

## iconfont改变图标大小
在该图标的类名中使用font-size即可调整

## vue-lazyload 图片懒加载依赖
安装：npm install vue-lazyload --save-dev
在main.js中引入
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  loading:require('./common/images/loading.png')
});//懒加载的占位图
需要做懒加载的地方
<img v-lazy="item.poster" alt="" width="100%" height="100%">
其中的v-lazy属性
 
## 全局自定义组件注册
1. 在一个js文件中封装
```js
const requireComponent = require.context(
  //其组件目录的相对路径,
  //是否查询其子目录(Boolean),
  //匹配基础组件文件名的正则表达式
  )
//抛出
export default {
  install: (Vue, option) => {
    requireComponent.keys().forEach(fileName => {
      // 获取组件配置
      const componentConfig = requireComponent(fileName)
      // 获取组件的 PascalCase 命名
      const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
      // 全局注册组件
      Vue.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
      )
    })
  }
}
```
2. 在main.js中引入并使用
```js
import globalComponents from './common/js/components'
Vue.use(globalComponents);
```
3. 之后在这个文件夹中被全局注册的组件就可以在其他组件直接使用，组件名就是标签名

## vuex
1. npm install vuex
2. main.js中引入
import store from './store'
new Vue({store})
vue官方有的东西不需要vue.use(store)
3. 内容：mutations里面是定义方法的，然后在actions中得到调用，或者在组件中引入mapMutations,将其中的方法解构出来，相当于页面中的methods中的方法，通过this调用。
state中是存储变量的，全局的，可以通过方法来改变其值，或者在页面的中引入mapState，可以在computed属性中解构出来作为数据，相当于computed里面的属性，可以放在页面中渲染。
actions 用来调用mutation里面方法，也可以在页面中引入mapActions，可以达到相同的效果。

## 父组件调用子组件的方法
给父组件的子组件标签中设置ref,
this.$refs.子组件的ref.子组件方法()

## 另一种使用iconfont库的方法
1. 找到图标添加到项目
2. 使用 Font class 并查看在线链接，生成链接
3. 复制链接在项目的index.html中使用link标签引入，其中的href放入生成的链接即可。
4. 在需要使用图标的地方放上该类名即可
优点：任何时候想要添加图标时，只要重新生成链接替换之前链接即可。较多用在项目开发阶段。和下载到本地方式相比简单许多。
但是在项目上线之前会使用下载到本地的方式来使用。

## vuex 的 store -> index.js
一般index.js的格式
```js
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{},
  actions:{},
  mutations:{},
  getters:{}
})
export default store;
```
state全局状态管理
mutations中定义方法来改变state中存储的变量
actions 触发/提交 mutations 中定义的方法 ，或者也可以直接通过store.commit('funcName') 来触发
getters 感觉用处不大，也不是这样说，这个属性相当于state的计算属性。

## 过渡动画
过渡动画一般是发生在路由跳转的时候，所以一般定义在全局，也就是App.vue中
```html
<transition name="fade">
  <router-view></router-view>
</transition>

<style>
.fade-enter 
  opacity 0
.fade-leave
  opacity 1
.fade-enter-active
  transition opacity .5s
.fade-leave-active
  opacity 0
  transition opacity .5s
</style>
```
另外 transition标签只能包裹一个组件，若需要多个组件都具有过渡效果，则需要使用 transition-group 来把所有的 transition 包起来，类似于一下的格式
<transition-group>
  <transition name="fade">
    <router-link></router-link>
  </transition>
  <transition name="other">
    <router-link></router-link>
  </transition>
</transition-group>

## 关于组件开发
在抽离组件时尽量方法的调用，把需要执行的操作交给父组件，子组件只需要向外抛出就行，不要把组件写的有局限性，父组件接收，写具体的操作。需要传入什么参数，就定义什么，在使用的地方传入即可。

## computed 和 watch 的区别和运用场景
- computed:计算属性，依赖其他属性值，并且computed 的值是有缓存的，只有它依赖的属性值发生改变下一次获取computed 的值时才会重新计算 computed 的值。
- watch：更多的是**观察**的作用，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。
- 运用场景：
  - 当我们需要进行数值计算，并且依赖于其他数据时，应该使用computed，因为可以利用computed的缓存特性，避免每次获取值时，都要重新计算；
  - 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用watch，使用watch选项允许我们执行异步操作（访问一个api），限制我们执行该操作的频率，并在我们得到最终结果之前，设置中间状态。这些都是计算属性无法做到的。

## vue 监测数组的变化
在vue2.0中无法监测数组的变化，在vue3.0里有proxy可以对数组进行监测，或者是在2.0的基础上在vue的原型链上添加对数组的监视，装饰者模式。

## 读《vue2实战揭秘》
- 视图设计成功的关键
 - 只呈现最少量的数据字段和数据行。突出重点，快速定位。
- 删除数据该有的步骤
  1. 点击删除按钮
  2. 出现删除提示（是否删除）
  3. 确认删除后执行删除操作
- UIkit
- 所谓的封装方法，很多时候就是在vue的原型链上进行封装
- 实时显示搜索结果，使用computed属性
- 多行数据的选择：利用双向绑定和计算属性
- lodash
- Vue.compile()编译 将HTML模板的字符串编译为一个Render对象
- 富文本编辑器
- HTTP拦截器和响应器

## vue-cli webpack 配置代理，解决跨域问题，在config/index.js文件中有个 proxyTable属性，这里可以将代理的源地址与目标地址关联起来，之后就能正常工作，也就是解决了跨域问题
```js
dev:{
  //···
  proxyTable:{
    'api':{
      target:'http://api.demo.com',   //本机开发服务的地址
      changeOrigin:true     //后端服务器的地址
    }
  }
}
```
## router/index.js中设置激活tab类名
- routes同级属性---linkActiveClass

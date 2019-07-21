##vue快速搭建框架
vue init webpack name
cd /name
npm run dev


##移动端的自适应 px2rem
npm install px2rem-loader --save-dev
assets/css/function.stylus
 px2rem($px)
        return ($px / 2) * 1rem
在需要写样式为px时，可以在所在的文件引入此文件，将px转化为rem

#vue封装好的@ 代表的是src
##定义好的组件怎么调用：
1.在App.vue中script中import引入该组件
import header from '@/component/header'
2.在export default 中的component中声明：
'v-header':header
3.在template中调用
<template><v-header></v-header></template>

##如何在调用的组件里面写入东西，需要用到slot插槽
1.在组件的template中需要定义好slot，它是作为标签的一个属性，如<div slot="left-icon"></div>
2.将该组件在App.vue中调用
3.在APP.vue的template中的组件标签中写入如
<v-header><div slot="left-icon"></div></v-header>

#页面之间的跳转
router-link的to属性，属性中放配置的url
<router-link to=""></router-link>

**组件的export default**
组件的export default中需要有的name:'组件名'，这里的组件名就是所调用的页面的component的value，如header.vue里面name:'hd'
所调用的页面中component{'v-header':hd} 

##<keep-alive></keep-alive>
用法: <keep-alive><router-view></router-view></keep-alive>
vue中保存上一个路由组件的状态的一个方法，如，在一个tab页下滑动到一半，然后切换到别的tab页，后面我又切回原来的tab页，如果没有这个标签的话就会回到最上面需要重新往下滑，有的话会保存之前的状态，直接回到离开时的位置

#页面中不会受路由影响的东西放到APP.vue中写

#img标签中可以直接定义宽高，不需要在css中写

#将页面扯满全屏
position fixed
top 0
left 0
bottom 0
right 0

#filter blur(20px)  将图片置为黑白还是彩色的

#<router-link>
标签就相当于html中的<a>标签，router-link标签中的to属性就相当于a标签中的href，会跳转到路由中定义好的页面

#两个毫不相干的组件之间传值（通信方式）：
1.定义一个bus全局变量，一个页面设置修改变量，另一个页面获取这个变量（此方法较为传统，适用于没有使用vuex仓库的项目）
2.使用vuex仓库
数据存在本地存储时刷新页面数据还在，而vuex存储的数据在页面刷新之后就不在了

**内部指令**
#v-html和v-text的区别：
当给他们赋值的字符串中含有标签名时，v-html会进行编译，而v-text还是把它当场字符串展示在页面上如
<p v-html='<span>hello world!</span>'></p>      //hello world!
<p v-text='<span>hello world!</span>'></p>      //<span>hello world!</span>
当字符串中不含有标签时两者效果是一样的

#{{}}
在这其中可以进行js运算

#绑定变量和方法
#v-bind
v-bind可缩写为':',用来绑定标签的属性<a v-bind:href="link"></a>,link是data中的一个变量,不使用v-bind时<a href="link"></a> link只是一个字符串"link"而不是data中的一个变量,
v-bind 绑定的 class 与本身的class不冲突,绑定class的时候可以用变量名，数组，对象
:class="active"   :class="[classA,classB]"  :class="{'red-font':true}"   
绑定方法和变量时只需写变量名或方法名  v-html="message",不需要使用{}

#v-for
渲染数组 v-for="(item, index) in items"
渲染对象v-for="(value, key) in object"

数组的filter、concat、slice方法不会触发双向绑定数据的更新
更改数组的某一项是也不会触发数据的更新，重新渲染，可以通过Vue的全局方法，Vue.set(数组名,索引,值)方法能够达到重新渲染的效果

#v-if和v-show
v-if 元素会从文档流里被删除
v-show 还会存在dom结构，只是通过display:none 来控制不显示

#v-on修改器
参数keydown和修改器.enter配合使用
@keydown.enter="onKeydown"

#绑定自定义事件
子组件绑定方法后，在该方法中this.$emit('abc','可以传的参数')   //abc为事件名
父组件通过@abc="方法名"  来监听，子组件触发的时候，父组件绑定的方法也会执行

#input
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

#v-model的三种修改器
<input v-model="myvalue">{{myvalue}}
v-model.lazy 延迟加载 就是等输入完了之后才去修改v-model所绑定的值
而没有.lazy修改器的时候，输入什么就会显示什么，实时的进行更改
.numbere 强制输入的值的类型为number 没有这个修改器的时候输入的都是string
.trim  清除输入的内容两端的空格






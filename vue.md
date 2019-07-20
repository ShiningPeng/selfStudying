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



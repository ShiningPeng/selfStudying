<template>
  <div class="lalal">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import  { Tabbar }  from 'vant'
import { TabbarItem } from 'vant'
// import 'vant/lib/tabbar/style'
// import 'vant/lib/tabbar-item/style'
export default {
  name:'test',
  // components:{
  //   [Tabbar.name]:Tabbar,
  //   [TabbarItem.name]:TabbarItem,
  //   [Icon.name]:Icon
  // },
  data () {
    return {
      active:0
    }
  }
};
</script>

<style>
</style>

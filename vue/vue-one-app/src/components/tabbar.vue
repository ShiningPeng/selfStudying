<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item info="3">
        <span>自定义</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
 
<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      }
    };
  },
  methods: {
    onChange(event) {
      console.log(event.detail);
    }
  }
};
</script>

<style>
</style>

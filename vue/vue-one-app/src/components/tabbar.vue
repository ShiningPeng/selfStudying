<template>
  <div>
    <van-tabbar :active="active" @change="onChange">
      <van-tabbar-item info="3">
        <image slot="icon" :src="icon.normal" mode="aspectFit" />
        <image slot="icon-active" :src="icon.active" mode="aspectFit" />自定义
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import { Tabbar, TabbarItem } from 'vant';
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

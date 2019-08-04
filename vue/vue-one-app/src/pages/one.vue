<template>
  <div class="container">
    <!-- header -->
    <v-header></v-header>
    <router-link to="/detail">
      <div class="item-top">
        <v-common  :items="items" ></v-common>
      </div>
    </router-link>
    
    <!-- 摄影 -->
    
    <!-- smallNavigator -->
    <!-- one-story -->
    <!-- 问答 -->
    <!-- 音乐 -->
    <!-- 影视 -->
    <!-- 深夜电台 -->
    <!-- 上一个 -->
    <!-- <v-test></v-test> -->
    <!-- tabbar -->
    <!-- <div> -->
    <!-- <v-tabbar></v-tabbar>  -->
    <!-- </div> -->
    
  </div>
</template>

<script>
import header from '@/components/header';
import commont from '@/components/one-common';
import tabbar from '@/components/tabbar';
// import test from '@/components/test-vant';

export default {
  name: "One",
  components: {
    "v-header": header,
    'v-common':commont,
    'v-tabbar':tabbar,
  },
  data() {
    return {   
      items:[
        {
          type: 'ONE-STORY',
          title: '什么时候，让你感受到在命运面前的无力感',
          author: '张三',
          desc:'在命运面前，似乎每个人在每个阶段，总会遇到一件“天大的事”，不同而又类似',
          date: '今天',
          aixinCount: 300
        },
        {
          type: '阅读',
          title: '当关系陷入瓶颈',
          author: '文/不辣',
          desc:'即使生活困顿，但仍对生命怀有热情，只要还抱着希望，还保有热情与信心，两个人可以一起创造很多东西',
          date: '今天',
          aixinCount: 1520
        },
        {
          type: '问答',
          title: '人为什么要结婚',
          author: '钱坤答',
          desc:'如果硬要我说一个结婚的理由',
          date: '今天',
          aixinCount: 485
        },
        {
          type: '影视',
          title: '是爱啊，我们都需要',
          author: '文/不辣',
          desc:'只要还抱着希望，还保有热情与信心，两个人可以一起创造很多东西',
          date: '今天',
          aixinCount: 1349
        }
      ]
    };
  },
  methods: {
   
  },
};
</script>

<style lang="stylus" scoped>
html,body
  width 100%
  height 100%
  .container
    .item-top
      margin-top 50px
      text-decoration none

</style>

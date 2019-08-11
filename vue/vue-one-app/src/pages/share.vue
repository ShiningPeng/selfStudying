<template>
  <div class="share-container">
    <router-link to="/">
      <span class="cancel">
        <i class="iconfont">&#xe629;</i>
      </span>
    </router-link>
    <div class="share-item"><i class="iconfont">&#xe606;</i></div>
    <div class="share-item"><i class="iconfont">&#xe605;</i></div>
    <div class="share-item"><i class="iconfont">&#xe60a;</i></div>
    <div class="share-item"><i class="iconfont">&#xe618;</i></div>
    <div class="share-item"><i class="iconfont">&#xe61f;</i></div>
  </div>
</template>

<script>
export default {
  name:'Share',
}
</script>

<style lang="stylus">
.share-container
  width 100%
  height 100%
  top 0
  left 0
  right 0
  bottom 0
  a 
    text-decoration: none
  .router-link-active 
    text-decoration none
  .cancel
    display block
    width 95%
    height 50px
    line-height 50px
    padding-right 5%
    text-align right 
    .iconfont
      right 30px
  .share-item
    width 100%
    height 100px
    line-height 100px
    text-align center
    .iconfont
      font-size 35px

</style>

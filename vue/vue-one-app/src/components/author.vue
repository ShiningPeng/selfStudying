<template>
  <div class="author-container">
    <!-- <div class="author-left"> -->
      <div class="author-avatar">
        <img src="../assets/images/bg.png" alt="">
      </div>
      <div class="author-msg">
        <p class="author-name">胡弃暗@胡弃暗2013</p>
        <p class="author-desc">小说作者，执业律师，中国壮丁</p>
      </div>
    <!-- </div> -->
    <div class="guanzhu-btn">
      <button>关注</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'author',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.author-container
  width 100%
  // border 1px solid #000
  box-sizing border-box
  font-size 13px
  display flex
  align-items center
  justify-content center 
  // .author-left
  //   display inline-block
  //   width 60%
  padding 20px 5px
  .author-avatar
    width 50px
    height 50px
    // margin-left 5px
    // flex 0.5
    img 
      width 100%
      height 100%
      border-radius 50%
  .author-msg
    // display inline-block
    flex 4
    margin-left 20px
    height 100%
    line-height 25px
    .author-name
      // color red
    .author-desc
      color #808080  
  .guanzhu-btn
    // display inline-block
    flex 1
    text-align right
    button
      color #808080
      font-size 13px
      width 40px
      height 20px
      line-height 20px 
     


</style>

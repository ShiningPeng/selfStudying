<template>
  <div class="author-container">
    <div class="author-left">
      <div class="author-avatar">
        <img src="../assets/images/bg.png" alt="">
      </div>
      <div class="author-msg">
        <p class="author-name">胡弃暗@胡弃暗2013</p>
        <p class="author-desc">小说作者，执业律师，中国壮丁</p>
      </div>
    </div>
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
  border 1px solid #000
  box-sizing border-box
  font-size 15px

  .author-left
    display inline-block
    width 60%
    padding 20px 5px
    .author-avatar
      width 50px
      height 50px
      // display inline-block

      img 
        width 100%
        height 100%
        border-radius 50%
    .author-msg
      display inline-block
      .author-name
        color red
      .author-desc
        color blue  
  .guanzhu-btn
    display inline-block

</style>

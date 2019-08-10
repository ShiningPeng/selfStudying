<template>
  <div class="comment-btn-container">
    <input type="text" class="input-box" placeholder="写一个评论.." maxlength="500">
    <div class="comment-btns">
      <i class="iconfont">&#xe601;</i>{{dianzanCount}}
      <i class="iconfont">&#xe64e;</i>{{commentCount}}
      <i class="iconfont">&#xe60d;</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dianzanCount:1254,
      commentCount:653
    }
  }
}
</script>

<style lang="stylus">
.comment-btn-container
  width 100%
  height 40px
  box-sizing border-box
  padding 5px 20px
  display flex
  // border 1px solid #000
  .input-box
    // display block
    height 25px
    // width 10px  
    flex 1
  .comment-btns
    display flex
    flex 1
    align-items center
    justify-content center
    text-align right
    .iconfont
      flex 1
</style>

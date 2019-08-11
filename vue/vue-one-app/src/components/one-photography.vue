<template>
  <div class="one-photography-container">
    <div class="one-photography-photo">
      <img src="../assets/images/bg.png" alt="">
    </div>
    <span class="one-photography-author">摄影|Toa Heftiba</span>
    <p class="one-photography-desc">我爱独处，我从来没有发现比独处更好地伙伴了。在多数情况下，我们外出，到人们中间去时，比呆在自己的屋子里更为孤独。</p>
    <span class="one-photography-source">梭罗《瓦登尔湖》</span>
    <div class="bottom-btn">
      <span class="discovery"><i class="iconfont">&#xe6b9;</i><span id="text">发现</span></span>
      <div class="btn-right">
        <span class="edit"><i class="iconfont">&#xe63a;</i></span>
        <span class="collect"><i class="iconfont">&#xe60b;</i></span>
        <span class="zhuanfa"><i class="iconfont">&#xe60d;</i></span>
        <span class="dianzan"><i class="iconfont">&#xe601;</i>8352</span>
      </div>
    </div>
    <div class="white-space"></div>
  </div> 

</template>

<script>
export default {
  name:'onePhotography',
  data () {
    return {
      
    }
  }
}
</script>

<style lang='stylus' scoped>
.one-photography-container
  width 100%
  // height 500px
  font-size 14px 
  box-sizing border-box
  // border 1px solid #000 
  margin-top 50px
  .one-photography-photo
    width 100%
    height 300px
    img 
      width 100%
      height 100%
  .one-photography-author
    display block
    width 100%
    height 20px
    line-height 20px
    text-align center
    margin 20px 0 10px 0
    color  #808080
  .one-photography-desc
    width 80%
    display block
    padding 5% 10%
  .one-photography-source
    display block
    width 100%
    text-align center
    height 20px
    line-height 20px
    color  #808080
    margin 10px 0
  .bottom-btn
    width 90%
    padding 5% 5% 0 5%
    height 20px
    line-height 20px
    margin 15px 0
    font-size 14px
    display flex
    .btn-right
      display flex
      flex 1
      .edit, .collect, .zhuanfa
        margin-right 10px
        flex 1
    .discovery
      flex 1
      #text
        font-size 13px
        margin-left 5px
        color #808080
  .white-space
    background-color #eeeeee
    width 100%
    height 10px
</style>

<template>
  <div id="date-nav-container">
    <div class="date-nav-img">
      <img src="../assets/images/bg.png" alt="">
    </div>
    <div class="date-nav-date">{{date}}</div>
  </div>
</template>

<script>
export default {
  name:'dateNav',
  data () {
    return {
      date:'2019/08/03',
      imgUrl:'../assets/images/bg.png'
    }
  }
}
</script>
  
<style lang='stylus' scoped>
#date-nav-container
  width 45.5%
  height 160px
  padding-left 5%
  margin-top 20px
  background-color #fff

  .date-nav-img
    width 100%
    height 120px
    img 
      width 100%
      height 100%
  .date-nav-date
    text-align center
    width 100%
    height 40px
    line-height 40px
    // border-top none
    box-sizing border-box
    border 1px solid #000

</style>

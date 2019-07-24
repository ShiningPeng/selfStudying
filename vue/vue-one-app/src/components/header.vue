<template>
  <div class="header">
    <div>
      <span class="day">{{day}}</span>
      <span class="year-month">{{yearAndMonth}}</span>
      <span><i class="iconfont">&#xe603;</i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "hd",
  data() {
    return {
      day: "26",
      yearAndMonth: "Jul.2019"
    };
  }
};
</script>

<style lang="stylus">
@import '../assets/css/function';

.header 
  height px2rem(88px)
  line-height px2rem(88px)
  text-align left
  display flex
  align-items center
  justify-content space-between
  padding px2rem(40px)
  z-index 1
  .day
    display inline-block
    font-size 35px
    font-weight 700
    
</style>

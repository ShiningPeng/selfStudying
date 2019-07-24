<template>
  <div class="container">
    <div class="content-type">-{{type}}-</div>
    <h2 class="title">什么时候，让你感受到在命运面前的无力感</h2>
    <h4 class="author"></h4>
    <div class="pic"><img src="../assets/images/bg.png" alt="叶修"></div>
    <p class="desc">在命运面前，似乎每个人在每个阶段，总会遇到一件“天大的事”，不同而又类似</p>
    <div class="foot">
      <span class="date">{{date}}</span>
      <div class="aixin-forwarding">
        <span class="aixin"><i class="iconfont">&#xe601;</i>{{aixinCount}}</span>
        <span class="forwarding"><i class="iconfont">&#xe60d;</i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'item',
data () {
  return {
    date:'7月23日',
    aixinCount:300
  }
}
}
</script>

<style lang="stylus" scoped>
.container
  
</style>

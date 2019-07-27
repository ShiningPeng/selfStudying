<template>
  <div class="cover-title-container">
    <div class="cover-title-cover">
      <img src="@/assets/images/bg.png" alt="">
    </div>
    <p class="cover-title-title">{{CTTitle}}</p>
  </div>
</template>

<script>
export default {
name:'coverTitle',
data(){
  return {
    CTTitle:'你是我最难忘记的夏天'
  }
}
}
</script>

<style lang="stylus" scoped>
.cover-title-container
  width 90%
  height 250px
  padding 2% 5%
  .cover-title-cover
    width 100%
    height 200px
    margin-bottom 20px
</style>

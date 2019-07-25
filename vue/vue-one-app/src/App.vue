<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
  #app
    background-color #eeeeee
    width 100%
    height 100%
    // margin 0 20px

</style>

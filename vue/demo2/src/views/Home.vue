<template>
  <div class="">
    <router-view/>
    <ul>
      <li><router-link :to="{name:'list'}">新闻列表</router-link></li>
      <li><router-link :to="{name:'user'}">个人中心</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
 name: '',
  data() {
    return {

    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="less">

</style>

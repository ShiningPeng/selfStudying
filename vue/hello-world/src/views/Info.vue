<template>
  <div>
    hello info component
    <button type="button" @click="add()">添加</button>
  </div>
</template>

<script>
import store from '../store/index'
export default {
 name: 'Info',
  data() {
    return {

    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    add(){
      console.log('点击了按钮');
      store.commit('increase');
    }
  }
}
</script>

<style scoped lang="less">

</style>




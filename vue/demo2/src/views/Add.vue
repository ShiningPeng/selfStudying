<template>
  <div class="">
    <p>标题</p>
    <input type="text" v-model="itemTitle">
    <p>内容</p>
    <input type="text" v-model="itemContent">
    <div class="btn" @click="add()">添加</div>
  </div>
</template>

<script>
import store from '@/store'
export default {
 name: 'Add',
 store,
  data() {
    return {
      itemTitle:'',
      itemContent:''
    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    add() {
      store.commit('addItem',{
        title:this.itemTitle,
        content:this.itemContent
      })
      this.itemContent = '';
      this.itemTitle = '';
      this.$router.push('/home/list');
    }
  }
}
</script>

<style scoped lang="less">

</style>

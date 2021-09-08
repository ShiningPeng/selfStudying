<template>
  <div class="">
    <ul>
      <li v-for="(item,index) in pageLists" :key="index">{{item.title}}-{{item.content}}</li>
    </ul>
  </div>
</template>

<script>
import store from '@/store'

export default {
 name: 'List',
 store,
  data() {
    return {

    }
  },
  computed:{
    pageLists() {
      return store.state.lists;
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

<template>
  <div class="">
    hello world!
    <ul>
      <li v-for="(item,index) in list" 
      :key="index"
      :class="current === index ? 'active':''"
      @click="choose(index)"
      >{{item}}</li>
    </ul>
    <br>
    <button type="button" @click="addNumber()">添加</button>
    <ul>
      <li v-for="(i,index1) in list2" :key="index1">{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
 name: '',
  data() {
    return {
      current:'',
      list:[1,2,3,4,5,6,7,8,9,10],
      list2:[]
    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    choose (index){
      this.current = index;
    },
    addNumber() {
      if(this.current === ''){return;}
      this.list2.push(this.list[this.current]);
      this.current = '';
    }
  }
}
</script>

<style scoped lang="less">
.active{
  background-color: green;
}
</style>

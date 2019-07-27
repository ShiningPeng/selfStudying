<template>
  <a class="m-tabbar-item" :class="{'is-active':isActive}" @click="goToRouter">
    <div class="m-tabbar-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></div>
    <div class="m-tabbar-item-icon" v-show="isActive"><slot name="icon-active"></slot></div>
    <div class="m-tabbar-item-text"><slot></slot></div>
 </a>
</template>
 
<script type="text/ecmascript-6">
 
 export default{
  props: {
   id: {
    type: String
   },
   isRouter: {
    type: Boolean,
    default: false
   }
  },
  computed: {
   isActive () {
    return this.isRouter
   }
  },
  methods: {
   goToRouter () {
    this.$parent.$emit('tabbarActionEvent', this.id)
    // 判断是否为路由跳转
    this.$router.push(this.id)
   }
  }
 }
</script>
 
<style scoped lang="stylus" >
 
.m-tabbar-item
  flex: 1
  text-align: center
  .m-tabbar-item-icon
    padding-top: 5px
    padding-bottom 1px
    img
      width: 24px
      height: 24px
    .m-tabbar-item-text
      font-size: 8px
      color:#949494
    &.is-active
      .m-tabbar-item-text
        color: #fa3e25
</style>
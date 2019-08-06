<template>
<div>
  <ul>
    <li  v-for="(item,index) in items" :key="index" >
      <div class='com-coner'>
        <div class='con-type'>- {{item.type}} -</div>
        <h3 class='title'>{{item.title}}</h3>
        <p class='author'>{{item.author}}</p>
        <div class='pic'>
          <img src='../assets/images/bg.png' alt='叶修' />
        </div>
        <p class='desc'>{{item.desc}}</p>
        <div class='foot'>
          <span class='date'>{{item.date}}</span>
          <div class='aixin-forwarding'>
            <span class='aixin'>
              <i class='iconfont'>&#xe601;</i>
              {{item.aixinCount}}
            </span>
            <span class='forwarding'>
              <i class='iconfont'>&#xe60d;</i>
            </span>
          </div>
        </div>
      </div>
      <div class="white-space"></div>
  </li>
</ul>
</div>

  
</template>

<script>
export default {
  props:['items'],
  name: 'item',
  data() {
    return {
      
    };
  }
};
</script>
<style lang='stylus' scoped>
.com-coner  
  // height 465px
  width 90% 
  margin-top: 10px 
  padding: 2% 5% 
  background-color: #fff 
  margin-bottom: 10px 
  .con-type  
    text-align: center 
    color: #808080 
    font-size: 12px 
    margin-bottom: 10px 
    padding-top: 8px 
  .title  
    font-weight: 500 
    margin-bottom: 10px 
    color: #333333 
    font-size: 15px 
  .author  
    font-size: 14px 
    color: #808080 
    margin-bottom: 10px 
  .pic  
    width: 100% 
    height: 250px 
    margin-bottom: 10px 
    img  
      width: 100% 
      height: 100% 
  .desc  
    font-size: 14px 
    color: #808080 
    margin-bottom: 20px 
  .foot  
    // width 100%
    display: flex 
    color: #808080 
    font-size: 15px 
    // margin-bottom 10px
    // position relative
    .date  
      flex: 1 
      text-align: left 
      // width 50%
      // position absolute
    .aixin-forwarding  
      display: inline-block 
      // width 50%
      // position absolute
      flex: 1 
      text-align: right 
.white-space
  background-color #eeeeee
  width 100%
  height 10px
</style>

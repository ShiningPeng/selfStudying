<template>
  <div class="login-container">
    <div class="input-username-box">
      用户名：<el-input class="input-item" v-model="userName" maxlength="15" clearable placeholder="请输入用户名"></el-input>
      密码：<el-input class="input-item" placeholder="请输入密码" maxlength="20" v-model="password" show-password></el-input>
    </div>
    <div class="login-btn">
      <el-button round type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data () {
    return {
      userName:'',
      password:''
    }
  }
};
</script>

<style lang="stylus" scoped>
.login-container
  width 30%
  height 250px
  border 1px solid #000
  margin 0 auto
  // font-size 0
  .input-username-box
    .input-item
      margin-bottom 20px
      display inline-block
</style>
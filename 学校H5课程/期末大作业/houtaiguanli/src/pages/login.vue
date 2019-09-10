<template>
  <div>
    <div class="input-username-box">
      用户名：<el-input v-model="userName" placeholder="请输入内容"></el-input>
    </div>
      <div class="input-password-box">
        密码：<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
    <div class="login-btn">
      <el-button round>登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'Login',
  data () {
    return {
      userName:'',
      password:''
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
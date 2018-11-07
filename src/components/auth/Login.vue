<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "Login",
      data() {
        return {
          form: {
            username: '',
            password: ''
          }
        }
      },
      methods: {
        onSubmit() {
          var qs = require('Qs');
          var login_params = qs.stringify({
            username: this.form.username,
            password: this.form.password
          });
          var _this = this;
          this.$ajax.post('http://localhost:8080/login', login_params)
            .then(function (response) {
              console.log(response);
              if(response.data.status === '1'){
                alert("用户名密码错误")
              }else {
                _this.$store.commit('set_token', response.data);
                alert('登录成功');
                _this.$router.push('/');
              }
            }).catch(function (error) {
            console.log(error);
            alert('登录失败')
          });
          console.log('submit!');
        }
      }
    }
</script>

<style scoped>

</style>

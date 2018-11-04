<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "Register",
      data() {
        return {
          form: {
            email: '',
            username: '',
            password: ''
          }
        }
      },
      methods: {
        onSubmit() {
          var qs = require('Qs');
          var register_params = qs.stringify({
            email: this.form.email,
            username: this.form.username,
            password: this.form.password
          });
          this.$ajax.post('http://localhost:8080/register', register_params)
            .then(function (response) {
              console.log(response);
              if(response.data.status === '1'){
                alert('用户名重复')
              }else {
                alert('注册成功')
              }
            }).catch(function (error) {
            console.log(error);
            alert('注册失败')
          });
        }
      }
    }
</script>

<style scoped>

</style>

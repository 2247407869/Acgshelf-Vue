<template>
  <div id="app">
    <el-container>
      <el-header height="42px">
        <div class="header-wrapper">
          <div class="nav_con fl">
            <ul class="fl">
              <li class="nav-item"><router-link class="nav-link" to="/">ACGshelf</router-link></li>
            </ul>
          </div>
          <div class="nav_con fr">
            <ul class="fr" v-if="!$store.state.token">
              <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
            </ul>
            <ul class="fr" v-else>
              <li class="nav-item"><router-link class="nav-link" to="/{id}/detail">{{$store.state.username}}</router-link></li>
              <li class="nav-item"><div class="nav-link" v-on:click="logout">Logout</div></li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        // user_token: sessionStorage.user_token
      }
    },
    methods: {
      logout(){
        this.$store.commit('delete_token');
        alert('登出成功');
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #b3c0d1;
  }

  .el-header, .el-footer {
    background-color: hsla(0,0%,100%,.4);
    color: #333;
    text-align: center;
  }

  .header-wrapper{
    margin: 0 auto;
    width: 1160px;
  }

  .nav-item{
    float: left;
  }

  ul {
    list-style: none;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .el-main {
    color: #333;
    width: 1140px;
    margin: 0 auto;
  }

</style>

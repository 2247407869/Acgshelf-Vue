<template>
  <div id="app">
    <el-container>
      <el-header height="51px">

      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App'
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

  .el-main {
    color: #333;
    width: 1140px;
    margin: 0 auto;
  }

</style>

<template>

  <div class="ranking">
    <li v-for="anime in animes">
      {{ anime.name }}
    </li>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      animes:[],
      url_params: {
        pageNum:'1',
        pageSize:'30'
      },
    }
  },
  created: function() {
    this.$http.get('http://localhost:8080/listCategory',{params:this.url_params})
      .then((response) => {
      this.animes = response.data.list;
    });
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

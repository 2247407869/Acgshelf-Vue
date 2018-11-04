<template>

  <div class="ranking">
    <li v-for="anime in animes">
      <div class="li_left">
        <a :href=anime.url><img :src=anime.imagesSmall></a>
      </div>
      <div class="li_middle">
        <div>{{ anime.rank }}.{{ anime.nameCn }}</div>
        <br/><br/>
        <div>{{anime.epsCount}}</div>
        <div>{{anime.airDate}}</div>
      </div>
      <div class="li_right">
        <el-radio-group v-model="anime.collection" size="mini" @change="collectionChange(anime.id,anime.collection)">
          <el-radio-button label="1">抛弃</el-radio-button>
          <el-radio-button label="2">搁置</el-radio-button>
          <el-radio-button label="3">想看</el-radio-button>
          <el-radio-button label="4">在看</el-radio-button>
          <el-radio-button label="5">看过</el-radio-button>
        </el-radio-group>
      </div>
    </li>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      animes:[],
      dialogVisible: false,
      radio:'',
      url_params: {
        pageNum:'1',
        pageSize:'30'
      },
    }
  },
  created: function() {
    this.$http.get('http://localhost:8080/anime/rank',{params:this.url_params})
      .then((response) => {
        this.animes=response.data.list;
      });
  },
  methods:{
    collectionChange(id,collection){
      this.$http.post('http://localhost:8080/anime/'+id+'?collection='+collection);
      console.log("send ok");
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ranking li{
    list-style: none;
    background-color: #e4e7ed;
    border-bottom: solid;
    border-bottom-width: 1px;
    border-bottom-color: #b3c0d1;
    height: 105px;
  }
  .li_left{
    float: left;
  }
  .li_middle{
    float: left;
    padding-left: 20px;

  }
  .li_right{
    float: right;
    padding-right: 50px;
  }
</style>

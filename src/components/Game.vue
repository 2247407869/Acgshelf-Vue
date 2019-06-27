<template>

  <div class="ranking">
    <!--<div>hello</div>-->
    <el-card class="box-card" shadow="hover" v-for="anime in animes" :key="anime.rank">

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

    </el-card>
  </div>

</template>

<script>
  export default {
    name: 'Game',
    data () {
      return {
        animes:[],
        dialogVisible: false,
        radio:'',
        url_params: {
          pageNum:'1',
          pageSize:'30',
          order:'rank',
        },
      }
    },
    created: function() {
      this.$ajax.get(this.baseURL+'/anime/rank',
        {params:this.url_params,
          headers:{'x-authorization':this.$store.state.token}})
        .then((response) => {
          console.log(response);
          this.animes=response.data.list;
        }).catch(function (error) {
        console.log(error);
      });
    },
    methods:{
      collectionChange(id,collection){
        var qs = require('Qs');
        var params = qs.stringify({
          collection:collection
        });
        this.$ajax.post(this.baseURL+'/anime/'+id, params,
          {headers:{'x-authorization':this.$store.state.token}})
          .then((response) => {
            console.log(response);
          }).catch(function (error) {
          console.log(error);
        });
        console.log("send ok");
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ranking .box-card{
    /*background-color: #e4e7ed;*/
    /*border-bottom: solid;*/
    /*border-bottom-width: 1px;*/
    /*border-bottom-color: #b3c0d1;*/
    /*height: 150px;*/
    padding-bottom: 10px;
    margin-bottom: 10px;
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
    /*padding-right: 50px;*/
  }
</style>

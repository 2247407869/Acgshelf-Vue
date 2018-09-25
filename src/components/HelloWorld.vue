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
        <!--<el-button type="text" @click="dialogVisible = true">修改</el-button>-->
      </div>
    </li>

    <!--<el-dialog-->
      <!--title="修改"-->
      <!--:visible.sync="dialogVisible"-->
      <!--width="30%">-->
      <!--&lt;!&ndash;:before-close="handleClose"&ndash;&gt;-->
      <!--<el-radio-group v-model="radio" size="mini">-->
        <!--<el-radio-button label="抛弃"></el-radio-button>-->
        <!--<el-radio-button label="搁置"></el-radio-button>-->
        <!--<el-radio-button label="想看"></el-radio-button>-->
        <!--<el-radio-button label="在看"></el-radio-button>-->
        <!--<el-radio-button label="看过"></el-radio-button>-->
      <!--</el-radio-group>-->

      <!--<span slot="footer" class="dialog-footer">-->
        <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
      <!--</span>-->
    <!--</el-dialog>-->
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
    this.$http.get('http://localhost:8080/listCategory',{params:this.url_params})
      .then((response) => {
        this.animes=response.data.list;
      });
  },
  methods:{
    collectionChange(id,collection){
      this.$http.post('http://localhost:8080/listCategory/'+id+'?collection='+collection);
      console.log("send ok");

      // this.$http.get('http://localhost:8080/listCategory',{params:this.url_params})
      //   .then((response) => {
      //     this.animes=response.data.list;
      //   });
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

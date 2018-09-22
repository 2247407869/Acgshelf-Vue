<template>

  <div class="ranking">
    <li v-for="anime in animes">
      <div class="li_left">
      </div>
      <div class="li_middle">
        {{ anime.rank }}.{{ anime.name }}
      </div>
      <div class="li_right">
        <el-button type="text" @click="dialogVisible = true">修改</el-button>
      </div>
    </li>

    <el-dialog
      title="修改"
      :visible.sync="dialogVisible"
      width="30%">
      <!--:before-close="handleClose"-->
      <el-radio-group v-model="radio" size="medium">
        <el-radio-button label="想看"></el-radio-button>
        <el-radio-button label="看过"></el-radio-button>
        <el-radio-button label="在看"></el-radio-button>
        <el-radio-button label="搁置"></el-radio-button>
        <el-radio-button label="抛弃"></el-radio-button>
      </el-radio-group>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      this.animes = response.data.list;
    });
  },
  methods:{

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
    height: 40px;
  }
  .li_left{
    display:inline-block;

  }
  .li_middle{
    display:inline-block;
    padding-left: 150px;

  }
  .li_right{
    float: right;
    padding-right: 150px;
  }
</style>

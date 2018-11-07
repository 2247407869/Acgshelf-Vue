// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import  VueResource  from 'vue-resource'
Vue.use(VueResource);

import axios from 'axios'
Vue.prototype.$ajax= axios;

import Qs from 'qs'
Vue.use(Qs);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  created(){
    if(localStorage.getItem("token")===null){
      localStorage.setItem("token",'');
    }
    this.$store.commit("set_token", {token:localStorage.getItem("token"),
        username:localStorage.getItem("username")});
    if(this.$store.state.token!==''){
      var _this = this;
      this.$ajax.get('http://localhost:8080/refreshToken',
        {headers:{'x-authorization':this.$store.state.token}})
        .then(function (response) {
          console.log(response);
          _this.$store.commit('set_token', response.data);
          console.log("更新token成功");
        }).catch(function (error) {
        console.log(error);
        _this.$store.commit('delete_token');
        alert('需要重新登录');
      });
    }
  },
  template: '<App/>'
});

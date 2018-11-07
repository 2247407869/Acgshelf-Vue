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
    if(localStorage.getItem("token")!==null){
      this.$store.state.token = localStorage.getItem("token");
      this.$store.state.username = localStorage.getItem("username");
    }
  },
  template: '<App/>'
});

import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
var store = new vuex.Store({//store对象
  state:{
    token:''
  },
  mutations: {
    set_token (state, token) {
      state.token = token;
      // sessionStorage.token = token
    }
  }
});
export default store


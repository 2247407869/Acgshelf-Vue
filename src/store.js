import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
var store = new vuex.Store({//store对象
  state:{
    token:'',
    username:'',
  },
  mutations: {
    set_token (state, data) {
      state.token = data.token;
      state.username = data.username;
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
    },
    delete_token(state){
      state.token = '';
      state.username = '';
      localStorage.setItem("token", '');
      localStorage.setItem("username", '');
    }
  }
});
export default store


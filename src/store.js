import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
var store = new vuex.Store({//store对象
  state:{
    token:'',
    username:'',
  },
  mutations: {
    set_token (state, token) {
      state.token = token;
      state.username = username;
      localStorage.setItem(token, token);
      localStorage.setItem(username, username);
    },
    delete_token(state){
      state.token = '';
      state.username = '';
      localStorage.setItem(token, '');
      localStorage.setItem(username, '');
    }
  }
});
export default store


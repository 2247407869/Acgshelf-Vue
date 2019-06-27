import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
import Game from '@/components/Game'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
});
export default router

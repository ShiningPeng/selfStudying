import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login';
import Index from '@/pages/index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login,
      name:'Login'
    },
    {
      path:'/index',
      component:Index,
      name:'Index'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import { ElLoadingComponent } from 'element-ui/types/loading';
import Login from '@/pages/login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:ElLoadingComponent,
      name:'Login'
    }
  ]
})

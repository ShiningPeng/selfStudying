import Vue from 'vue'
import Router from 'vue-router'
import One from '@/pages/one'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'One',
      component: One
    }
  ]
})

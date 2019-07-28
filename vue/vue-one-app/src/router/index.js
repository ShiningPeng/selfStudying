import Vue from 'vue'
import Router from 'vue-router'
import One from '@/pages/one'
import Test from '@/components/test-vant'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'One',
      component: One
    },
    {
      path:'/test',
      name:'test',
      component:Test
    }
  ]
})

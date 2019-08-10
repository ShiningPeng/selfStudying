import Vue from 'vue'
import Router from 'vue-router'
import One from '@/pages/one'
import DateNav from '@/components/DateNav'
import OnePhotography from '@/components/one-photography';
import Detail from '@/pages/detail'
import Share from '@/pages/share'
import Author from '@/components/author'
import CommentBtn from '@/components/commentButton'

// import Test from '@/components/test-vant'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'One',
      component: One
    },
    {
      path: '/d',
      name: 'DateNav',
      component: DateNav
    },
    {
      path: '/p',
      name: 'OnePhotography',
      component: OnePhotography
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/a',
      name: 'Author',
      component: Author
    },
    {
      path: '/btn',
      name: 'CommentBtn',
      component: CommentBtn
    },
    {
      path: '/share',
      name: 'Share',
      component: Share 
    }
  ]
})

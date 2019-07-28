// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { Tabbar, TabbarItem, Icon } from 'vant';
// import 'vant/lib/tabbar/index.css'
// import 'vant/lib/tabbar-item/index.css'

// Vue.use(Tabbar).use(TabbarItem).use(Icon);

// import '@/assets/css/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

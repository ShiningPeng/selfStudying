// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Upload, Dialog, Badge, Button, Alert, Radio, Drawer, RadioGroup } from 'element-ui'

Vue.use(Upload).use(Dialog).use(Badge).use(Button).use(Alert).use(Radio).use(Drawer).use(RadioGroup);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

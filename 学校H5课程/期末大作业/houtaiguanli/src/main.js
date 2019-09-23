// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Input, Button, Menu, MenuItem, Submenu, RadioGroup, RadioButton, Form, FormItem } from 'element-ui'

Vue.use(Input).use(Button).use(Menu).use(MenuItem).use(Submenu).use(RadioGroup).use(RadioButton).use(Form).use(FormItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

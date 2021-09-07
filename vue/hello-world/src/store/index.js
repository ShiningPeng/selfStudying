import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    //改变状态的方法集
    increase(){
      this.state.count ++;
    }
  },
  actions: {
  },
  modules: {
  }
})

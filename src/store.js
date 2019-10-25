import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './store/user'
import generalModule from './store/general'
import examplesModule from './store/examples'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generalModule,
    userModule,
    examplesModule
  }
})

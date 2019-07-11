import Vue from 'vue'
import Vuex from 'vuex'
import surveyStore from './modules/surveyStore'
import userStore from './modules/userStore'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    surveyStore,
    userStore
  }
})

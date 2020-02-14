import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import categories from './modules/categories'
import skills from './modules/skills'
import works from './modules/works'
import reviews from './modules/reviews'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isError: false,
    errorMessage: ''
  },
  getters: {
    getError: state => state.isError,
    getErrorMessage: state => state.errorMessage
  },
  actions: {
    setError({commit},payload) {
      commit('SET_ERROR', payload)
    }
  },
  mutations: {
    SET_ERROR(state,{message}) {
      state.isError = !!message
      state.errorMessage = message
    }
  },
  modules: {
    auth,
    categories,
    skills,
    works,
    reviews,
  }
})
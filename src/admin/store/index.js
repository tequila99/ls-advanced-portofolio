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
    getError: state => isError,
    getErrorMessage: state => errorMessage
  },
  actions: {
    setError({commit},{message}) {
      commit('SET_ERROR', message)
    }
  },
  mutations: {
    SET_ERROR(state,payload) {
      state.isError = !!payload
      state.errorMessage = payload
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
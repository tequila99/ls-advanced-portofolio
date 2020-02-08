import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import categories from './categories'
import skills from './skills'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    categories,
    skills
  }
})
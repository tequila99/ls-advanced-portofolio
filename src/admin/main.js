import Vue from 'vue';
import Router from 'vue-router'
// import routes from './router/routes'
import axios from 'axios'

import 'normalize.css'
// import '../styles/mixins.pcss';
// include '../styles/vatiables.json';

// Vue.use(Router);


const token = localStorage.getItem('loftschool-user-token') 

axios.defaults.baseURL = 'https://webdev-api.loftschool.com/'

if (!!token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

import router from './router'

// const router = new Router ({
//   base: '/admin/',
//   routes,
// })

import App from './App.vue'

import store from './store'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faEdit,faCheck, faPlus, faTimes, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes)
library.add(faPlus)
library.add(faPencilAlt)
library.add(faEdit)
library.add(faTrash)
library.add(faCheck)
library.add(faUser)


Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: "#app-root",
  render: h => h(App),
  router,
  store,
});
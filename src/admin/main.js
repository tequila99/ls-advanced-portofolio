import Vue from 'vue';
import Router from 'vue-router'
// import routes from './router/routes'
import axios from 'axios'

import 'normalize.css'
// import '../styles/mixins.pcss';
// include '../styles/vatiables.json';

// Vue.use(Router);
import store from './store'

const token = localStorage.getItem('loftschool-user-token') 

axios.defaults.baseURL = 'https://webdev-api.loftschool.com/'

axios.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // return axios.post("/refreshToken")
      //   .then(res => {
      //       if (res.status === 201) {
      //         console.log('Статсу 201')
      //         const token = response.data.token;       
      //         store.dispatch('setToken', token) 
      //         console.log(token)
      //         axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      //         // originalRequest.headers["Authorization"] = `Bearer ${token}`
      //         return axios(originalRequest);
      //       }
      //   }).catch(err => {
      //     console.log(err)
      //   });
    }
    return Promise.reject(error);
  }
);

if (!!token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

import router from './router'

// const router = new Router ({
//   base: '/admin/',
//   routes,
// })

import App from './App.vue'

// import store from './store'


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
import Vue from 'vue';
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit,faCheck, faPlus, faTimes, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes)
library.add(faPlus)
library.add(faPencilAlt)
library.add(faEdit)
library.add(faTrash)
library.add(faCheck)


Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: "#app-root",
  render: h => h(App),
});
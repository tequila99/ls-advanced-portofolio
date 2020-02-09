// console.log('this is skills module');
import Vue from "vue";
import axios from 'axios'
axios.defaults.baseURL = 'https://webdev-api.loftschool.com/'

const USER = 261

const Ring = {
  template: '#skills-ring',
  props: {
    className: {
      type: String,
      default: 'ring-row'
    },
    label: {
      type: String,
      default: 'My skill'
    },
    value: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      fullLength: 502
    }
  },
  computed: {
    classRing() {
      return `${this.className}__ring`
    },
    dashOffset() {
      return this.fullLength / 2
    },
    dashArray() {
      return `${(this.fullLength * this.value)/100}, ${this.fullLength-(this.fullLength * this.value)/100 }`
    }
  }
}

const Row = {
  template: '#skills-row',
  props: {
    className: {
      type: String,
      default: 'ring-row'
    },
    title: {
      type: String,
      default: 'My skills'
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    classTitle() {
      return `${this.className}__title`
    },
    classList() {
      return `${this.className}__list`
    }
  },
  components: {
    Ring,
  }
}

new Vue({
	el: "#skills",
  template: "#skills-component",
  props: {
    className: {
      type: String,
      default: 'ring-row'
    }
  },
  data() {
    return {
      skills: []
    }
  },
  components: {
    Row
  },
  created() {
    // this.skills = require('../json/skills.json')
    axios.get(`/categories/${USER}`)
      .then(({data}) => {
        this.skills = data
      })
      .catch(error => console.log(error))
  }
})
  
// console.log('this is skills module');
import Vue from "vue";

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
      skills: [
        {
          title: 'Front-end', 
          items: [
            {label: 'HTML5', value: 30},
            {label: 'CSS3', value: 40},
            {label: 'Javascript', value: 70},
            {label: 'jquery и Vue.js', value: 10}            
          ]
        },
        {
          title: 'Work Flow',
          items: [
            {label: 'GIT', value: 60},
            {label: 'Terminal', value: 35},
            {label: 'Gulp', value: 64},
            {label: 'Webpack', value: 20}            
          ]
        }
      ]
    }
  },
  components: {
    Row
  }
})
  
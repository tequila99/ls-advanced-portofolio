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
  },
  methods: {
    drawCircle(entries) {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        const circle = this.$refs['color-circle']
        circle.style.strokeDashoffset = this.fullLength;
        const dashOffset = parseInt(
          getComputedStyle(circle).getPropertyValue('stroke-dasharray')
        );
        const percent = (dashOffset /100) * (100 - this.value)
        circle.style.strokeDashoffset = percent;
      } else {
        const circle = this.$refs['color-circle']
        circle.style.strokeDashoffset = this.fullLength;
      }
    }
  },
  mounted () {
    const options ={
      rootMargin: '0px',
      threshold: 1
    }
    const observer = new IntersectionObserver(this.drawCircle, options)
    observer.observe(this.$refs.skill)
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
  
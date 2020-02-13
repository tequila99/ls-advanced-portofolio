import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'https://webdev-api.loftschool.com/'
const USER = 261

const previewNav = {
  template: '#preview-nav',
  props: {
    className: {
      type: String,
      default: 'preview-image'
    },
  },
  computed: {
    classNav() {
      return `${this.className}__nav`
    },
    classNavButton() {
      return `${this.className}__nav-button`
    }
  },
}


const previewThmb = {
  template: '#preview-thmb',
  props: {
    className: {
      type: String,
      default: 'preview-image'
    },
    active: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,      
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classThmb() {
      return !!this.active ? `${this.className}__thmb preview-img__thmb--active` : `${this.className}__thmb`
    }

  },
  methods: {
    handleClick() {
      this.$emit('select', this.index)
    }
  }
}

const previewSlider = {
  template: '#preview-slider',
  props: {
    className: {
      type: String,
      default: 'preview-image'
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      maxItems: 4,
      startOffset: 0,
      windowWidth: window.innerWidth
    }
  },
  watch: {
    activeIndex(newval,oldval) {
      if (newval >= this.maxItems) {
        this.startOffset = newval- this.maxItems +1;
      } else {
        this.startOffset =0;
      }
    },
    windowWidth(newval) {
      this.$nextTick(() => {
        this.maxItems = this.windowWidth < 1200 ? 3 : 4;
      })
    }
  },
  computed: {
    classSlider() {
      return `${this.className}__block-thmb`
    },
    windowItems() {
      return this.items.slice(this.startOffset,this.startOffset+this.maxItems)
    }
  },
  mounted() {
    window.onresize = (event) => {
      this.windowWidth = window.innerWidth
    }
  },
  components: {
    previewThmb
  }
}

const previewImage = {
  template: '#preview-image',
  props: {
    className: {
      type: String,
      default: 'preview-image'
    },
    items: {
      type: Array,
      default: () => []
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classImage() {
      return `${this.className}__img`
    },
    currentImage() {
      return !!this.items.length ? this.items[this.activeIndex].photo : ''
    }
  },
  components: {
    previewNav, previewSlider
  }
}

new Vue({
	el: "#preview-all",
  template: "#preview-main",
  props: {
    className: {
      type: String,
      default: 'preview-image'
    }
  },
  data() {
    return {
      items: [],
      activeIndex: 0
    }
  },
  computed: {
    title() {
      return !!this.items.length ? this.items[this.activeIndex].title : ''
    },
    text() {
      return !!this.items.length ? this.items[this.activeIndex].descriptionn : ''
    },
    link() {
      return !!this.items.length ? this.items[this.activeIndex].link : ''
    },
    tags() {
      return !!this.items.length ? this.items[this.activeIndex].techs.split(',').map(el => el.trim()).filter(el => !!el) : []
    },
  },
  methods: {
    handleImages() {
      this.items.forEach(el => {
        el.photo = `${axios.defaults.baseURL}${el.photo}`
      })      
    },
    changeImage(direction) {
      if (direction==='up') {
        this.activeIndex < this.items.length-1 ? this.activeIndex++ : this.activeIndex = 0
      } else if (direction==='down') {
        this.activeIndex === 0 ? this.activeIndex = this.items.length-1 : this.activeIndex--
      }
    },
    selectImage(index) {
      this.activeIndex = index
    }
  },
  created() {
    // this.items = require('../json/preview.json')
    axios.get(`/works/${USER}`)
      .then(({data}) => {
        this.items = data
        this.handleImages()
      })
      .catch(error => console.log(error))
    
	},
  components: {
    previewImage,
    previewNav, previewSlider
  }
})
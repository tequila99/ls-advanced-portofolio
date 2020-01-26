import Vue from 'vue'

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
      maxItems: 3,
      startOffset: 0
    }
  },
  watch: {
    activeIndex: function(newval,oldval) {
      if (newval >= this.maxItems) {
        this.startOffset = newval- this.maxItems +1;
      } else {
        this.startOffset =0;
      }
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
      return this.items[this.activeIndex].realpath
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
      items: [
          {
            realpath: '', path: 'preview/1.jpg', title: 'Сайт школы образования', 
            text: '1 Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!', 
            href:'#',
            tags: ['HTML', 'CSS', 'Javascript']
          },
          {
            realpath: '', path: 'preview/2.jpg', title: 'Сайт института', 
            text: '2 Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!',
            href:'#',
            tags: ['HTML', 'CSS', 'Javascript']
          },
          {
            realpath: '', path: 'preview/3.jpg', title: 'Сайт школы водителей', 
            text: '3 Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!',
            href:'#',
            tags: ['HTML', 'CSS', 'Javascript']
          },
          {
            realpath: '', path: 'preview/4.jpg', title: 'Сайт университета', 
            text: '4 Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!',
            href:'#',
            tags: ['HTML', 'CSS', 'Javascript']
          },
          {
            realpath: '', path: 'preview/5.jpg', title: 'Сайт чего-то там еще', 
            text: '5 Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!',
            href:'#',
            tags: ['HTML', 'CSS', 'Javascript']
          }
      ],
      activeIndex: 0
    }
  },
  computed: {
    title() {
      return this.items[this.activeIndex].title
    },
    text() {
      return this.items[this.activeIndex].text
    },
    link() {
      return this.items[this.activeIndex].href
    },
    tags() {
      return this.items[this.activeIndex].tags
    },
  },
  methods: {
    handleImages() {
      this.items.forEach(el => {
        el.realpath = require(`images/${el.path}`)
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
    this.handleImages()
	},
  components: {
    previewImage
  }
})
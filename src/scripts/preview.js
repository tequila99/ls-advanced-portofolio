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
    disabled: {
      type: Boolean,
      default: false
    }
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
    },
    id: {
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
      this.$emit('select', this.id)
    },
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      maxItems: 3,
      startOffset: 0,
      windowWidth: window.innerWidth,
      displayItems: [],
      direction: ''
    }
  },
  watch: {
    activeIndex(newval,oldval) {
      if (newval === oldval+1 || newval === 0 && oldval === this.items.length - 1 ) {
        if (this.items[oldval].id === this.windowItems[this.windowItems.length - 1].id) {
          this.displayItems = this.displayItems.concat(this.displayItems[0])
          this.displayItems.shift()
          this.direction = 'up'
        }
      } else  if (newval+1 ===  oldval || newval === this.items.length - 1 && oldval === 0 ) {
        if (this.items[oldval].id === this.windowItems[0].id) {
          const last = this.displayItems[this.displayItems.length-1]
          this.displayItems = [last].concat(this.displayItems)
          this.displayItems.pop()
          this.direction = 'down'
        }
      }
    },
    windowWidth(newval) {
      this.$nextTick(() => {
        let max= this.windowWidth < 1200 ? 2 : 3;
        if (
            max === 2 && 
            this.windowItems.length === 3 &&
            this.items[this.activeIndex].id === this.windowItems[this.windowItems.length-1].id
          ) {
            this.displayItems = this.displayItems.concat(this.displayItems[0])
            this.displayItems.shift()
            this.direction = 'up'            
          }
        this.maxItems = max;
      })
    },
    maxItems(newval, oldval) {
      let tmbContainer = this.$refs['tmb-container']
      if (newval === 2 ) {
        tmbContainer.style.height = '200px';
      } else {
        tmbContainer.style.height = '300px';
      }
    },
    items(newval) {
      this.displayItems = [...newval]
    }
  },
  computed: {
    classSlider() {
      return `${this.className}__block-thmb`
    },
    windowItems() {
      return [...this.displayItems].splice(0,this.maxItems)
    },
 
  },
  methods: {
    beforeCb(el) {
      this.windowWidth > 968 && this.$emit('disable', true)
    },
    enterCb(el, done) {
      const list = this.$refs['list-thmb'].$el
      const heightEl = getComputedStyle(el).height         
      el.classList.add('outsided')
      list.classList.add('transition')      
      if (this.direction ==='up') {
        el.style.bottom = '100%'
        list.style['justify-content']='flex-end'
        list.style.transform =`translateY(${heightEl})`
      } else {
        el.style.top = '100%'
        list.style['justify-content']='flex-start'
        list.style.transform =`translateY(-${heightEl})`
      }
      list.addEventListener('transitionend', e => done())
    },
    afterCb(el) {
      const list = this.$refs['list-thmb'].$el
      list.style['justify-content']='unset'
      list.classList.remove('transition')
      list.style.transform ='translateY(0px)' 
      el.style.bottom='unset';
      el.style.top='unset';
      el.classList.remove('outsided') 
      this.$emit('disable', false)     
    },
    leaveCb(el,done) {
      el.classList.add('fade')
      done()    
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
    displayItems: {
      type: Array,
      default: () => []
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      direction: ''
    }
  },
  watch: {
    activeIndex(newval, oldval) {
      if (newval === oldval+1 || newval === 0 && oldval === this.items.length - 1 ) {
        this.direction = 'up' 
      } else  if (newval+1 ===  oldval || newval === this.items.length - 1 && oldval === 0 ) {
        this.direction = 'down'
      } else {
        if (newval > oldval) {
          this.direction = 'up'
        } else {
          this.direction = 'down'
        }
      }
      console.log(this.direction)
    }
  },
  computed: {
    classImage() {
      return `${this.className}__img`
    },
    currentImage() {
      return !!this.items.length ? this.items[this.activeIndex].photo : ''
    },
    showSlide() {
      return this.displayItems.slice(0,1);
    }
  },
  methods: {
    beforeCb(el) {
      this.$emit('disable', true)
    },
    enterCb(el,done) {
      const list  = el.parentNode
      el.classList.add('outsided')
      const widthEl = getComputedStyle(el).width       
      list.classList.add('transition')      
      if (this.direction === 'up') {
        el.style.right = '100%'
        list.style.transform =`translateX(${widthEl})`
      } else {
        el.style.left = '100%';
        list.style.transform =`translateX(-${widthEl})`
      }
      list.addEventListener('transitionend', e => done())
    },
    afterCb(el) {
      const list  = el.parentNode
      list.classList.remove('transition')
      list.style.transform ='translateX(0px)' 
      el.style.left='0';
      el.style.right='0';
      el.classList.remove('outsided')
      this.$emit('disable', false)
    },
    leaveCb(el,done) {
      el.classList.add('fade')
      done()
    },
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
      activeIndex: 0,
      displayItems: [],
      disableImage:  false,
      disableSlider: false,
      // disabled: true
    }
  },
  watch: {
    items(newval) {
      this.handleItems(newval)
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
    disabled() {
      return (this.disableImage || this.disableSlider)
    }
  },
  methods: {
    handleItems(items) {
      this.displayItems = [...items]
    },    
    handleImages() {
      this.items.forEach(el => {
        el.photo = `${axios.defaults.baseURL}${el.photo}`
      })      
    },
    
    changeImage(direction) {
      if (direction==='up') {
        this.activeIndex < this.items.length-1 ? this.activeIndex++ : this.activeIndex = 0
        const first = this.displayItems.shift()
        this.displayItems = this.displayItems.concat(first)
      } else if (direction==='down') {
        const last = this.displayItems.pop()
        this.displayItems = [last].concat(this.displayItems)
        this.activeIndex === 0 ? this.activeIndex = this.items.length-1 : this.activeIndex--
      }
    },
    selectImage(id) {
      this.activeIndex = this.items.findIndex(el => el.id === id)
      let index = this.displayItems.findIndex(el => el.id === id)
      let first = this.displayItems.splice(0,index)
      this.displayItems = this.displayItems.concat(first)
    },
    handleDisableImage(d) {
      this.disableImage = d
    },
    handleDisableSlider(d) {
      this.disableSlider = d
    }
  },
  created() {
    axios.get(`/works/${USER}`)
      .then(({data}) => {
        this.items = data
        this.handleImages(data)
      })
      .catch(error => console.log(error))
    
	},
  components: {
    previewImage,
    previewNav, previewSlider
  }
})
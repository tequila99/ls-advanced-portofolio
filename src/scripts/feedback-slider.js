import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vue from "vue";


new Vue({
	el: "#feed-slider",
	template: "#feedback-slider",
	components: {
    // Flickity,
    swiper, swiperSlide
	},
	data() {
		return {
			desktop: window.matchMedia("(min-width: 768px)").matches,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,        
        loop: true,  
        grabCursor: true,
        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      items: [],
		};
  },
	methods: {
    getImagePath(path) {
      return require(`images/${path}`)
    },
    handleImages() {
      this.items.forEach(el => {
        el.realpath = require(`images/${el.path}`)
      })
    },
    next() {
      this.$refs.swiper.swiper.slideNext()
    },
    prev() {
      this.$refs.swiper.swiper.slidePrev()
    }
	},
	created() {
    this.items = require('../json/feedback-slider.json');
    this.handleImages()
  },  
});
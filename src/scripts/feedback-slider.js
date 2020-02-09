import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vue from "vue";
import axios from 'axios'
axios.defaults.baseURL = 'https://webdev-api.loftschool.com/'
const USER = 261

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
  computed: {

  },
	methods: {
    getImagePath(path) {
      return require(`images/${path}`)
    },
    handleImages() {
      
      this.items.forEach(el => {
        el.photo = `${axios.defaults.baseURL}${el.photo}`
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
    // this.items = require('../json/feedback-slider.json');
    // this.handleImages()
    axios.get(`/reviews/${USER}`)
      .then(({data}) => {
        this.items = data 
        this.handleImages()
      })
      .catch(error => console.log(error))
  },  
});
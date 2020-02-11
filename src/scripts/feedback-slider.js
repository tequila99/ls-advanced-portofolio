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
      swiperObject: null,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,        
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
    // disableLeft() {
    //   return !!this.swiperObject ? this.swiperObject.swiper.isBeginning : false
    // },
    // disableRight() {
    //   return !!this.swiperObject ? this.swiperObject.swiper.isEnd : false
    // }
  },
	methods: {
    // getImagePath(path) {
    //   return require(`images/${path}`)
    // },
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
    axios.get(`/reviews/${USER}`)
      .then(({data}) => {
        this.items = data 
        this.handleImages()
      })
      .catch(error => console.log(error))
  },  
  mounted() {
    this.swiperObject = this.$refs.swiper
  }
});
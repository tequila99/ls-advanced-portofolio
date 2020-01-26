import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vue from "vue";
import vMediaQuery from "v-media-query"
import throttle from 'lodash.throttle'

Vue.use(vMediaQuery)

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
      },
      items: [
        {realpath: '', path: 'avatars/dm.png', username: 'Ковальчук Дмитрий', position: 'Основатель Loftschool(1)', text: '1. Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!', href:'#'},
        {realpath: '', path: 'avatars/vl.png', username: 'Владимир Сабанцев', position: 'Преподаватель(2)', text: '2. Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах',href:'#'},
        {realpath: '', path: 'avatars/dm.png', username: 'Ковальчук Дмитрий', position: 'Основатель Loftschool(3)', text: '3. Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!', href:'#'},
        {realpath: '', path: 'avatars/vl.png', username: 'Владимир Сабанцев', position: 'Преподаватель(4)', text: '4. Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах',href:'#'},
        {realpath: '', path: 'avatars/dm.png', username: 'Ковальчук Дмитрий', position: 'Основатель Loftschool(5)', text: '5. Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!', href:'#'},
        {realpath: '', path: 'avatars/vl.png', username: 'Владимир Сабанцев', position: 'Преподаватель(6)', text: '6. Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах',href:'#'}
      ]      
      
		};
  },
  // watch: {
  //   'this.$mq.resize': function() {
  //     console.log(1111111)
  //     this.screenResize()
  //   }
  // },
	methods: {
    getImagePath(path) {
      return require(`images/${path}`)
    },
    handleImages() {
      this.items.forEach(el => {
        el.realpath = require(`images/${el.path}`)
      })
    },
    screenResize() {
      if (this.$mq.below(480)) {
        Vue.set(this.swiperOption,'slidesPerView',1)
      } else {
        Vue.set(this.swiperOption,'slidesPerView',2)
      }
    },    
    next() {
      this.$refs.swiper.swiper.slideNext()
    },
    prev() {
      this.$refs.swiper.swiper.slidePrev()
    }
	},
	created() {
    this.handleImages()
    this.screenResize()
  },
  mounted() {
    // this.screenResize()
    window.addEventListener('resize', throttle(() => {
      this.screenResize()
    } , 150))
  },
  destroyed() {
    window.addEventListener('resize', throttle(() => {
      this.screenResize()
    } , 150))
  }
  
});
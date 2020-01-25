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
        loop: true,    
      },
      items: [
        {realpath: '', path: 'avatars/dm.png', username: 'Ковальчук Дмитрий', position: 'Основатель Loftschool', text: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!', href:'#'},
        {realpath: '', path: 'avatars/vl.png', username: 'Владимир Сабанцев', position: 'Преподаватель', text: 'Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах',href:'#'},
        {realpath: '', path: 'avatars/dm.png', username: 'Ковальчук Дмитрий', position: 'Основатель Loftschool', text: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!', href:'#'},
        {realpath: '', path: 'avatars/vl.png', username: 'Владимир Сабанцев', position: 'Преподаватель', text: 'Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах',href:'#'},
        {realpath: '', path: 'avatars/dm.png', username: 'Ковальчук Дмитрий', position: 'Основатель Loftschool', text: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!', href:'#'},
        {realpath: '', path: 'avatars/vl.png', username: 'Владимир Сабанцев', position: 'Преподаватель', text: 'Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах',href:'#'}
      ]      
      
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
      console.log(this.$refs.swiper)
      this.$refs.swiper.swiper.slideNext()
    },
    prev() {
      this.$refs.swiper.swiper.slidePrev()
    }
	},
	created() {
    this.handleImages()
	}
});
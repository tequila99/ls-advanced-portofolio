<template lang="pug">
  .div
    header-admin(:avatar='avatar' :user-name='userName')
    toolbar-admin
    .admin-container
      skills-card
      preview-card(:image='previews[0].realpath' :title='previews[0].title' :text='previews[0].text' :tags='previews[0].tags' :link='previews[0].href')
      h1 Welcome to the Vue App
      add-preview-card
      review-card(:avatar='reviews[0].realpath' :user-name='reviews[0].username' :position='reviews[0].position' :text='reviews[0].text')
  
</template>

<script>
import Header from  './components/Header'
import Toolbar from './components/Toolbar'
import SkillsCard from './components/SkillsCard'
import PreviewCard from './components/PreviewCard'
import AddPreviewCard from './components/AddPreviewCard'
import ReviewCard from './components/ReviewCard'

// const Header = require('./components/Header')
const avatarPath = 'content/user.jpg'
export default {
  name: 'AdminApp',
  data() {
    return {
      avatar: '',
      userName: 'Иван Милованов',
      previews: [],
      reviews: []
    }
  },
  methods: {
    handlePreviews() {
      this.previews.forEach(el => {
        el.realpath = require(`images/${el.path}`)
      })      
    },
    handleReviews() {
      this.reviews.forEach(el => {
        el.realpath = require(`images/${el.path}`)
      })      
    },    
  },
  created() {
    this.avatar = require(`images/${avatarPath}`)
    this.previews = require('../json/preview.json')
    this.reviews = require('../json/feedback-slider.json')
    this.handlePreviews()
    this.handleReviews()
  },
  components: {
    'header-admin': Header,
    'toolbar-admin': Toolbar,
    'skills-card': SkillsCard,
    'preview-card': PreviewCard,
    'add-preview-card': AddPreviewCard,
    'review-card': ReviewCard
  }
}
</script>

<style lang='pcss'>
body {
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f7f7f7;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
  position: relative;
}

button {
  border: 0;
  cursor: pointer;
}

a {
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

h1,h2,h3,h4,h5 {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.admin-container {
  margin: 0 auto;
  max-width: 1080px;
  width: 95%;
  height: 100%;
  /* @include phones {
    width: 85%;
  } */
}

</style>
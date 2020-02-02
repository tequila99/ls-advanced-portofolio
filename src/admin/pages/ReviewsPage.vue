<template lang='pug'>
  .reviews-page
    .reviews-page__header
      h1 Блок "Отзывы"
    .reviews-page__content
      .reviews-page__form(v-if='isEdit')
        form-review
      .reviews-page__reviews
        add-review-card
        review-card(v-for='(item,index) in reviews' :key='index' :avatar='item.realpath' :title='item.title' :text='item.text' :link='item.href' :tags='item.tags')

</template>

<script>
import FormReview from '../components/FormReview'
import ReviewCard from '../components/ReviewCard'
import AddReviewCard from '../components/AddReviewCard'

export default {
  name: 'ReviewsPage',
  data() {
    return {
      reviews: [],
      isEdit: true
    }
  },
  methods: {
    handleReviews() {
      this.reviews.forEach(el => {
        el.realpath = require(`images/${el.path}`)
      })        
    }
  },
  created() {
    this.reviews = require('../../json/feedback-slider.json')
    this.handleReviews()    
  },
  components: {
    'form-review': FormReview,
    'review-card': ReviewCard,
    'add-review-card': AddReviewCard
  }  
}
</script>

<style lang='pcss'>
 .reviews-page {
    background: #f7f9fe;
    display: grid;
    grid-template-rows: 136px 1fr;
    &__header {
      display: flex;
      align-items: center;
      h1 {
        color: #414c63;
        font-size: 21px;
      }
    }
    &__content {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-row-gap: 32px;
    }
    &__reviews {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-flow: row;
      grid-gap: 30px;
      padding-bottom: 40px;
    }    
  }
</style>

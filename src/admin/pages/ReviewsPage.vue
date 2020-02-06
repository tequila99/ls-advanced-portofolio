<template lang='pug'>
  .reviews-page
    .reviews-page__content
      .reviews-page__header
        h1 Блок "Отзывы"
      .reviews-page__form(v-if='isEdit')
        form-review
      .reviews-page__reviews
        add-review-card(class='reviews-page__review-card')
        review-card(class='reviews-page__review-card' v-for='(item,index) in reviews' :key='index' :avatar='item.realpath' :title='item.title' :text='item.text' :link='item.href' :tags='item.tags')

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
@import url('../../styles/mixins.pcss');
 .reviews-page {
    background: #f7f9fe;
    /* display: grid;
    grid-template-rows: 136px 1fr; */
    &__header {
      display: flex;
      align-items: center;
      h1 {
        color: #414c63;
        font-size: 21px;
      }
      @include phones {
        padding: 0 5%;
      }
    }
    &__content {
      display: grid;
      /* grid-template-rows: auto 1fr; */
      grid-template-rows: 136px auto 1fr;
      /* grid-row-gap: 32px; */
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      @include phones {
        grid-template-rows: 97px auto 1fr;
      }
    }
    &__form {
      width: 100%;
      justify-self: center;
    }
    &__reviews {
      margin-top: 32px;
      display: grid;
      justify-content: center;
      align-items:center;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-flow: row;
      grid-gap: 30px;
      padding-bottom: 40px;
      @include desktop {
        grid-template-columns: 1fr 1fr;
      }
      @include tablets {
        grid-template-columns: 1fr;
      }      
      @include phones {
        grid-gap:11px;
        margin-top: 11px;
      }
    }
    &__review-card {
      justify-self: center;
    }    
  }
</style>

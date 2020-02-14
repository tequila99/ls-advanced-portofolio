<template lang='pug'>
  .reviews-page
    .reviews-page__content
      .reviews-page__header
        h1 Блок "Отзывы"
      .reviews-page__form(v-if='isEdit')
        form-review(@close='handleClose' :item='currentItem')
      .reviews-page__reviews
        add-review-card(class='reviews-page__review-card' key='0' @click.native='handleNew' v-if='!isEdit')
        review-card(class='reviews-page__review-card' @edit='handleEdit' v-for='(item,index) in reviews' :key='item.id' :avatar='item.photo' :user-name='item.author' :text='item.text' :position='item.occ' :id='item.id' )
</template>

<script>
import FormReview from '../components/FormReview'
import ReviewCard from '../components/ReviewCard'
import AddReviewCard from '../components/AddReviewCard'

export default {
  name: 'ReviewsPage',
  data() {
    return {
      currentItem: {id:0, photo: '', author: '', occ: ''},
      isEdit: false
    }
  },
  computed: {
    reviews() {
      return this.$store.getters.getReviews
    }
  },
  methods: {
    handleEdit(id) {
      this.currentItem = {...this.reviews.find(el => el.id === id)}
      this.isEdit = true
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })    
    },
    handleNew() {
      this.currentItem = {id:0, photo: '', author: '', occ: ''}
      this.isEdit = true  
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })    
    },
    handleClose() {
      this.currentItem = {id:0, photo: '', author: '', occ: ''}
      this.isEdit = false
    }
  },
  created() {
    this.$store.dispatch('getReviews')
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
      grid-template-rows: 136px auto 1fr;
      justify-content: flex-start;
      align-items: center;
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
      grid-template-columns: auto auto auto;
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

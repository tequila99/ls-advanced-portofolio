<template lang='pug'>
  .review-card
    .review-card__header
      .review-card__avatar
        avatar-mini(:avatar='avatar' :userName='userName')
      .review-card__header-title
        h3 {{ userName }}        
        span {{ position }}
    .review-card__content
      p {{ text }}
    .review-card__footer
      preview-buttons
</template>

<script>
import Avatar from './Avatar'
import PreviewButtons from './PreviewButtons'
export default {
  name: 'ReviewCard',
  props: {
    userName: {
      type: String,
      default: 'Владимир Сабантцев',      
    },
    position: {
      type: String,
      default: 'Преподаватель'
    },
    avatar: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах'
    }
  },
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {},
  components: {
    'preview-buttons': PreviewButtons,
    'avatar-mini': Avatar,
  },
}
</script>

<style lang='pcss'>
  .review-card {
    width: 340px;
    height: 380px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);   
    background-color: #ffffff; 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 110px 1fr 75px;
    /* box-sizing: content-box; */
    padding: 0 22px;
    &__header {
      border-bottom: 1px solid rgba(31,35,45,.15);
      display: grid;  
      grid-template-rows: 1fr;
      grid-template-columns:  75px 1fr;
      grid-column-gap: 20px;
      align-items: center;
    }
    &__avatar {
      margin: auto;
    }
    &__content {
      padding: 30px 8px 0 8px;
      font-size: 16px;
      color: #414c63;
      opacity: 0.7;
      font-weight: 500;
      line-height: 30px;
      overflow: hidden;
    }
    &__header-title {
      display:flex;
      flex-direction: column;
      h3 {
        color: #414c63;
        font-size: 18px;
        font-weight: 700;
      }
      span {
        color: #414c63;
        opacity: 0.5;
        font-size: 16px;
        margin-top: 5px;
      }
    }
    &__footer {
      padding: 0 8px;
      display: flex;
      align-items: center;
    }
  }

</style>
<template lang='pug'>
  .preview-card
    .preview-card__image
      img(:src='image' :alt='title')
      ul.preview-card__list 
        li.preview-card__tag(v-for='(tag,index) in tags' :key='index')
          span {{ tag }}
    .preview-card__content
      h3 {{ title }}
      p  {{ text }}
      a(:href='link' :alt='title') {{ link }}
    .preview-card__footer      
      preview-buttons
</template>

<script>
import PreviewButtons from './PreviewButtons'
export default {
  name: 'PreviewCard',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Сайт школы образования'
    },
    text: {
      type: String,
      default: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!'
    },
    link: {
      type: String,
      default: 'https:/google.com'
    },
    tags: {
      type: Array,
      default: () => ['HTML', 'CSS', 'JavaScript']
    }
  },
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {

  },
  components: {
    'preview-buttons': PreviewButtons
  },
}
</script>

<style lang='pcss'>
  .preview-card {
    width: 340px;
    height: 556px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 190px 1fr 75px;
    &__image {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;

      }
    }
    &__list {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 5% 3% 5%;
    }
    &__tag {
      margin-top: 8px;
      margin-right: 8px;
            
      span {
        font-size: 13px;
        color: #8a9097;
        font-weight:500;
        padding: 10px 20px;
        border-radius: 20px;
        background: #ffffff;  
      }

    }
    &__content {
      padding: 40px 30px 0 30px;
      h3 {
        font-weight: 700;
        font-size: 18px;
        color: #414c63;
      }
      p {
        color: #414c63;
        opacity: 0.7;
        font-size: 16px;
        line-height: 30px;
      }
      a {
        color: #383bcf;
        font-weight: 600;
        text-decoration: none;
        font-size: 16px;
      }
    }
    &__footer {
      padding: 0 30px;
      /* display: flex;
      align-items: center; */
    }
  }

</style>
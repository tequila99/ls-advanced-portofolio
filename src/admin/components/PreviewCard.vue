<template lang='pug'>
  .preview-card
    .preview-card__image
      img(:src='imageFull' :alt='title')
      ul.preview-card__list 
        li.preview-card__tag(v-for='(tag,index) in tagsArray' :key='index')
          span {{ tag }}
    .preview-card__content
      h3 {{ title }}
      p  {{ text }}
      a(:href='link' :alt='title') {{ link }}
    .preview-card__footer      
      preview-buttons(@edit='$emit("edit", id)' @remove='handleRemove')
</template>

<script>

import PreviewButtons from './PreviewButtons'
import { getFullPath } from '../helpers'
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
      type: String,
      default: ''
    },
    id: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: () => ({}),
  computed: {
    tagsArray() {
      return this.tags.split(',').map(el => el.trim()).filter(el => !!el)
    },
    imageFull() {
      return !!this.image ? getFullPath(this.image) : ''
    }
  },
  methods: {
    handleRemove() {
      this.$store.dispatch('delWorks', this.id)
    },
  },
  mounted() {

  },
  components: {
    'preview-buttons': PreviewButtons
  },
}
</script>

<style lang='pcss'>
@import url('../../styles/mixins.pcss');
  .preview-card {
    width: 340px;
    height: 556px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 190px 1fr 75px;
    @include phones {
      width: 100%;
      max-width: 320px;
      height: 100%;
    }
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
      box-sizing: border-box;
      padding: 7% 5% 7%  !important;
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
      display: grid;
      grid-template-rows: 50px 1fr 50px;
      h3 {
        font-weight: 700;
        font-size: 18px;
        color: #414c63;
        align-self: center;
      }
      p {
        color: #414c63;
        opacity: 0.7;
        font-size: 16px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      a {
        color: #383bcf;
        font-weight: 600;
        text-decoration: none;
        font-size: 16px;
        align-self: center;
      }
    }
    &__footer {
      padding: 0 30px;
      /* display: flex;
      align-items: center; */
    }
  }

</style>
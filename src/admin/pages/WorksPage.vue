<template lang='pug'>
  .works-page
    .works-page__content     
      .works-page__header
        h1 Блок "Работы"
      .works-page__form(v-if='isEdit')
        form-preview
      .works-page__previews
        add-preview-card(class='works-page__preview-card')
        preview-card(class='works-page__preview-card' v-for='(item,index) in works' :key='index' :image='item.realpath' :title='item.title' :text='item.text' :link='item.href' :tags='item.tags')
</template>

<script>
import FormPreview from '../components/FormPreview'
import PreviewCard from '../components/PreviewCard'
import AddPreviewCard from '../components/AddPreviewCard'

export default {
  name: 'WorksPage',
  data() {
    return {
      works: [],
      isEdit: true
    }
  },
  methods: {
    handleWorks() {
      this.works.forEach(el => {
        el.realpath = require(`images/${el.path}`)
      })      
    },
  },
  created() {
     this.works = require('../../json/preview.json')
     this.handleWorks()
  },
  components: {
    'form-preview': FormPreview,
    'preview-card': PreviewCard,
    'add-preview-card': AddPreviewCard
  }
}
</script>

<style lang='pcss'>
  @import url('../../styles/mixins.pcss');
 .works-page {
    background: #f7f9fe;
    /* display: grid;
    grid-template-rows: 136px 1fr;
    @include phones {
      grid-template-rows: 97px 1fr;
    } */
    &__header {
      /* background: #f7f9fe; */
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
      /* grid-row-gap: 0 32px; */
      justify-content: center;
      align-items: center;
      @include phones {
        grid-template-rows: 97px auto 1fr;
      }
    }
    &__form {
      width: 100%;
    }
    &__previews {
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
    }
    &__preview-card {
      justify-self: center;
    }
  }
</style>

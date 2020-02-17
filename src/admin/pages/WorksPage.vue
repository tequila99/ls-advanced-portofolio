<template lang='pug'>
  .works-page
    .works-page__content     
      .works-page__header
        h1 Блок "Работы"
      .works-page__form(v-if='isEdit')
        form-preview(@close='isEdit=false' :item='currentItem')
      .works-page__previews
        add-preview-card(class='works-page__preview-card' key='0' @click.native='handleNew' v-if='!isEdit')
        preview-card(class='works-page__preview-card' @edit='handleEdit' v-for='(item,index) in works' :key='item.id' :id='item.id' :image='item.photo' :title='item.title' :text='item.description' :link='item.link' :tags='item.techs')
</template>

<script>
import FormPreview from '../components/FormPreview'
import PreviewCard from '../components/PreviewCard'
import AddPreviewCard from '../components/AddPreviewCard'

export default {
  name: 'WorksPage',
  data() {
    return {
      isEdit: false,
      currentItem: {id:0,title:'',techs:'',photo:'',link: '',description: ''}
    }
  },
  computed: {
    works() {
      return this.$store.getters.getWorks
    }
  },
  methods: {
    handleEdit(id) {
      if (!this.isEdit) {
        this.currentItem = {...this.works.find(el => el.id === id)}
        this.isEdit = true
        window.scrollTo({
            top: 200,
            behavior: 'smooth'
          })
      }
    },
    handleNew() {
      if (!this.isEdit) {
        this.currentItem = {id:0,title:'',techs:'',photo:'',link: '',description: ''}
        this.isEdit = true      
        window.scrollTo({
            top: 200,
            behavior: 'smooth'
          })       
      }
    },
    handleClose() {
      this.currentItem = {id:0,title:'',techs:'',photo:'',link: '',description: ''}
      this.isEdit = false
    }
  },
  created() {
    this.$store.dispatch('getWorks')
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
      justify-content: flex-start;
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

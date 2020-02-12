<template lang='pug'>
  div.preview-from__wrapper
    modal-warning(v-model='showError')
    .preview-form
      .preview-form__header
        h3 Редактирование работы
      .preview-form__body
        .preview-form__upload
          upload-area(
            @input='handleInputImage' 
            @clear='unloadPreview = null; photoPreview=""' 
            :image='photoPreview'
          )
        .preview-form__content
          input-field(
            class='preview-form__input preview-form__input--title' 
            v-model='titlePreview' 
            type='text' 
            name='title' 
            placeholder='Дизайн сайта для авто салона Porsche' 
            label='Название' 
            required
          ) 
          input-field(
            class='preview-form__input preview-form__input--link' 
            v-model='linkPreview'
            type='url' 
            name='link'
            placeholder='https://www.porsche-pulkovo.ru'
            label='Ссылка' 
            required
          ) 
          text-field(
            class='preview-form__input preview-form__input--text' 
            v-model='textPreview' 
            name='text' 
            :placeholder='placeholder' 
            label='Описание' 
            required
          ) 
          input-field(
            class='preview-form__input preview-form__input--tags' 
            v-model='tagsPreview' 
            type='text' 
            name='tags' 
            placeholder='Jquery, Vue.js, HTML5' 
            label='Добавление тэга'
          ) 
          ul.preview-form__tags
            li.preview-form__tag(v-for='(tag,index) in tags' :key='index')
              span {{ tag }}
                font-awesome-icon(icon='times' class='preview-form__tag-icon')
      .preview-form__footer
        bottom-buttons(@save='saveForm' @cancel='$emit("close")')
</template>

<script>
import BottomButtons from './BottomButtons'
import UploadArea from './UploadArea'
import InputField from './InputField'
import TextField from './TextField'
import ModalWarning from './ModalWarning'
export default {
  name: 'FormPreview',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      placeholder: 'Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей',
      unloadPreview: null,
      titlePreview: '',
      linkPreview: '',
      textPreview: '',      
      tagsPreview: '',
      photoPreview: '',
      showError: false
    }
  },
  computed: {
    tags() {
      return this.tagsPreview.split(',').map(el => el.trim()).filter(el => !!el )
    }
  },
  methods: {
    saveForm() {
      if (!this.titlePreview || !this.linkPreview || !this.textPreview) {
        this.showError = true
      } else {
        if (!!this.item.id) {
          this.$store.dispatch('editWorks', {
            title: this.titlePreview,
            techs: this.tagsPreview,
            photo: this.unloadPreview,
            link:  this.linkPreview,
            description: this.textPreview,
            id: this.item.id
          })
          .then(() => this.$emit('close'))
          .catch()
        } else {
          this.$store.dispatch('addWorks', {
            title: this.titlePreview,
            techs: this.tagsPreview,
            photo: this.unloadPreview,
            link:  this.linkPreview,
            description: this.textPreview
          })
          .then(() => this.$emit('close'))
          .catch()
        }

      }
    },
    handleInputImage(e) {
      this.unloadPreview = e
    },
  },
  created() {
    this.photoPreview  = this.item.photo || null
    this.titlePreview  = this.item.title || ''
    this.linkPreview   = this.item.link || ''
    this.textPreview   = this.item.description || ''
    this.tagsPreview   = this.item.techs || ''
  },
  components: {
    BottomButtons,UploadArea,InputField,TextField,ModalWarning
  }

}
</script>

<style lang='pcss'>
  @import url('../../styles/mixins.pcss');
  .preview-form {
    &__wrapper {
      width: 100%;
      justify-content: center;
      display: flex;      
    }
    max-width: 1080px;
    min-height: 775px;
    @include phones {
      width: 100%;
      max-width: 320px;
      height: 100%;
    }
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background: #fff;
    padding: 0 22px; 
    @include phones {
      padding: 0;
    }   
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 74px 1fr 100px;
    /* box-sizing: content-box; */
    &__header {
      display: flex;
      border-bottom: 1px solid rgba(31,35,45,.15);
      align-items: center;
      height: 100%;
      @include phones {
        padding: 0 6%;
      }
      h3 {
        color: #414c63;
        font-size: 18px;
        font-weight: bold;
        @include phones {
          font-size: 16px;
        }
      }
    }
    &__body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      @include desktop {
        grid-template-columns: 1fr;
        grid-template-rows: .5fr 1f;
      }
      grid-column-gap: 32px;
      padding-top: 48px;
    }
    &__upload {
      display: flex;
      justify-content: center;
      @include tablets {
        padding: 0 5%;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;
      @include desktop {
        margin-top: 54px;
      }
    }
    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @include desktop {
        justify-content: center;
      }
    }
    &__tags {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: -10px;
      @include phones {
        width: 95%
      }
    }
    &__input {
      margin-bottom: 30px;
      &--text {
        height: 100%;
        max-height: 200px;
        @include phones {
          height: 100%;
          min-height: 215px;
        }
      }
      &--tags {
        margin-bottom: 20px;
      }
    }
    
    &__tag {
      margin-right: 10px;
      padding: 9px 13px 9px 19px;
      background: #f4f4f4;
      border-radius: 23px;
      margin-bottom: 10px;
      @include phones {
        padding: 7px 10px 7px 15px;
      }
      &:last-child {
        margin-right: 0px;
      }
      span {
        color: #283340;
        font-size: 13px;
        opacity: .7;
        font-weight: 600;
      }
    }
    &__tag-icon {
      color: #414c63;
      margin-left: 10px;
    }
  }
</style>
<template lang='pug'>
  .preview-form
    .preview-form__header
      h3 Редактирование работы
    .preview-form__body
      .preview-form__upload
        upload-area
      .preview-form__content
        input-field(class='preview-form__input preview-form__input--title' type='text' name='title' placeholder='Дизайн сайта для авто салона Porsche' label='Название') 
        input-field(class='preview-form__input preview-form__input--link' type='text' name='link' placeholder='https://www.porsche-pulkovo.ru' label='Ссылка') 
        text-field( class='preview-form__input preview-form__input--text' name='text' :placeholder='text' label='Описание') 
        input-field(class='preview-form__input preview-form__input--tags' type='text' name='tags' placeholder='Jquery, Vue.js, HTML5' label='Добавление тэга') 
        ul.preview-form__tags
          li.preview-form__tag(v-for='(tag,index) in tags' :key='index')
            span {{ tag }}
              font-awesome-icon(icon='times' class='preview-form__tag-icon')
    .preview-form__footer
      bottom-buttons
</template>

<script>
import BottomButtons from './BottomButtons'
import UploadArea from './UploadArea'
import InputField from './InputField'
import TextField from './TextField'
export default {
  name: 'FromPreview',
  props: {

  },
  data() {
    return {
      text: 'Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей',
      tags: ['Jquery', 'Vue.js', 'HTML5']
    }

  },
  components: {
    'bottom-buttons': BottomButtons,
    'upload-area': UploadArea,
    'input-field': InputField,
    'text-field': TextField

  }

}
</script>

<style lang='pcss'>
  .preview-form {
    width: 1080px;
    height: 775px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background: #fff;
    padding: 0 22px;    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 74px 1fr 100px;
    /* box-sizing: content-box; */
    &__header {
      display: flex;
      border-bottom: 1px solid rgba(31,35,45,.15);
      align-items: center;
      height: 100%;
      h3 {
        color: #414c63;
        font-size: 18px;
        font-weight: 700;
      }
    }
    &__body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 32px;
      padding-top: 48px;
    }
    &__content {
      display: flex;
      flex-direction: column;
    }
    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    &__tags {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: -10px;
    }
    &__input {
      margin-bottom: 30px;
      &--text {
        height: 200px;
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
<template lang='pug'>
  div 
    modal-warning(v-model='showError')
    .review-form
      .review-form__header
        h3 Новый отзыв
      .review-form__body
        .review-form__upload
          upload-avatar
        .review-form__content
          input-field(class='review-form__input review-form__input--username' v-model='username' type='text' name='username' placeholder='Ковальчук Дмитрий' label='Имя автора' required) 
          input-field(class='review-form__input review-form__input--position' v-model='position' type='text' name='position' placeholder='Основатель LoftSchool' label='Титул автора' required) 
          text-field( class='review-form__input review-form__input--text' v-model='text' name='text' :placeholder='placeholder' label='Отзыв' required) 
      .review-form__footer
        bottom-buttons(@save='saveFrom')
</template>

<script>
import BottomButtons from './BottomButtons'
import InputField from './InputField'
import TextField from './TextField'
import UploadAvatar from './UploadAvatar'
import ModalWarning from './ModalWarning'
export default {
  name: 'FromReview',
  props: {

  },
  data() {
    return {
      showError: false,
      username: '',
      position: '',
      text: '',
      placeholder: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!',
    }

  },
  methods: {
    saveFrom() {
      this.showError = !this.username || !this.position || !this.text
    }
  },
  components: {
    'bottom-buttons': BottomButtons,
    'input-field': InputField,
    'text-field': TextField,
    'upload-avatar': UploadAvatar,
    'modal-warning': ModalWarning
  }

}
</script>

<style lang='pcss'>
  .review-form {
    width: 1080px;
    height: 519px;
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
      grid-template-columns: 205px 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 32px;
      padding-top: 48px;
    }
    &__content {
      padding-right: 190px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 80px 1fr;
      grid-template-areas: "username position"
                           "text text";
      grid-gap: 20px 20px;

    }
    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 190px;
    }
    &__input {
      &--username {
        grid-area: username;
      }
      &--position {
        grid-area: position;
      }
      &--text {
        grid-area: text;
        height: 170px;
      }
    }
    
  }
</style>
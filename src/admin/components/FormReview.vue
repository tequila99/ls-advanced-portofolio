<template lang='pug'>
  div.review-form__wrapper 
    modal-warning(v-model='showError')
    .review-form
      .review-form__header
        h3 Новый отзыв
      .review-form__body
        .review-form__upload
          upload-avatar(
            @input='handleInputImage' 
            @clear='unloadPreview = null; photoPreview=""' 
            :avatar='photoPreview'
          )
        .review-form__content
          input-field(
            class='review-form__input review-form__input--username' 
            v-model='username'
            type='text' 
            name='username' 
            placeholder='Ковальчук Дмитрий' 
            label='Имя автора' 
            required
          ) 
          input-field(
            class='review-form__input review-form__input--position' 
            v-model='position' 
            type='text' 
            name='position' 
            placeholder='Основатель LoftSchool' 
            label='Титул автора' 
            required
          ) 
          text-field(
            class='review-form__input review-form__input--text'
            v-model='text' 
            name='text' 
            :placeholder='placeholder' 
            label='Отзыв' 
            required
          ) 
      .review-form__footer
        bottom-buttons(@save='saveFrom' @cancel='$emit("close")')
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
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      unloadPreview: null,
      photoPreview: '',
      showError: false,
      username: '',
      position: '',
      text: '',
      placeholder: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!',
    }

  },
  methods: {
    saveFrom() {
      if (!this.username || !this.position || !this.text) {
        this.showError = true
      } else {
        if (!!this.item.id) {
          this.$store.dispatch('editReviews', {
            author: this.username,
            occ: this.position,
            photo: this.unloadPreview,
            text:  this.text,
            id: this.item.id
          })
          .then(() => this.$emit('close'))
          .catch()
        } else {
          this.$store.dispatch('addReviews', {
            author: this.username,
            occ: this.position,
            photo: this.unloadPreview,
            text:  this.text,
          })
          .then(() => this.$emit('close'))
          .catch()
        }
      }
    },
    handleInputImage(e) {
      this.unloadPreview = e
    }
  },
  created() {
    this.photoPreview  = this.item.photo || null
    this.username      = this.item.author || ''
    this.position      = this.item.occ || ''
    this.text          = this.item.text || ''
  },
  components: {
    BottomButtons,InputField,TextField,UploadAvatar,ModalWarning
  }

}
</script>

<style lang='pcss'>
@import url('../../styles/mixins.pcss');
  .review-form {
    &__wrapper {
      width: 100%;
      justify-content: center;
      display: flex;
    }
    max-width: 1080px;
    width: 100%;
    padding: 0 30px;
    min-height: 519px;
    @include phones {
      width: 100%;
      max-width: 320px;
      height: 100%;
      padding: 0px;
    }
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background: #fff;
    /* padding: 0 22px;   */
     @include phones {
      padding: 0;
    }    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 74px 1fr 134px;
    @include phones {
      padding: 0;
    }
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
      @include phones {
        padding: 0 5%;
      }
    }
    &__body {
      display: grid;
      grid-template-columns: 205px 1fr;
      grid-column-gap: 32px;
      grid-template-areas: "avatar content"; 
      padding-top: 48px;
      @include tablets {
        grid-template-columns: 1fr;
        grid-template-rows: 280px 1fr;
        grid-template-areas: "avatar" "content"
      }
    }
    &__upload {
      grid-area: avatar;
      display: flex;
      justify-content: center;
    }
    &__content {
      grid-area: content;
      padding-right: 20%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 80px 1fr;
      grid-template-areas: "username position"
                           "text text";
      grid-gap: 20px 20px;
      @include desktop {
        padding-right: 0;
        grid-gap: 40px;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr;
        grid-template-areas: "username" "position" "text"
      }

    }
    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 190px;
      @include desktop {
        padding-right: 0;
      }
      @include tablets {
        justify-content: center;
      }
    }
    &__input {
      &--username {
        grid-area: username;
        @include desktop {
          width: 75%;
        }
        @include tablets {
          width: 100%
        }
        @include phones {
          width: 90%;
          justify-self: center;
        }        
      }
      &--position {
        grid-area: position;
        @include desktop {
          width: 75%;
        }
        @include tablets {
          width: 100%;
        }        
        @include phones {
          width: 90%;
          justify-self: center;
        }
      }
      &--text {
        grid-area: text;
        min-height: 170px;
        height: 100%;
        @include desktop {
          min-height: 200px;
        }
        @include phones {
          width: 90%;
          justify-self: center;
          min-height: 215px;
        }
      }
    }
    
  }
</style>
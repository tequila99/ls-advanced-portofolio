<template lang='pug'>
  .login-page(@click.stop='$emit("input",false)' :style='{display: displayStyle}')
    .login-page__container
      h3 Авторизация
      input-field(class='login-page__user'     name='user',     placeholder='Имя пользователя', label='Логин' v-model='user.name')
      input-field(class='login-page__password' type='password' name='password', placeholder='****',       label='Пароль'  v-model='user.password')
      submit-button(class='login-page__submit', label='Отправить' @click='handleSend')
      font-awesome-icon(class='login-page__icon'  icon='times' color='#414c63' @click.stop='$emit("input",false)')
</template>

<script>
import InputField from '../components/InputField'
import SubmitButton from '../components/SubmitButton'
export default {
  name: 'LoginPage',
  props: {
    value: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      user: {
        name: 'ivan12071970',
        password: ''
      }
    }
  },
  watch: {
    value: function(val) {
      if (!!val) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
    }
  },
  computed: {
    displayStyle() {
      return !!this.value ? 'flex' : 'none'
    },
  },
  methods: {
    handleSend() {
      if (!!this.user.name&&!!this.user.password) {
        this.$store.dispatch('authLogin',this.user)
      }
    },
  },
  components: {
    'input-field': InputField,
    'submit-button': SubmitButton
  }
}
</script>

<style lang='pcss'>
  .login-page {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(45,60,79,.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    &__container {
      max-width: 563px;
      width: 100%;
      height: 517px;
      position: relative;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      color: white;
      z-index: 2000;
      background-color: white;
      padding: 60px 70px;
      color: #414c63;
      h3 {
        font-size: 36px;
        font-weight: 600;
      }
    }
    &__icon {
      width: 28px !important;
      height: 28px !important;
      cursor: pointer;
      position: absolute;
      top: 30px;
      right: 30px
    }
    &__user {
      margin-top: 34px;
      input {
        background: svg-load('user.svg', fill='#414c63', opacity=0.3,  width=100%, height=100%);
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: 0 10px;
        padding-left: 40px;
      }
    }
    &__password {
      margin-top: 40px;
      input {
        background: svg-load('key.svg', fill='#414c63', opacity=0.3,  width=100%, height=100%);
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: 0 10px;
        padding-left: 40px;
      }      
    }
    &__submit {
      margin-top: 40px;
      cursor: pointer;
    }
  }  
</style>
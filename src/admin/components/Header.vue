<template lang='pug'>
  header.header-admin
    .admin-container
      .header-admin__avatar
        avatar-mini(:avatar='avatar' :userName='userName')
      .header-admin__container
        .header-admin__user-name {{ userName }}
        .header-admin__title {{ titleHeader }}
        .header-admin__exit-link
          a(class='exit-link' @click='handleExit') Выход
</template>

<script>
import Avatar from './Avatar'
export default {
  name: 'Header',
  props: {
    avatar: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    titleHeader: {
      type: String,
      default: 'Панель администрирования'
    }
  },
  computed: {},
  methods: {
    handleExit() {
      console.log('Пытаемся выйти')
    }    
  },
  components: {
    'avatar-mini': Avatar
  },
}
</script>

<style lang='pcss'>
  @import url('../../styles/mixins.pcss');
  .header-admin {
    width: 100%;
    height: 80px;
    background: #43436c;
    color: #fff;
    display: flex;
    align-items: center;
    &__container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
       @include phones {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
    }
    .admin-container {
      display: flex;  
      align-items: center;
    }
    &__avatar {
      margin-right: 20px; 
    }
    &__user-name {
      margin-right: 28px;
      font-size: 18px;
      font-weight: 500;
      width: 25%;
      @include phones {
        width: 100%;
      }
    }
    &__title {
      opacity: .5;
      font-size: 14px;
      width: 100%;
      @include phones {
        display: none;
      }
    }
    &__exit-link {
      font-size: 16px;
      justify-self: flex-end;
      opacity: .7;
      text-decoration: underline;
    }

  }
</style>
<template lang='pug'>
  .upload-avatar
    .upload-avatar__img
      font-awesome-icon(class='upload-avatar__icon' icon='user')
    a.upload-avatar__label Добавить фото
</template>

<script>
export default {
  name: 'UploadAvatar',
  props: {
    avatar: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='pcss'>
  .upload-avatar {
    display: flex;
    flex-direction: column;
    &__img {
      width: 200px;
      height: 200px;
      background-color: #dee4ed;
      border-radius: 50%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__icon {
      width: 100px !important;
      height: 100px !important;
    }
    &__label {
      margin: 27px auto 0;
      display: flex;
      color: #383bcf;
      font-size: 16px;
      font-weight: 600;
    }
  }
</style>
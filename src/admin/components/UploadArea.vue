<template lang='pug'>
  .upload-area
    .upload-area__content
      .upload-area__label Перетащите или загрузите для загрузки изображения
      a.upload-area__button {{ 'Загрузить' | uppercase}}
</template>

<script>
export default {
  name: 'UploadArea',
  filters: {
    uppercase: function(val) {
      return val.toUpperCase()
    }
  }
}
</script>

<style lang='pcss'>
  @import url('../../styles/mixins.pcss');
  .upload-area {
    width: 494px;
    height: 276px;
    @include tablets {
      width: 100%;
    }
    @include phones {
      max-width: 280px;
      width: 100%;
      height: 157px;      
    }
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__label {
      color: #414c63;
      font-size: 16px;
      font-weight: 600;
      opacity: .5;
      padding: 0 25%;
      text-align: center;
      margin-bottom: 27px;
      @include phones {
        display: none;
      }
    }
    &__button {
      font-size: 16px;
      padding: 18px 40px;
      border-radius: 40px;
      background: #1c52de;
      color: white;
      font-weight: 700;      
    }
  }
</style>

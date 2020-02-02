<template lang='pug'>
  .bottom-buttons
    a.bottom-buttons__button.bottom-buttons__button--cancel Отменить
    a.bottom-buttons__button.bottom-buttons__button--save {{ 'Сохранить' | uppercase }}
</template>

<script>
export default {
  name: 'BottomButtons',
  props: {

  },
  filters: {
    uppercase: function(val) {
      return val.toUpperCase()
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang='pcss'>
  .bottom-buttons {
    height: 100%;
    display: flex;
    align-items: center;
    &__button {
      font-size: 16px;
      padding: 24px 42px;
      border-radius: 42px;
      &--cancel {
        color: #383bcf;
        font-weight: 600;
        margin-right: 20px;
      }
      &--save {
        background: #1c52de;
        color: white;
        font-weight: 700;
      }
    }
  }
</style>
<template lang='pug'>
  .bottom-buttons
    a.bottom-buttons__button.bottom-buttons__button--cancel(@click.prevent='$emit("cancel")') Отмена
    a.bottom-buttons__button.bottom-buttons__button--save(@click.prevent='$emit("save")') Сохранить
</template>

<script>
export default {
  name: 'BottomButtons',
  props: {

  },
  data() {
    return {

    }
  }
}
</script>

<style lang='pcss'>
  @import url('../../styles/mixins.pcss');

  .bottom-buttons {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    @include phones {
      justify-content: space-between;
    }
    &__button {
      font-size: 16px;
      @include tablets {
        font-size: 15px
      }
      @include phones {
        font-size: 14px;
      }
      padding: 24px 42px;
      border-radius: 42px;
      &--cancel {
        color: #383bcf;
        font-weight: 600;
        margin-right: 20px;
        @include phones {
          padding: 24px 12px;
          margin-rigth: 0;
        }
      }
      &--save {
        background: #1c52de;
        color: white;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
</style>
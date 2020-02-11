<template lang='pug'>
  .modal-warning(@click.stop='$emit("input",false)' :style='{display: displayStyle}')
    .modal-warning__container
      p.modal-warning__text {{ text }}
      font-awesome-icon(class='modal-warning__icon'  icon='times' color='#ddd' @click.stop='$emit("input",false)')
</template>

<script>
export default {
  name: 'ModalWarning',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Форма не заполнена'
    }
  },
  watch: {
    value(val) {
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
  }
}
</script>

<style lang='pcss'>
  .modal-warning {
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
    align-items: flex-end;
    z-index: 1000;
    &__container {
      width: 391px;
      height: 74px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      z-index: 2000;
      background-color: #b13333;
      padding: 0 30px;
    }
    &__text {
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      display: flex;
      
    }
    &__icon {
      width: 24px !important;
      height: 24px !important;
      cursor: pointer;
     
    }
  }  
</style>
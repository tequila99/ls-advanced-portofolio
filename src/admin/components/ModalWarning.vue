<template lang='pug'>
  transition(name='fade')
    .modal-warning(@click.stop='value=false' v-show='value')
      .modal-warning__container(v-if='value')
        p.modal-warning__text {{ message }}
        font-awesome-icon(class='modal-warning__icon'  icon='times' color='#ddd' @click.stop='value=false')
</template>

<script>
export default {
  name: 'ModalWarning',
  watch: {
    value(val) {
      if (!!val) {
        document.body.style.overflow = "hidden"
        setTimeout(() => this.value = false, 3000)
      } else {
        document.body.style.overflow = "auto"
      }
    }
  },
  computed: {
    value: {
      set(val) {
        if (!val) {
          this.$store.dispatch('setError',{message:''})
        }
      },
      get() {
        return this.$store.getters.getError
      }
    },
    message() {
      return this.$store.getters.getErrorMessage
    }
  }

}
</script>

<style lang='pcss'>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: hidden;
    }

    to {
      transform: translate3d(0, 0, 0);
      visibility:visible;
    }
  }

  .modal-warning {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(45,60,79,.3);
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
       animation-name: slideInUp;
       animation-duration: 1s;
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
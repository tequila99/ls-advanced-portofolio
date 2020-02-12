<template lang='pug'>
  button(type='submit' @click='$emit("click")').submit-button {{ label }}

</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    label: {
      type: String,
      required: true,
      default: 'Отправить'
    }
  },
}
</script>

<style lang='pcss'>
@import url('../../styles/mixins.pcss');
  .submit-button {
    padding: 30px 100px;
    background: #8000ef;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border-radius: 35px 0 35px 0;
    opacity: 1;
    text-transform: uppercase;
    @include phones {
      padding: 30px 75px;
    }
    &:hover,
    &:active,
    &:focus {
      opacity: 0.7;
      transition: .4s;
    }
  }
</style>
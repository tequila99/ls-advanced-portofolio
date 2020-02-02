<template lang='pug'>
  .text-field
    label.text-field__element
      span.text-field__label(v-if='!!label') {{ label }}
      textarea.text-field__input(:name='name' :placeholder='placeholder')
</template>

<script>
export default {
  name: 'InputField',
  props: {
    name: {
      type: String,
      default: 'field'
    },
    placeholder: {
      type: String,
      default: 'Введите значение'
    },
    label: {
      type: String,
      default: ''
    }
  },
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {},
  components: {},
}
</script>

<style lang='pcss'>
  .text-field {    
    color: #414c63;
    width: 100%;
    &__element {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
    &__label {
      opacity: .5;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 20px;
    }
    &__input {
      height: 100%;
      overflow: hidden;
      border: 1px solid rgba(28,28,28,.2);
      background: transparent;
      padding: 20px 20px;
      font-size: 18px;
      font-weight: 600;
      line-height: 30px;
      color: #414c63;
      resize: none;
      &::placeholder {
        font-size: 18px;
        color: #414c63;
        opacity: .5;        
        font-weight: 400;
      }
    }
  }

</style>
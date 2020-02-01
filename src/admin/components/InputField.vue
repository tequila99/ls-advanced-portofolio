<template lang='pug'>
  .input-field
    label.input-field__element
      span.input-field__label(v-id='!!label')
      input.input-field__input(:type='type' :name='name' :placeholder='placeholder')
</template>

<script>
export default {
  name: 'InputField',
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
  .input-field {    
    color: #414c63;
    width: 100%;
    &__element {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__label {
      opacity: .5;
      font-weight: 600;
      font-size: 16px;
    }
    &__input {
      border-top: 0;
      border-left: 0;
      border-right: 0;
      /* border-bottom: 1px solid black; */
      border-bottom: 2px solid #414c63;
      background: transparent;
      font-weight: bold;
      font-size: 16px;
      padding: 8px 0;
    }
  }

</style>
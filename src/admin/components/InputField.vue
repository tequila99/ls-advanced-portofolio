<template lang='pug'>
  .input-field
    label.input-field__element
      span.input-field__label(v-if='!!label') {{ label }}
      input.input-field__input(v-if='type==="number"' type='number' :name='name' :placeholder='placeholder' :value='value' :disabled='disable' :required='required' :min='min' :max='max') 
      input.input-field__input(v-else :type='type' :name='name' :placeholder='placeholder' :value='value' :disabled='disable' :required='required')
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
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type:[String,Number],
      default: ''
    },
    disable: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
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
      /* margin-bottom: 10px; */
    }
    &__input {
      border-top: 0;
      border-left: 0;
      border-right: 0;
      /* border-bottom: 1px solid black; */
      border-bottom: 1px solid #414c63;
      background: transparent;
      font-weight: bold;
      font-size: 18px;
      padding: 10px 0 10px 25px;
      &::placeholder {
        color: #414c63;
        opacity: .5;
      }
      &:disabled {
        color: #414c63;
        font-weight: 400;
        border: 0;
      }
      &:active {
        outline: 0;
        outline-offset: 0;
      }
      &:focus {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid  #383bcf;
        outline: 0;
        outline-offset: 0;
      }
      &:required:valid {
        background: svg-load('check-mark.svg', fill='green', opacity=0.3,  width=100%, height=100%);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 0 10px;        
      }
      &:required:invalid:not(:focus):not(:placeholder-shown) {
        background: svg-load('exclamation.svg', fill='red', opacity=0.5,  width=100%, height=100%);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 0 10px;
      }
    }

  }
  

</style>
<template lang='pug'>
  .text-field
    label.text-field__element
      span.text-field__label(v-if='!!label') {{ label }}
      textarea.text-field__input(:name='name' :placeholder='placeholder' :value='value' :disabled='disable' :required='required' @input='handleInput')
</template>

<script>
export default {
  name: 'InputField',
  props: {
    value: {
      type: String,
      default: ''
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
    },
    required: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    handleInput(e) {
      this.$emit('input',e.target.value)
    }
  },
  mounted() {},
  components: {},
}
</script>

<style lang='pcss'>
  @import url('../../styles/mixins.pcss');
  .text-field {    
    color: #414c63;
    width: 100%;
    @include phones {
      width: 92%;
    }
    &__element {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__label {
      opacity: .5;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 20px;
      @include phones {
        font-size: 14px;
      }
    }
    &__input {
      height: 100%;
      /* min-height: 200px; */
      overflow: hidden;
      border: 1px solid rgba(28,28,28,.2);
      background: transparent;
      padding: 20px 20px;
      font-size: 18px;
      font-weight: 600;
      line-height: 30px;
      color: #414c63;
      resize: none;
      @include phones {
        font-size: 16px;
        line-height: 30px;
      }
      &::placeholder {
        font-size: 18px;
        color: #414c63;
        opacity: .5;        
        font-weight: 400;
        @include desktop {
          font-size: 16px;
        }
        @include phones {
          font-size: 14px;
        }        
      }
      &:required:valid {
        background: svg-load('check-mark.svg', fill='green', opacity=0.3,  width=100%, height=100%);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 5px 5px;        
      }
      &:invalid:not(:focus):not(:placeholder-shown) {
        background: svg-load('exclamation.svg', fill='red', opacity=0.5,  width=100%, height=100%);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 5px 5px;
        border: 2px solid red;
      }
    }
  }

</style>
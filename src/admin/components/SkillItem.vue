<template lang='pug'>
  .skill-item
    .skill-item__name
      input-field(placeholder='' :value='label' @input='$emit($event)' :disable='!isEdit')
    .skill-item__amount
      input-field(class='skill-item__input-amount' placeholder='' :value='amount' @input='$emit($event)' :disable='!isEdit' )
    .skill-item__buttons
      edit-buttons(:icons='isEdit ? "ok close" : "edit remove"')      
</template>

<script>
import InputField from './InputField'
import EditButtons from './EditButtons'
export default {
  name: 'SkillItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 0
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'input-field': InputField,
    'edit-buttons': EditButtons
  }
}
</script>

<style lang='pcss'>
  .skill-item {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 75px 15%;
    grid-column-gap: 20px;
    align-items: center;
    &__input-amount {
      width: 80%;
    }
  }
</style>

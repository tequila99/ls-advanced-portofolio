<template lang='pug'>
  .skill-item
    .skill-item__name
      input-field(
        v-model='labelEdit' 
        @input='$emit($event)' 
        :disable='!isEdit' 
        :required='true'
      )
    .skill-item__amount
      input-field(
        class='skill-item__input-amount'
        type='number' 
        :min='0' 
        :max='100' 
        v-model='amountEdit' 
        :disable='!isEdit' 
        :required='true'
      )
    .skill-item__buttons
      edit-buttons(
        :icons='isEdit ? "ok close" : "edit remove"' 
        @ok='handleOk' 
        @edit='isEdit=true' 
        @close='handleClose' 
        @remove='handleRemove'
      )      
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
    id: {
      type: [String, Number],
      default: 0
    },
    category: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      labelEdit: '',
      amountEdit: 0,
      isEdit: false
    }
  },
  methods: {
    handleClose() {
      this.labelEdit = this.label,
      this.amountEdit = this.amount
      this.isEdit = false
    },
    handleRemove() {
      this.$store.dispatch('delSkill',{id: this.id, category: this.category})
    },
    handleOk() {
      this.$store.dispatch('editSkill',{id: this.id, category: this.category, title: this.labelEdit, percent: this.amountEdit})
      this.isEdit = false
    }
  },
  created() {
    this.labelEdit = this.label,
    this.amountEdit = this.amount
  },
  components: { InputField, EditButtons }
}
</script>

<style lang='pcss'>
@import url('../../styles/mixins.pcss');
  .skill-item {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 100px 15%;
    grid-column-gap: 20px;
    align-items: center;
    @include desktop {
      grid-template-columns: 170px 75px 60px;
      grid-column-gap: 3px;
      font-size: 16px;
    }
    @include phones {
      grid-template-columns: 1 75px 60px;
    }
    &__input-amount {
      width: 80%;
      display: flex;
      align-items: center;
      position: relative;
      &::after {
        content: '%';
        font-size: 18px;
        font-weight:700;
        position: absolute;
        right: 0;
        top: 7px;
      }
    }
  }
</style>

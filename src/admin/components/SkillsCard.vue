<template lang='pug'>
  .skills-card
    .skills-card__header
      .skills-card__header-title
        input-field(name='title', placeholder='Название новой группы' v-if='newGroup')    
        h3.skills-card__title(v-else) {{ title }}    
      .skills-card__header-buttons
        edit-buttons(:icons='newGroup ? "ok close" : "edit"')
    .skills-card__body
      ul.skills-card__list
        li.skills-card__item(v-for='(item,index) in items' :key='index' )
          skill-item(:label='item.label' :amount='item.value' :is-edit='index===randomIndex')
    .skills-card__footer
      input-field(class='skills-card__skill' name='skill', placeholder='Новый навык', :required='true')
      input-field(class='skills-card__amount' name='amount', placeholder='100' :required='true')
      fab-add-button(class='skills-card__fab' @click='handleClick')

</template>

<script>
import InputField from './InputField'
import FabAddButton from './FabAddButton'
import EditButtons from './EditButtons'
import SkillItem from './SkillItem'
export default {
  name: 'SkillsCard',
  props: {
    title: {
      type: String,
      default: 'Workflow'
    },
    items: {
      type: Array,
      default: () => []
    },
    newGroup: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
     
    }
  },
  computed: {
    randomIndex() {
      return Math.floor(Math.random()*this.items.length)
    }
  },
  methods: {
    handleClick() {
      console.log('Клик')
    }
  },
  mounted() {
    console.log(111)
  },
  components: {
    'input-field':    InputField,
    'fab-add-button': FabAddButton,
    'edit-buttons':   EditButtons,
    'skill-item':     SkillItem
  },
}
</script>

<style lang='pcss'>
.skills-card {
  width: 525px;
  height: 387px;
  padding: 0 22px;
  background-color: #ffffff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 74px 1fr 74px;
  /* box-sizing: content-box; */
  &__header {
    border-bottom: 1px solid rgba(31,35,45,.15);
    display: grid;    
    grid-template-columns: 1fr 15%;
    grid-column-gap: 35px;
    align-items: center;
  }
  &__header-title {
    width: 60%;
    display: flex;
    align-items: center;
  }
  &__title {
    font-size: 18px;
    font-weight: 600;
    color: #414c63;
  }
  &__header-buttons {
    display: flex;
    justify-content: flex-end;
  }
  &__footer {
    display: grid;
    grid-template-columns: 1fr 75px 10%;
    grid-column-gap: 35px;
    align-items: center;
    padding-bottom: 25px;
  }
  &__skill {
    width: 70%;
    margin: 0 0 0 auto;
  }
  &__amount {
      &::after {
        content: '%';
        font-size: 18px;
        font-weight:700;
        position: absolute;
        right: 0;
        top: 7px;
      }
  }
  &__list {
    padding-top: 15px;
  }
  &__fab {
    /* margin: 0 auto; */
    justify-self: center;
  }
}

</style>
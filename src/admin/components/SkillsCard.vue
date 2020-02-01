<template lang='pug'>
  .skills-card
    .skills-card__header
      .skills-card__header-title
        input-field(name='title', placeholder='Название новой группы' v-if='isNew')    
        h3.skills-card__title(v-else) {{ title }}    
      .skills-card__header-buttons
        edit-buttons(:icons='isNew ? "ok close" : "edit"')
    .skills-card__body
    .skills-card__footer
      input-field(class='skills-card__skill' name='skill', placeholder='Новый навык')
      input-field(class='skills-card__amount' name='amount', placeholder='100 %')
      fab-add-button(class='skills-card__fab' @click='handleClick')

</template>

<script>
import InputField from './InputField'
import FabAddButton from './FabAddButton'
import EditButtons from './EditButtons'
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
    }
  },
  data() {
    return {
      isNew: true
    }
  },
  computed: {},
  methods: {
    handleClick() {
      console.log('Клик')
    }
  },
  mounted() {},
  components: {
    'input-field': InputField,
    'fab-add-button': FabAddButton,
    'edit-buttons': EditButtons
  },
}
</script>

<style lang='pcss'>
.skills-card {
  margin: 50px;
  width: 525px;
  height: 387px;
  padding: 0 22px;
  background-color: #ffffff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 74px 1fr 74px;
  box-sizing: content-box;
  &__header {
    /* height: 74px; */
    border-bottom: 1px solid rgba(31,35,45,.15);
    display: grid;    
    grid-template-rows: 1fr;
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
  &__footer {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 15% 15%;
    grid-column-gap: 35px;
    align-items: center;
  }
  &__skill {
    width: 70%;
    margin: 0 0 0 auto;
  }
  &__amount {
    width: 100%
  }
  &__fab {
    /* margin: 0 auto; */
    justify-self: center;
  }
}

</style>
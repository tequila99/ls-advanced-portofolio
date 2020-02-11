<template lang='pug'>
  .skills-card
    .skills-card__header
      .skills-card__header-title
        input-field(
          name='title' 
          placeholder='Название новой группы' 
          v-if='editGroup' 
          v-model='titleEdit'
        )    
        h3.skills-card__title(v-else) {{ title }}    
      .skills-card__header-buttons
        edit-buttons(
          :icons='editGroup ? "ok close" : "edit remove"' 
          @ok='handleOk' 
          @close='handleClose' 
          @edit='handleEdit' 
          @remove='handleRemove'
        )
    .skills-card__body
      skill-item(
        :label='item.title' 
        v-for='(item,index) in skills' 
        :amount='item.percent' 
        :id='item.id' 
        :category='item.category' 
        :key='item.id'
      )
    .skills-card__footer
      .skills-card__footer-skill
        input-field(
          class='skills-card__skill' 
          name='skill' 
          placeholder='Новый навык' 
          :required='true' 
          :disable='!id' 
          v-model='skill'
        )
      .skills-card__footer-amount
        input-field(
          class='skills-card__amount' 
          type='number' 
          name='amount' 
          placeholder='100' 
          :min='0' 
          :max='100' 
          :required='true' 
          :disable='!id' 
          v-model='amount'
        )

      .skills-card__footer-fab
        fab-add-button(
          class='skills-card__fab' 
          @click.native='!!id&&handleClick()' 
          :disable='!id||!skill||!amount||(skills.lenght>5)'
        )

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
      default: ''
    },
    skills: {
      type: Array,
      default: () => []
    },
    id: {
      type: [String,Number],
      default: ''
    }
  },
  data() {
    return {
      titleEdit: this.title,
      skill: '',
      amount: '',
      editGroup: false,
      skillsCopy: []
    }
  },
  watch: {
    title(newval) {
      this.titleEdit = newval
    },
    skills(newval) {
      this.$nextTick(() => {
        this.skillsCopy =[...newval]  
      })
    }
  },
  computed: {
    randomIndex() {
      return Math.floor(Math.random()*this.skills.length)
    }
  },
  methods: {
    handleClick() {
      if (!!this.id && !!this.skill && !!this.amount) {
        this.$store.dispatch('addSkill',{id: this.id, title: this.skill, amount: this.amount})
        this.skill = ''
        this.amount =''
      }
    },
    handleOk() {
      if (!!this.id) {
        this.$store.dispatch('editCategories', {id: this.id, title: this.titleEdit})
        this.editGroup = false
      } else {
        this.$store.dispatch('addCategories', this.titleEdit)
        this.$emit('close')
      }
    },
    handleEdit() {
      this.editGroup = true
    },
    handleClose() {
      if (!!this.id) {
        this.titleEdit = this.title
        this.editGroup = false
      } else {
        this.$emit('close')
      }      
    },
    handleRemove() {
      if (!!this.id) {
        this.$store.dispatch('delCategories', this.id)
      }
    }

  },
  mounted() {
    this.editGroup = !this.id
    this.skillsCopy = [...this.skills]
  },
}
</script>

<style lang='pcss'>
@import url('../../styles/mixins.pcss');
.skills-card {
  max-width: 525px;
  width: 100%;
  @include desktop {
    max-width: 344px;
  }
  @include phones {
    width: 100%;  
    max-width: 320px;
    /* height: 100%; */
    padding: 3%;    
  }
  height: 387px;
  padding: 0 22px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-template-rows: 74px 1fr 74px;
  /* box-sizing: content-box; */
  &__header {
    border-bottom: 1px solid rgba(31,35,45,.15);
    /* display: grid;    
    grid-template-columns: 1fr 15%;
    grid-column-gap: 35px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__header-title {
    width: 60%;
    display: flex;
    align-items: center;
    @include desktop {
      width: 100%;
    }
  }
  &__body {
    width: 100%;
    padding-top: 15px;
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
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr 75px 10%;
    grid-column-gap: 35px;
    width: 100%;
    align-items: center;
    padding-bottom: 25px;
    @include desktop {
      width: 100%;
      grid-template-columns: 190px 60px 40px;
      grid-column-gap: 5px;
      /* grid-column-gap: 35px; */
    }
    @include tablets {
      grid-template-columns: 180px 60px 40px;
    }
  }
  &__skill {
    width: 70%;
    margin: 0 0 0 auto;
    @include desktop {
      margin: 0;
      width: auto;
      padding-left: 4%;
    }
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
  &__fab {
    /* margin: 0 auto; */
    justify-self: center;
  }
}

</style>
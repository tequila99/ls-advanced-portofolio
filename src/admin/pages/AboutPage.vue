<template lang='pug'>
  .about-page
    .about-page__content
      .about-page__header
        h1 Блок "Обо мне"
        a.about-page__link(@click='visible=true')
          .about-page__button
            font-awesome-icon(class='about-page__icon' icon='plus')
          span Добавить группу
      .about-page__skills
        skills-card(class='about-page__skills-card' v-if='visible' @close='visible=false' :key='0')
        skills-card(class='about-page__skills-card' v-for='(skill,index) in skills' :key='skill.id' :title='skill.category' :id='skill.id' :user='skill.user_id' :skills='skill.skills' @close='visible=false')
</template>

<script>
import SkillsCard from '../components/SkillsCard'
export default {
  name: 'AboutPage',
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    skills() {
      return this.$store.getters.getCategories
    }
  },
  created() {
    this.$store.dispatch('getCategories')
  },
  components: {
    'skills-card': SkillsCard
  }
}
</script>

<style lang='pcss'>
@import url('../../styles/mixins.pcss');
  .about-page {
    background: #f7f9fe;
    display: grid;
    grid-template-rows: 1fr;
    &__header {
      display: flex;
      align-items: center;
      h1 {
        color: #414c63;
        font-size: 21px;
      }
      @include tablets {
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        justify-content: center;
      }
    }
    &__content {
      display: grid;
      grid-template-rows: 136px 1fr;
      /* margin: 0 auto; */
      /* justify-content: center; */
      align-items: center;
    }
    &__link {
      display: flex;
      margin-left: 65px;
      align-items: center;
      @include tablets {
        margin-left: 0px;
        margin-top: 36px;
      }
      span {
        color: #383bcf;
        text-decoration: none;
        font-weight: 600;
      }
      cursor: pointer;  
    }
    &__button {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background:  #383bcf;
      margin-right: 20px;
      cursor: pointer;
    }
    &__icon {
      color: white;
      width: 10px !important;
      height: 10px !important;
    }
    &__skills {
      display: grid;  
      grid-template-columns: auto 1fr;
      grid-auto-flow: row;
      grid-gap: 30px;
      padding-bottom: 40px; 
      /* justify-self: center;      */
      @include tablets {
        grid-template-columns: 1fr;
        grid-gap: 10px;
      }
    }
    &__skills-card {
      /* justify-self: center; */
    }
  }
</style>

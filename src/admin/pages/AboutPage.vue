<template lang='pug'>
  .about-page
    .about-page__header
      h1 Блок "Обо мне"
      a.about-page__link
        .about-page__button
          font-awesome-icon(class='about-page__icon' icon='plus')
        span Добавить группу
    .about-page__content
      .about-page__skills
        skills-card(new-group)
        skills-card(v-for='(skill,index) in skills' :key='index+1' :title='skill.title' :items='skill.items')
</template>

<script>
import SkillsCard from '../components/SkillsCard'
export default {
  name: 'AboutPage',
  data() {
    return {
      isEdit: true,
      skills: []
    }
  },
  created() {
    this.skills = require('../../json/skills.json')
  },
  components: {
    'skills-card': SkillsCard
  }
}
</script>

<style lang='pcss'>
  .about-page {
    background: #f7f9fe;
    display: grid;
    grid-template-rows: 136px 1fr;
    &__header {
      display: flex;
      align-items: center;
      h1 {
        color: #414c63;
        font-size: 21px;
      }
    }
    &__link {
      display: flex;
      margin-left: 65px;
      align-items: center;
      span {
        color: #383bcf;
        text-decoration: none;
        font-weight: 600;
      }
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
    }
    &__icon {
      color: white;
      width: 10px !important;
      height: 10px !important;
    }
    &__skills {
      display: grid;  
      grid-template-columns: 1fr 1fr;
      grid-auto-flow: row;
      grid-gap: 30px;
      padding-bottom: 40px;      
    }
  }
</style>

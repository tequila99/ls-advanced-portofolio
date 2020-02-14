import axios from '../../axios'

const store = {
  errorSkills: ''
}
const getters = {

}
const actions = {
  addSkill({commit}, {id:category, title, amount:percent}) {
    axios.post('/skills',{ category, title, percent})
      .then(({data}) => {
        commit('SKILLS_ADD_SKILL',data,{ root: true })
      })
      .catch(error => {
        console.log(error)
        commit('SKILLS_SET_ERROR', error)
        commit('SET_ERROR',{message: 'Ошибка при добавлении навыка'},{root: true})
      })
  },
  delSkill({commit},{id,category}) {
    axios.delete(`/skills/${id}`)
      .then(() => {
        commit('SKILLS_DEL_SKILL',{id,category}, {root: true})
      })
      .catch(error => {
        console.log(error)
        commit('SKILLS_SET_ERROR', error)
        commit('SET_ERROR',{message: 'Ошибка при удалении навыка'},{root: true})        
      })
  },
  editSkill({commit},{id,title,percent,category}) {
    axios.post(`/skills/${id}`,{id,title,percent,category})
      .then(({data}) => {
        commit('SKILLS_EDIT_SKILL',data.skill, {root: true})
      })
      .catch(error => {
        console.log(error)
        commit('SKILLS_SET_ERROR', error)
        commit('SET_ERROR',{message: 'Ошибка при изменении навыка'},{root: true})        
      })      
  }

}
const mutations = {
  SKILLS_SET_ERROR(state,error) { 
    state.errorSkills = error
  } 
}

export default {
  store, getters, actions, mutations
}
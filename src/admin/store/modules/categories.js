import axios from 'axios'

const state = { 
  categories: []
}

const getters = {
  getCategories: state => state.categories,

}

const actions = {
  getCategories({commit,getters}) {
    let user_id = getters.getUserId
    if (!!user_id) {
      axios.get(`/categories/${user_id}`)
      .then(({data}) => {
        commit('CATEGOR_SET_LIST', data)
      })
      .catch(error => {
        console.log(error)
        commit('CATEGOR_SET_ERROR',error)
      })
    }
  },
  addCategories({commit},title) {
    axios.post('/categories',{title})
      .then(({data}) => {
        commit('CATEGOR_ADD_GROUP',data)
      })
      .catch(error => {
        console.log(error)
        commit('CATEGOR_SET_ERROR',error)
      })      
  },
  editCategories({commit},{id, title}) {
    axios.post(`/categories/${id}`,{title})
      .then(({data}) => {
        commit('CATEGOR_SET_GROUP', data)
      })
      .catch(error => {
        console.log(error)
        commit('CATEGOR_SET_ERROR', error)
      })
  },
  delCategories({commit},id) {
    axios.delete(`/categories/${id}`)
      .then(() => {
        commit('CATEGOR_DEL_GROUP', id)
      })
      .catch(error => {
        console.log(error)
        commit('CATEGOR_SET_ERROR', error)        
      })
  }
}

const mutations = {
  CATEGOR_SET_LIST(state,data) {
    state.categories = data
  },
  CATEGOR_ADD_GROUP(state,data) {
    state.categories.unshift({...data, skills: []})
  },
  CATEGOR_DEL_GROUP(state, id) {
    state.categories = state.categories.filter(el => el.id !== id)
  },
  CATEGOR_SET_GROUP(state, {category}) {
    state.categories = [...state.categories.map(el => {
      el.category = el.id === category.id ? category.category : el.category
      return el
    })
  ]
  },
  CATEGOR_SET_ERROR(state,error) {

  },
  SKILLS_ADD_SKILL(state,{category,id,percent,title}) {
    state.categories = state.categories.map(el => {
      if (el.id === category) {
        if ('skills' in el && typeof(el.skills)==='object') {
          el.skills.push({category,id,title,percent})
        } else {
          el.skills = [{category,id,title,percent}]
        }
        
      }
      return el                    
    })    
  },   
  SKILLS_EDIT_SKILL(state,{category,id,percent,title}) {
    state.categories = state.categories.map(el => {
      if (el.id === category) {
        let r1 = el.skills.map(sk => {
          if (sk.id === id) {
            sk.title = title
            sk.percent = percent
          }
          return sk
        })
        el.skills = [...r1]
      }
      return el                    
    })    
  },   
  SKILLS_DEL_SKILL(state,{category,id}) {
    state.categories = state.categories.map(el => {
      if (el.id === category) {
        let r1 = el.skills.filter(sk => sk.id !=id)
        el.skills = [...r1]
      }
      return el                    
    })
  }
}

export default {
  state, getters, actions, mutations
}
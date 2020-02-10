import axios from 'axios'
import { wrapIntoFormData } from '../../helpers'

const state = {
  works: [],
}

const getters = {
  getWorks: state => state.works
}

const actions = {
  getWorks({commit,getters}) {
    let user_id = getters.getUserId
    if (!!user_id) {
      axios.get(`/works/${user_id}`)
      .then(({data}) => {
        commit('WORKS_SET_LIST',data)
      })
      .catch(error => {
        console.log(error)
        commit('WORKS_SET_ERROR', )
      })
    }
  },
  addWorks({commit},payload) {
    let dt = wrapIntoFormData(payload)
    
    return new Promise((resolve,reject) => {
      axios.post(`/works`,dt)
      .then(({data})=>{
        commit('WORKS_ADD_WORK',data)
        resolve(data)
      })
      .catch(error => {
        console.log(error)
        commit('WORKS_SET_ERROR')
        reject(error)
      })
    })
  },
  editWorks({commit},{id,...payload}) {
    let dt = wrapIntoFormData(payload)
    return new Promise((resolve, reject) => {
      axios.post(`/works/${id}`, dt )
      .then(({data}) => {
        commit('WORKS_SET_WORK',data)
        resolve(data)
      })
      .catch(error => {
        console.log(error)
        commit('WORKS_SET_ERROR')
        reject(error)
      })
    })
  },
  delWorks({commit},id) {
    axios.delete(`works/${id}`)
      .then(() => {
        commit('WORKS_DEL_WORK', id)
      })
      .catch(error => {
        console.log(error)
        commit('WORKS_SET_ERROR')
      })
  }
}

const mutations = {
  WORKS_SET_LIST(state,data) {
    state.works = data
  },
  WORKS_ADD_WORK(state,data) {
    state.works.push(data)
    
  },
  WORKS_SET_WORK(state,{work}) {
    const index = state.works.findIndex(el => el.id === work.id )
    if (index !== -1) {
      state.works.splice(index,1,work)
    }
  },
  WORKS_DEL_WORK(state,id) {
    state.works = state.works.filter(el => el.id !== id)

  },
  WORKS_SET_ERROR(state,error) {

  },
}
export default {
  state, getters, actions, mutations
}
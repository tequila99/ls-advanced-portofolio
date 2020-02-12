import axios from '../../axios'
import { wrapIntoFormData } from '../../helpers'

const state = {
  reviews: []
}

const getters = {
  getReviews: state => state.reviews
}

const actions = {
  getReviews({commit,getters}) {
    let user_id = getters.getUserId
    if (!!user_id) {
      axios.get(`/reviews/${user_id}`)
      .then(({data}) => {
        commit('REVIEWS_SET_LIST', data)
      })
      .catch(error => {
        console.log(error)
        commit('REVIEWS_SET_ERROR', error)
      })
    }
  },
  addReviews({commit},payload) {
    let dt = wrapIntoFormData(payload)
    return new Promise((resolve,reject) => {
      axios.post(`/reviews`,dt)
        .then(({data}) => {
          commit('REVIEWS_ADD_REVIEW', data)
          resolve(data)
        })
        .catch(error => {
          console.log(error)
          commit('REVIEWS_SET_ERROR', error)
          reject(error)
        })
    })

  },
  editReviews({commit},{id, ...payload}) {
    let dt = wrapIntoFormData(payload)
    return new Promise((resolve,reject)=> {
      axios.post(`/reviews/${id}`,dt)
        .then(({data}) => {
          commit('REVIEWS_SET_REVIEW', data)
          resolve(data)
        })
        .catch(error => {
          console.log(error)
          commit('REVIEWS_SET_ERROR', error)
          reject(error)
        })
    })
  },
  delReviews({commit},id) {
    axios.delete(`/reviews/${id}`)
      .then(() => {
        commit('REVIEWS_DEL_REVIEW')
      })
      .catch(error => {
        console.log(error)
        commit('REVIEWS_SET_ERROR', error)
      })
  }

}

const mutations ={
  REVIEWS_SET_LIST(state,data) {    
    state.reviews = data
  },
  REVIEWS_ADD_REVIEW(state,data) {
    state.reviews.push(data)
  },
  REVIEWS_SET_REVIEW(state,{review}) {
    const index = state.reviews.findIndex(el => el.id === review.id )
    if (index !== -1) {
      state.reviews.splice(index,1,review)
    }
  },
  REVIEWS_DEL_REVIEW(state,id) {
    state.reviews = state.reviews.filter(el => el.id !== id)
  },
  REVIEWS_SET_ERROR(state,error) {

  }
}

export default {
  state, getters, actions, mutations
}
import axios from 'axios'
import router from '../../router'

const state = {
  token: localStorage.getItem('loftschool-user-token') || '',
  ttl: '',
  user: JSON.parse(localStorage.getItem('loftschool-user')) || {},
}

const getters = {
  isAuth: state => !!state.token,
  getToken: state => state.token,
  getUser: state => state.user,
  getUserId: state => state.user.id 
}

const actions = {
  authLogin({dispatch,commit},{name, password}) {
    axios.post('/login', { name,password })
      .then(({data}) => {        
        commit('AUTH_SET_TOKEN',data)
        dispatch('authUser')
        router.push('/about')
      })
      .catch(error => {
        console.log(error)
        commit('AUTH_LOGOUT')
        commit('AUTH_SET_ERROR',error)        
      })
  },
  authLogout({commit}) {
    axios.post('/logout')
      .then(() => {
        commit('AUTH_LOGOUT')
        router.push('login')
      })
      .catch(error => {
        console.log(error)
        commit('AUTH_SET_ERROR',error)        
      })
  },
  authUser({commit, dispatch}) {
    axios.get('/user')
      .then(({data}) => {
        commit('AUTH_SET_USER', data)
        dispatch('getCategories')
      })
      .catch(error => {
        console.log(error)
        commit('AUTH_SET_ERROR', error)
      })
  },
  setToken({commit}, token) {
    commit('AUTH_SET_TOKEN', token)
  }
}

const mutations = {
  AUTH_SET_TOKEN(state, {token, ttl}) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    state.token = token
    state.ttl = ttl
    localStorage.setItem('loftschool-user-token', token) 
  },
  AUTH_SET_USER(state, {user}) {
    state.user = user
    localStorage.setItem('loftschool-user', JSON.stringify(user)) 
  },
  AUTH_SET_ERROR(state,error) {
  },
  AUTH_LOGOUT(state) {
    state.token =''
    state.ttl = ''
    localStorage.removeItem('loftschool-user-token')
    localStorage.removeItem('loftschool-user') 
    delete axios.defaults.headers.common['Authorization'] 
  }
  
}

export default {
  state, getters, actions, mutations
}
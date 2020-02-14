import axios from '../../axios'
import router from '../../router'

const state = {
  token: localStorage.getItem('loftschool-user-token') || '',
  ttl: '',
  user: JSON.parse(localStorage.getItem('loftschool-user')) || {},
  errorAuth: ''
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
        commit('SET_ERROR',{message: 'Ошибка при авторизации пользователя'},{root: true})     
      })
  },
  authLogout({commit}) {
    axios.post('/logout')
      .then()
      .catch(error => {
        commit('AUTH_SET_ERROR',error)        
        // commit('SET_ERROR',{message: 'Ошибка при авторизации пользователя'},{root: true})     
      })
      .finally(() => {
        commit('AUTH_LOGOUT')
        router.push('login')
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
        commit('SET_ERROR',{message: 'Ошибка при получении данных пользовтеля'},{root: true})     
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
    state.errorAuth = error;
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
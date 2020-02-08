import store from '../store'

export const ROUTER_AUTH_LOGOUT = (to,from,next) => {
  store.dispatch('authLogout')
}

export const ifAuth = (to,from, next) => {
  if (store.getters.isAuth) {
    next()
    return
  } else {
    next('/login')    
  }
}

export const ifNotAuth = (to, from, next) => {
  if (!store.getters.isAuth) {
    next()
    return
  } else {
    next('/')    
  }
}
import axios from 'axios'
import store from './store'

const token = localStorage.getItem('loftschool-user-token') 

axios.defaults.baseURL = 'https://webdev-api.loftschool.com/'

if (!!token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

let isRefreshing = false;

axios.interceptors.response.use(
  response => response,
  error => {
  const originalRequest = error.config;

  if (error.response.status === 401 && !isRefreshing) {
    isRefreshing = true;

    return new Promise((resolve, reject) => {
       axios.post('/refreshToken')
        .then(({data}) => {
          console.log('токен обновился')
          const token = data.token
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          store.dispatch('setToken', token) 
          processQueue(token);
          resolve(axios(originalRequest));
        })
        .catch(err => reject(err))
        .finally(() => {
           isRefreshing = false 
        })
    })
  }

  return Promise.reject(error);
});


export default axios;
// import AboutPage from '../pages/AboutPage'

const routes = [
  {
    path: '/',
    name: 'MainEntry',
    redirect: '/about',
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../pages/AboutPage')
  },  
  {
    path: '/works',
    name: 'WorksPage',
    component: () => import('../pages/WorksPage')
  },    
  {
    path: '/reviews',
    name: 'ReviewsPage',
    component: () => import('../pages/ReviewsPage')
  },    
]

export default routes
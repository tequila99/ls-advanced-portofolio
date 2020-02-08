import { ifAuth, ifNotAuth } from './auth'

const routes = [
  {
    path: '/login',
    name: 'Authentication',
    beforeEnter: ifNotAuth,
    component: () => import('../pages/LoginPage')
  },
  {
    path: '/',
    beforeEnter: ifAuth,
    component: () => import('../layouts/MainLayout'),
    children: [
      {
        path: '/',
        name: 'MainEntry',
        redirect: 'about'
      },
      {
        path: 'about',
        name: 'AboutPage',
        beforeEnter: ifAuth,
        component: () => import('../pages/AboutPage')
      },  
      {
        path: 'works',
        name: 'WorksPage',
        beforeEnter: ifAuth,
        component: () => import('../pages/WorksPage')
      },    
      {
        path: 'reviews',
        name: 'ReviewsPage',
        beforeEnter: ifAuth,
        component: () => import('../pages/ReviewsPage')
      },    
    ]
  },

]

export default routes
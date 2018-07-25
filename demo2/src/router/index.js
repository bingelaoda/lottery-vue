import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/home/homePage'
import detailPage from '@/pages/home/detailPage'
import LoginPage from '@/pages/user/LoginPage'
import UserPage from '@/pages/user/UserPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/detailpage',
      name: 'detailPage',
      component: detailPage
    },
    {
      path: '/loginpage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/userpage',
      name: 'UserPage',
      component: UserPage
    },

  ]
})

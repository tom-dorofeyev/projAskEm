import Vue from 'vue'
import Router from 'vue-router'
import home from './views/homePage.vue'
import about from './views/about.vue'
import login from './views/login.vue'
import userDetails from './views/userDetails.vue'
import surveySubmit from './views/surveySubmit.vue'
import surveysList from './views/surveysList.vue'
import createSurvey from './views/createSurvey.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/survey/list',
      name: 'surveysList',
      component: surveysList
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/profile',
      name: 'userDetails',
      component: userDetails
    },
    {
      path: '/survey/create',
      name: 'createSurvey',
      component: createSurvey
    },
    {
      path: '/survey/:id',
      name: 'surveySubmit',
      component: surveySubmit
    },
  ]
})

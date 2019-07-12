import Vue from 'vue'
import Router from 'vue-router'
import home from './views/homePage.vue'
import about from './views/about.vue'
import login from './views/login.vue'
import surveyResults from './views/surveyResults.vue'
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
      path: '/survey/results/:id',
      name: 'surveyResults',
      component: surveyResults
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
      path: '/survey/create',
      name: 'createSurvey',
      component: createSurvey
    }
  ]
})

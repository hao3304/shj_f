import Vue from 'vue';
import Router from 'vue-router'
import login from '@/views/login'
import LessonRouter from  './lesson'
import LessionView from '@/views/lesson'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => { require(['@/views/student/home'], resolve); }
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: LessionView,
      children: LessonRouter
    },
    {
      path: '/login',
      alias: '/',
      name: 'login',
      component: login
    }
  ]
})

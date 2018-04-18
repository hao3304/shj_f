import Vue from 'vue';
import Router from 'vue-router'
import student from '@/views/student/'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/student',
      component: student,
      children: [
        {
          path: '',
          component: resolve => { require(['@/views/student/home'], resolve); }
        },
        {
          path: 'lesson',
          component: resolve => { require(['@/views/student/lesson'], resolve); }
        }
      ]
    },
    {
      path: '/login',
      alias: '/',
      name: 'login',
      component: login
    }
  ]
})

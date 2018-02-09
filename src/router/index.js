import Vue from 'vue'
import Router from 'vue-router'
import studentHome from '@/views/student/home'
import student from '@/views/student/'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/student',
      name: 'student',
      component: student,
      children: [
        {
          path: '',
          component: studentHome
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

import Vue from 'vue';
import Router from 'vue-router'
import studentHome from '@/views/student/home'
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
          component: studentHome
        }
      ]
    },
    {
      path: '/login',
      alias:'/',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      component: (resolve,reject)=>{
        setTimeout(()=>{
          resolve({
            template:`
              <div>
              {{name}}
                <Icon type="arrow-expand"></Icon>
              </div>
            `,
            data(){
              return {name:"jack"}
            }
          })

        },2000)
      }
    }
  ]
})

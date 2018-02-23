import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login' // add for every route. also add component.
import Admin from "@/components/Admin";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})
/* For Bruce Testing.
{
      path: '/',
      name: 'admin',
      component: Admin
    },
*/
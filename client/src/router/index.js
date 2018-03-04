import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login' // add for every route. also add component.
import Admin from "@/components/Admin";
import Family from "@/components/Family";
import Board from "@/components/Board";
import Teacher from "@/components/Teacher";
import Rooms from "@/components/Rooms";
import ReserveFieldTrip from "@/components/ReserveFieldTrip";
import ReserveRoom from "@/components/ReserveRoom";



import Settings from "@/components/Settings";

Vue.use(Router)

export default new Router({
  routes: [
    {
      // when reaching localhost:8080/, redirect to Login
      path: '/', 
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      //Use Children if there is any router-views within the new page which need dynamic loading. 
      children: [{
        path: 'settings',
        name: 'settings',
        component: Settings
      },
      {
        path: 'rooms',
        name: 'rooms',
        component: Rooms
      }
    ]
    }, 
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    },
    {
      path: '/family',
      name: 'family',
      component: Family,
      children: [{
        path: 'reservefieldtrip',
        name: 'reservefieldtrip',
        component: ReserveFieldTrip
      },
      {
        path: 'reserveroom',
        name: 'reserveroom',
        component: ReserveRoom
      }
    ]
    }
  ]
})

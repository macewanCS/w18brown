import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login' // add for every route. also add component.

import Accounts from "@/components/Account";
//
// account or accounts?
//

import Rooms from "@/components/Rooms";
import Reserve from "@/components/Reserve";
import Settings from "@/components/Settings";
import UnderConstruction from "@/components/UnderConstruction";
import DashboardFamily from "@/components/DashboardFamily";
import DashboardAdmin from "@/components/DashboardAdmin";
import DashboardBoard from "@/components/DashboardBoard";
import DashboardTeacher from "@/components/DashboardTeacher";
import HolidaysAdmin from "@/components/HolidaysAdmin";
import FieldTripsAdmin from "@/components/FieldTripsAdmin";
import AccountStaff from "@/components/AccountStaff";
import Board from "@/components/Board";
import Admin from "@/components/Admin";

//import NavDrawerAdmin from "@/components/NavDrawerAdmin";


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
      path: '/underconstruction',
      name: 'underconstruction',
      component: UnderConstruction
    },
    {
      path: '/board',
      name: 'board',
      component: Board,
      children: [{
        path: '/dashboardboard',
        name: 'dashboardboard',
        component: DashboardBoard
      }]      
      
      
     
    },
    {
      path: '/dashboardteacher',
      name: 'dashboardteacher',
      component: DashboardTeacher
    },
/*
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      //Use Children if there is any router-views within the new page which need dynamic loading. 
      children: [*/{
        path: '/dashboardadmin',
        name: 'dashboardadmin',
        component: DashboardAdmin,
        children: [{
          path: 'settings',
          name: 'settings',
          component: Settings
        },
        {
          path: 'rooms',
          name: 'rooms',
          component: Rooms
        },
        {
          path: "accounts",
          name: "accounts",
          component: Accounts
        },
        {
          path: "holidaysadmin",
          name: "holidaysadmin",
          component: HolidaysAdmin
        },
        {
          path: "fieldtripsadmin",
          name: "fieldtripsadmin",
          component: FieldTripsAdmin
        },
        {
          path: "accountstaff",
          name: "accountstaff",
          component: AccountStaff
        }
      ]}, 
    {
      path: '/dashboardfamily',
      name: 'dashboardfamily',
      component: DashboardFamily,
      children: [{
        path: 'reserve',
        name: 'reserve',
        component: Reserve
      }]
    }
  ]
})

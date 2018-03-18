import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login' // add for every route. also add component.
import Accounts from "@/components/Accounts";
import Rooms from "@/components/Rooms";
import Reserve from "@/components/family/Reserve";
import Settings from "@/components/Settings";
import UnderConstruction from "@/components/UnderConstruction";
import DashboardFamily from "@/components/family/DashboardFamily";
import DashboardAdmin from "@/components/admin/DashboardAdmin";
import DashboardBoard from "@/components/board/DashboardBoard";
import DashboardTeacher from "@/components/teacher/DashboardTeacher";
import HolidaysAdmin from "@/components/admin/HolidaysAdmin";
import FieldTripsAdmin from "@/components/admin/FieldTripsAdmin";
import AccountStaff from "@/components/admin/AccountStaff";
import Board from "@/components/board/Board";
import Admin from "@/components/admin/Admin";
import Teacher from "@/components/teacher/Teacher";
import Family from "@/components/family/Family";
import ScheduleTeacher from "@/components/teacher/ScheduleTeacher";
import ScheduleBoard from "@/components/board/ScheduleBoard";
import ReportsBoard from "@/components/board/ReportsBoard";

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
      },
      {  
        path: 'reportsboard',
        name: 'reportsboard',
        component: ReportsBoard
      },
      {  
        path: 'scheduleboard',
        name: 'scheduleboard',
        component: ScheduleBoard
      }]      
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher,
      children: [{
        path: '/dashboardteacher',
        name: 'dashboardteacher',
        component: DashboardTeacher
      },
      {  
        path: 'scheduleteacher',
        name: 'scheduleteacher',
        component: ScheduleTeacher
      }]      

    },

    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      //Use Children if there is any router-views within the new page which need dynamic loading. 
      children: [{
        path: 'dashboardadmin',
        name: 'dashboardadmin',
        component: DashboardAdmin
        },
        {  
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
      path: '/family',
      name: 'family',
      component: Family,
      children: [{
        path: 'reserve',
        name: 'reserve',
        component: Reserve
        },
        {
        path: '/dashboardfamily',
        name: 'dashboardfamily',
        component: DashboardFamily,
        } 
    ]
    }
  ]
})

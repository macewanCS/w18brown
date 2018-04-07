import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login' // add for every route. also add component.
import Accounts from "@/components/admin/Accounts";
import Rooms from "@/components/admin/Rooms";
import Reserve from "@/components/family/Reserve";
import Settings from "@/components/admin/Settings";
import DashboardFamily from "@/components/family/DashboardFamily";
import DashboardAdmin from "@/components/admin/DashboardAdmin";
import FieldTripsAdmin from "@/components/admin/FieldTripsAdmin";
import AccountStaff from "@/components/admin/AccountStaff";
import Board from "@/components/board/Board";
import Admin from "@/components/admin/Admin";
import Teacher from "@/components/teacher/Teacher";
import Family from "@/components/family/Family";
import ScheduleTeacher from "@/components/teacher/ScheduleTeacher";
import ScheduleBoard from "@/components/board/ScheduleBoard";
import ReportsBoard from "@/components/board/ReportsBoard";
import PasswordReset from "@/components/admin/PasswordReset";

import AuthService from "../services/AuthenticationService";

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
      path: '/board',
      name: 'board',
      component: Board,
      children: [{
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
        path: "passwordreset",
        name: "passwordreset",
        component: PasswordReset
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
      ]
    },



    {
      path: '/family',
      name: 'family',
      component: Family,
      beforeEnter: async (to, from, next) => {
        try {
        let cred = await AuthService.checkAuth();
        if (cred.data == true) {
          next();
        } else {
          next("/login");
        }
      } catch(err) {
        next("/login");
      }
      },
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

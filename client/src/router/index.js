import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login' // add for every route. also add component.
import Rooms from "@/components/Rooms";
import Reserve from "@/components/Reserve";
import Settings from "@/components/Settings";
import UnderConstruction from "@/components/UnderConstruction";
import DashboardFamily from "@/components/DashboardFamily";
import DashboardAdmin from "@/components/DashboardAdmin";
import DashboardBoard from "@/components/DashboardBoard";
import DashboardTeacher from "@/components/DashboardTeacher";

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
      path: '/dashboardboard',
      name: 'dashboardboard',
      component: DashboardBoard
    },
    {
      path: '/dashboardteacher',
      name: 'dashboardteacher',
      component: DashboardTeacher
    },

    {
      path: '/dashboardadmin',
      name: 'dashboardadmin',
      component: DashboardAdmin,
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
      path: '/dashboardfamily',
      name: 'dashboardfamily',
      component: DashboardFamily,
      children: [{
        path: 'reserve',
        name: 'reserve',
        component: Reserve
      }
    ]
    }
  ]
})

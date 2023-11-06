import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/register.vue'
import Verify from '@/views/VerifyEmail.vue'
import Acceuil from '@/views/Acceuil.vue'

//Dashboard
import MainDashbordVue from '@/components/Dashboard/MainDashbord.vue'
import UserLayout from '@/views/layout/UserLayoutView.vue'
import testView from '@/views/testView.vue'
import test2View from '@/views/test2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Acceuil
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/register',
      component: Register
    },

    {
      path: '/verify',
      component: Verify
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/user-layout',
      name: 'user-layout',
      component: UserLayout,
      children: [
        {
          path: '/maindashboard',
          name: 'maindashboard',
          component: MainDashbordVue
        },
        {
          path: '/testView',
          component: testView
        }
        ,
        {
          path: '/test2View',
          component: test2View
        }
      ]
    }
  ]
})

export default router

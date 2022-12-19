import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home'
import Welcome from '../components/Home/Welcome'
import Nav1 from '../components/Home/Nav1'
import Nav1SubNav1 from '../components/Home/Nav1/Nav1SubNav1'
import Nav1SubNav2 from '../components/Home/Nav1/Nav1SubNav2'
import Nav2 from '../components/Home/Nav2'
import Nav2SubNav1 from '../components/Home/Nav2/Nav2SubNav1'
import Nav3 from '../components/Home/Nav3'

const routes = [
  { path: "/", redirect: '/welcome' },
  { path: "/welcome", component: Welcome },
  {
    path: "/nav1/", component: Nav1,
    children: [
      { path: "/", redirect: '/subnav1' },
      { path: 'subnav1', component: Nav1SubNav1 },
      { path: 'subnav2', component: Nav1SubNav2 }
    ]
  },

  {
    path: "/nav2", component: Nav2,
    children: [
      { path: "/", redirect: '/subnav1' },
      { path: 'subnav1', component: Nav2SubNav1 },
    ]
  },
  { path: "/nav3", component: Nav3 },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
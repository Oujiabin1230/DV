import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../components/Home'
import Welcome from '../components/Home/Welcome'
import Nav1 from '../components/Home/Nav1'
import Nav2 from '../components/Home/Nav2'
import Nav3 from '../components/Home/Nav3'

const routes = [
  { path: "/", redirect: '/welcome' },
  { path: "/welcome", component: Welcome },
  { path: "/nav1", component: Nav1 },
  { path: "/nav2", component: Nav2 },
  { path: "/nav3", component: Nav3 },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
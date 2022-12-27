import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home'
import Welcome from '../components/Home/Welcome'
import Nav1 from '../components/Home/Nav1'
import Nav1SubNav1 from '../components/Home/Nav1/SubNav1'
import Nav1SubNav2 from '../components/Home/Nav1/SubNav2'
import Nav1SubNav3 from '../components/Home/Nav1/SubNav3'
import Nav1SubNav4 from '../components/Home/Nav1/SubNav4'
import Nav1SubNav5 from '../components/Home/Nav1/SubNav5'
import Nav2 from '../components/Home/Nav2'
import Nav2SubNav1 from '../components/Home/Nav2/SubNav1'
import Nav2SubNav2 from '../components/Home/Nav2/SubNav2'
import Nav2SubNav3 from '../components/Home/Nav2/SubNav3'
import Nav2SubNav4 from '../components/Home/Nav2/SubNav4'
import Nav3 from '../components/Home/Nav3'
import Nav3SubNav1 from '../components/Home/Nav3/SubNav1'
import Nav3SubNav2 from '../components/Home/Nav3/SubNav2'
import Nav4 from '../components/Home/Nav4'
import Nav4SubNav1 from '../components/Home/Nav4/SubNav1'
import Nav4SubNav2 from '../components/Home/Nav4/SubNav2'
import Nav4SubNav3 from '../components/Home/Nav4/SubNav3'
import Nav4SubNav4 from '../components/Home/Nav4/SubNav4'
import Nav5 from '../components/Home/Nav5'
import Nav5SubNav1 from '../components/Home/Nav5/SubNav1'
import Nav5SubNav2 from '../components/Home/Nav5/SubNav2'
import Nav6 from '../components/Home/Nav6'
import Nav6SubNav1 from '../components/Home/Nav6/SubNav1'
import Nav6SubNav2 from '../components/Home/Nav6/SubNav2'
import Nav7 from '../components/Home/Nav7'

const routes = [
  { path: "/", redirect: '/welcome' },
  { path: "/welcome", component: Welcome },
  {
    path: "/nav1/", component: Nav1,
    children: [
      { path: "/", redirect: '/subnav1' },
      { path: 'subnav1', component: Nav1SubNav1 },
      { path: 'subnav2', component: Nav1SubNav2 },
      { path: 'subnav3', component: Nav1SubNav3 },
      { path: 'subnav4', component: Nav1SubNav4 },
      { path: 'subnav5', component: Nav1SubNav5 },
    ]
  },

  {
    path: "/nav2", component: Nav2,
    children: [
      { path: "/", redirect: '/subnav1' },
      { path: 'subnav1', component: Nav2SubNav1 },
      { path: 'subnav2', component: Nav2SubNav2 },
      { path: 'subnav3', component: Nav2SubNav3 },
      { path: 'subnav4', component: Nav2SubNav4 },
    ]
  },
  {
    path: "/nav3", component: Nav3,
    children: [
      { path: "/", redirect: '/subnav1' },
      { path: 'subnav1', component: Nav3SubNav1 },
      { path: 'subnav2', component: Nav3SubNav2 },
    ]
  },
  {
    path: "/nav4", component: Nav4,
    children: [
      { path: "/", redirect: '/subnav1' },
      { path: 'subnav1', component: Nav4SubNav1 },
      { path: 'subnav2', component: Nav4SubNav2 },
      { path: 'subnav3', component: Nav4SubNav3 },
      { path: 'subnav4', component: Nav4SubNav4 },
    ]
  },
  {
    path: "/nav5", component: Nav5,
    children: [
      { path: "/", redirect: '/subnav1' },
      { path: 'subnav1', component: Nav5SubNav1 },
      { path: 'subnav2', component: Nav5SubNav2 },

    ]
  },
  {
    path: "/nav6", component: Nav6,
    children: [
      { path: "/", redirect: '/subnav1' },
      { path: 'subnav1', component: Nav6SubNav1 },
      { path: 'subnav2', component: Nav6SubNav2 },

    ]
  },
  {
    path: "/nav7", component: Nav7,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
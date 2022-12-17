import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'default-passive-events'

import './assets/css/global.css'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router,VueAxios,axios).mount('#app')

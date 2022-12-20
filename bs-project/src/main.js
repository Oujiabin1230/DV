import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'default-passive-events'

import './assets/css/global.css'
import 'element-plus/theme-chalk/el-message.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


const vueApp = createApp(App).use(router,VueAxios,axios).mount('#app')


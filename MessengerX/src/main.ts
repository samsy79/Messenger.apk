

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/style/main.css'
import "./StyleIMP/styleImp.css"
import './bootstrap/bootstrap.min.css'
import './bootstrap/bootstrap.min.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

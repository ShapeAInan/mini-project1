import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'


axios.defaults.baseURL = "http://127.0.0.1:8000"
const app = createApp(App)
app.use(router)
app.use(store)


app.mount('#app')
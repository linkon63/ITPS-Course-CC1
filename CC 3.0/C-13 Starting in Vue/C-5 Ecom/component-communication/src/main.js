import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import './style.css'
import router from './components/router/router'
import App from './App.vue'

const app = createApp(App)
const vfm = createVfm()

app.use(router)
app.use(vfm)

app.mount('#app')

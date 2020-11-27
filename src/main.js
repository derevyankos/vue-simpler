import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import packs from './packs/index.js'
import './index.css'

const app = createApp(App)
packs.install(app, defineAsyncComponent, {})

app.mount('#app')

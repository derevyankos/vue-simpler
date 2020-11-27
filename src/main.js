import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import packs from './packs/index.js'
import './index.css'
import svgIcons from 'dir:src.assets.svg'

const app = createApp(App)
packs.install(app, defineAsyncComponent, {
  ['$svgIcons']: svgIcons
})

app.mount('#app')

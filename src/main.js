import { createApp } from './ctx'

import App from './App.vue'
import packs from './packs/index.js'
import routes from './router.js'
import './index.css'

const app = createApp(App)
packs.install(app, {
  gmap: {
    key: 'AIzaSyCgwlJlQ8FxlG0IgJVzav4yuS9NVi7CFxU'
  }
})
app.use(routes)


app.mount('#app')

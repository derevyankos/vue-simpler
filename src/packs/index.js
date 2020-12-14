const views = {
  's-btn': () => import('./views/btn/btn.vue'),
  's-radio-fld': () => import('./views/radio/radio-fld.vue'),

  's-gmap': ()=> import('./gmap/gmap.vue')
}


const install = (app, options) => {
  const { defineAsyncComponent } = process.$ctx
  Object.entries(views).map(([name, promise]) => {
    app.component(name, defineAsyncComponent(promise))
  })

  process.$conf = options
}

export default {
  install,
  views,
}


const views = {
  's-btn': () => import('./views/btn/btn.vue'),
}

const install = (app, defineAsyncComponent, options) => {
  Object.entries(views).map(([name, promise]) => {
    app.component(name, defineAsyncComponent(promise))
  })
}

export default {
  install,
  views,
}


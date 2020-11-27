const views = {
  's-btn': () => import('./views/btn/btn.vue'),
  's-svg-sprite': () => import('./views/svg/sprite.vue'),
  's-svg-link': () => import('./views/svg/link.vue'),
}

const install = (app, defineAsyncComponent, options) => {
  Object.entries(views).map(([name, promise]) => {
    app.component(name, defineAsyncComponent(promise))
    if (options[name]) {
      app.config.globalProperties.$custom = options[name]
    }

    Object.assign(app.config.globalProperties, options)
  })
}

export default {
  install,
  views,
}


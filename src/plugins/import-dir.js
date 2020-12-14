const fs = require('fs')
const virtual = require('@rollup/plugin-virtual')

const parseDirectory = (path, options = {}) => {
  const files = fs
    .readdirSync(path)
    .map((f) => ({ name: f.split('.')[0], importPath: `/${path}/${f}` }))

  let imports;

  if (options.format === 'list') {
    imports = files.map((f) => `\t'${f.name}': '${f.importPath}'`)
  } else if (options.format === 'lazy') {
    imports = files.map((f) => `\t'${f.name}': () => import('${f.importPath}')`)
  } else {
    imports = files.map((f) => `\t'${f.name}': import('${f.importPath}')`)
  }

  return { imports }
}

module.exports = function(path, options = {}) {
  const {imports} = parseDirectory(path, options)
  const modName = 'dir:' + path.split('/').join('.')

  const moduleContent = `export default {
    ${imports.join(",\n")}}`

  const configureServer = [
    async ({ app }) => {
      app.use(async (ctx, next) => {
        if (ctx.path.startsWith(`/@modules/${modName}`)) {
          ctx.type = 'js'
          ctx.body = moduleContent
        } else {
          await next()
        }
      })
    },
  ]

  const rollupInputOptions = {
    plugins: [virtual({ [modName]: moduleContent })],
  }

  return { configureServer, rollupInputOptions }
}
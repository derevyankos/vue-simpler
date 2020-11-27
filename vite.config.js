const importDir = require('./src/plugins/import-dir.js')

export default {
  port: 9201,
  plugins: [
    importDir('src/assets/svg', {format: 'list'}),
  ],
}

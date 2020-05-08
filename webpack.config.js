const path = require('path')

module.exports = {
  entry: {
    generate: './src/generate.js',
    homepage: './src/homepage.js',
    submit: './src/submit.js',
    test: './src/test.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js/')
  },
  watchOptions: {
    ignored: ['app.js', 'node_modules', 'generators']
  }
}

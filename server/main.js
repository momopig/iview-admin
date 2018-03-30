const express = require('express')
const path = require('path')
const webpack = require('webpack')
const logger = require('../build/lib/logger')
const webpackConfig = require('../build/webpack.dev.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const project = require('../project.config')
const compress = require('compression')
const proxy = require('http-proxy-middleware')
const compiler = webpack(webpackConfig)


const app = express()
app.use(compress())

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {

  logger.info('Enabling webpack development and HMR middleware')
  app.use( webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    hot: true
  }))
  app.use(webpackHotMiddleware(compiler))
  app.use(express.static('dist'))
  // // *******************************
  // // 开发环境代理接口
  // const apiProxy = proxy({
  //   target: 'http://192.168.1.57:10000', // feature-ccp分支
  //   // target: 'http://10.10.10.58:10030',
  //   // target: 'http://192.168.1.54:10030',
  //   // target: 'http://218.17.162.184:20000',
  //   // target: 'http://192.168.1.41:3000',  // 测试环境 wuhaiying/123456
  //   // target: '  http://192.168.1.60:10034',  // 佳佳环境 
  //   // target: 'http://192.168.1.63:10030',  // 测试环境
  //   // target: 'http://10.10.10.104:10030',
  //   changeOrigin: true
  // })

  // app.use('/api', apiProxy) // api子目录下的都是用代理

  // // ********************************
  // // 开发环境mock接口
  // const router = require('./mock')
  // app.use('/', router)

  // app.use('*', function (req, res, next) {
  //   const filename = path.resolve(webpackConfig.output.publicPath, 'index.html')
  //   logger.error('filename' + filename)
  //   compiler.outputFileSystem.readFile(filename, (err, result) => {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.set('content-type', 'text/html')
  //     res.send(result)
  //     res.end()
  //   })
  // })



} else {

}

module.exports = app

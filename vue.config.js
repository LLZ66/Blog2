const path = require('path')

function resolve(dir) {
  return path.join(__dirname,dir)
}
module.exports = {
  publicPath : "./",
  chainWebpack: (config) => {
    config.resolve.alias
      .set('/',resolve('public/'))
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('src/views'))
      .set('network', resolve('src/network'))
      .set('assets', resolve('src/assets'))
      .set('plugins', resolve('src/plugins'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  },
}
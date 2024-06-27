module.exports = {
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'https://play.tarotconstellations.com/', // 目标接口的域名
        ws: true,
        changeOrigin: true, // 是否允许跨域
        pathRewrite: {
          '^/api': '' // 替换成空字符，去掉/api前缀
        }
      }
    }
  }
}
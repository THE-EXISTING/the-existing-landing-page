// const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

module.exports = withOffline({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    // config.module.rules.push({
    //   test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       limit: 100000,
    //       name: '[name].[ext]'
    //     }
    //   }
    // })

    return config
  }
})

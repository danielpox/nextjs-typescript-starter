const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return config
  }
})

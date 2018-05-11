var webpack = require('webpack');

module.exports = {
  
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/only-dev-server'
  ],

  output: {
    path: '/',
    filename: 'bundle.js'
  },

  devServer: {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './public',
    proxy: {
      "**": "http://localhost:4000"
    },
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?' + JSON.stringify({
        cacheDirectory: true,
        presets: ['es2015', 'react']
      })],
      exclude: /node_modules/,
    }]
  }
};

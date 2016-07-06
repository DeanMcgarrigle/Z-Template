var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
  entry: {
      app: ['webpack/hot/dev-server','./app/core/entry.js']
  },
    output: {
        path: __dirname,
        filename: 'build/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.html/, loader: 'raw' },
            { test: /\.js$/, loader: 'babel', query: {cacheDirectory: true, presets: ['es2015']},exclude: /node_modules/ },
            { test: /\.json/, loader: 'json' }
        ]
    },
    resolve: {

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
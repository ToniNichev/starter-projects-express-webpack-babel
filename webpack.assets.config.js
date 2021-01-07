const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack =require('webpack');

// const publicPath = `localhost:8000/dist-test/`;


module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: {
    server: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist-folder'),
    publicPath: '/',
    filename: '[name]-assets-bundle.js',
    sourceMapFilename: 'source-maps/[name]-assets-bundle.js.map',
  },  
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },                  
    ]
  },

  plugins: [  
  ]
};
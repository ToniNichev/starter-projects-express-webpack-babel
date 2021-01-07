const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack =require('webpack');

// const publicPath = `localhost:8000/dist-test/`;


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  target: "node",
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },  
  externals: [nodeExternals()],

  entry: {
    server: './src/server/ssr-server.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist-folder'),
    publicPath: '/',
    filename: '[name]-bundle.js',
    sourceMapFilename: 'source-maps/[name]-bundle.js.map',
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
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
    }),    
  ]
};
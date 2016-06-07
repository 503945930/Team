const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};


const config = {
  entry: {
    app: [path.join(__dirname, 'src/app/app.jsx')]
  },
  //output config
  output: {
    publicPath: "/",
    path: PATHS.build, //Path of output file
    //filename: 'js/app.js', //Name of output file
   filename: 'js/[name].min.js'
  },
  resolve: {
    //When require, do not have to add these extensions to file's name
    extensions: ["", ".js", ".jsx"],
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },
  //Render source-map file for final build
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      //React-hot loader and
      test: /\.jsx$/, //All .js files
      loaders: ['react-hot', 'babel-loader'], //react-hot is like browser sync and babel loads jsx and es6-7
      exclude: [nodeModulesPath],
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack'
      ]
    }]
  },
  plugins: [
    //Minify the bundle
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false,
      },
    }),

    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),

    new HtmlwebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin("css/[name].css"),
     new CopyWebpackPlugin([
       {
         from:'./src/images',
         to:'./images'
       }
     ])



    //Transfer Files
    // new TransferWebpackPlugin([
    //   {from: 'www'},
    // ], path.resolve(__dirname,"src")),
  ],
  //Eslint config
  eslint: {
    configFile: '.eslintrc', //Rules for eslint
  },
};
module.exports = config;

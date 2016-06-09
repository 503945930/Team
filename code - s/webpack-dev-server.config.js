const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
const PORT = (process.env.PORT || 3000)


const config = {
  //Entry points to the project
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src/app/app.jsx'),
    ]
  },
  //Config options on how to interpret requires imports
  resolve: {
    extensions: ["", ".js", ".jsx"],
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },
  //Server Configuration options
  devServer: {
    contentBase: 'src/', //Relative directory for base of server
    devtool: 'eval',
    hot: true, //Live-reload
    inline: true,
    port: PORT, //Port Number
    host: 'localhost', //Change to '0.0.0.0' for external facing server,
    historyApiFallback: true

  },
  devtool: 'eval',
  output: {
    publicPath: "/",
    path: PATHS.build, //Path of output file
    filename: 'js/[name].js' //Name of output file
  },
  plugins: [
    //Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),

    new HtmlwebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin("css/[name].css")

  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      //React-hot loader and
      test: /\.jsx?$/, //All .js files
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
  //eslint config options. Part of the eslint-loader package
  eslint: {
    configFile: '.eslintrc',
  },
};
console.log(`Listening at ${PORT}`)
module.exports = config;

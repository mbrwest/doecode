const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/src/main/webapp",

  entry: {
    javascript: "./app/index.jsx"
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'] 
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"],
      },
      {
	test: /\.css$/,
	use: ['style-loader','css-loader']
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
	template: 'index.html',
	inject: 'body'
	})]
}

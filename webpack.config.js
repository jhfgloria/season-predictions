var HtmlWebPackPlugin = require('html-webpack-plugin');

var htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': 'https://s3-eu-west-1.amazonaws.com/' }
  },
  plugins: [
    htmlWebPackPlugin
  ]
};
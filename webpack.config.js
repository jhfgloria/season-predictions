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
        use: { loader: "babel-loader" }
      },
      { 
        test: /(\.css$)/, 
        use: [
          { loader: 'style-loader' }, 
          { loader: 'css-loader' }, 
          { loader: 'sass-loader' }
        ] 
      }, 
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        use: { loader: 'url-loader?limit=100000' }
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
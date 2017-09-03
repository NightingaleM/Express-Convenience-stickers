var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.join(__dirname, "js/app/index.js"),
  output: {
    path: path.join(__dirname, "../public/js"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, "js/lib/jquery-3.2.1.min.js"),
      mod: path.join(__dirname, "js/mod"),
      less: path.join(__dirname, "less"),
      // imgs: path.join(__dirname,"imgs")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ]
};
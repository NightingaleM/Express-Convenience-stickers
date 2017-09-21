var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, "js/app/main.js"),    
    note: path.join(__dirname, "js/app/note.js"),
    mobile: path.join(__dirname, "js/app/mobile.js")    
},
  output: {
    path: path.join(__dirname, "../public/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
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
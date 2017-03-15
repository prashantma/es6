var webpack = require("webpack");

module.exports = {
  watch: true,
  entry: { reactapp: "./dist/reactapp.js", byebye: "./dist/byebye.js" },
  output: {
    filename: "[name].js"
  },
  plugins: [ 
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    }),
    new webpack.DefinePlugin({
      "process.env": { 
          NODE_ENV: JSON.stringify("production") 
      }
    })
  ]
}

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
     publicPath: '/', 
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "utils/index.html")
    })
  ],

  devServer: {
      historyApiFallback: true, 
    open:true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true
  },

  
  resolve: {
    extensions: ['.js', '.jsx'],
    alias:{
      '@components':path.resolve(__dirname,'src/components')
    }
  },

  mode: 'development'
};

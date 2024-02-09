const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//console.log(__dirname)
//console.log(path.join(__dirname, '/src/index.js'))

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '3000',
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
        "node_modules"
    ],
    alias: {
        '@': path.join(__dirname,'src')
    }, 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react' 
                ],
                plugins: ['@babel/plugin-syntax-jsx']              
            },    
        }
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader', 'postcss-loader']
     },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ]
};
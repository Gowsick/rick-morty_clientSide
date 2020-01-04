const path = require('path');
module.exports = {
  entry: {
    app: './src/App.js',
    main: './src/Components/Main.jsx',
    characters: './src/Components/Characters.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

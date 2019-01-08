const path = require('path');

const conf = {
  entry: './src/game.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  devtool: 'eval-sourcemap',
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  conf.devtool = production ? 'source-map' : 'eval-sourcemap';
  return conf;
};

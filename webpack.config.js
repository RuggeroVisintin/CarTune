const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.ts',
  devtool: 'source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  output: {
    filename: 'CarTune.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new CopyPlugin([
      { from: './assets', to:  path.resolve(__dirname, 'build') + '/assets' },
      { from: 'index.html', to:  path.resolve(__dirname, 'build') }
    ]),
  ],
};
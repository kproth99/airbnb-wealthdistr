const path = require('path');

module.exports = {
  entry: './docs/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
		contentBase: './docs'
	},
  mode: 'development',
	devtool: 'inline-source-map'
};
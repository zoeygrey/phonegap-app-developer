const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const PATHS = {
  src: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../www'),
};

const lessLoaders = [
  'style-loader',
  'css-loader',
  'postcss-loader',
  'less-loader',
];

const config = {
  module: {
    postcss() {
      return [autoprefixer, precss];
    },
    loaders: [
      {
        test: /\.less$/,
        loader: lessLoaders.join('!'),
        include: PATHS.src,
        exclude: /less_includes/,
      },
    ],
  },
};

module.exports = config;

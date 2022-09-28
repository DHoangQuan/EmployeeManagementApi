const { environment } = require('@rails/webpacker')

var webpack = require('webpack');
const styl =  require('./loaders/stylus')

environment.plugins.append(
  "Provide",
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    Popper: ["popper.js", "default"] // for Bootstrap 4
  })
);

environment.loaders.append('stylus', styl)

module.exports = environment

const getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'dev/app.js',

  out: 'public',

  clearBeforeBuild: true

});

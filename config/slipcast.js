'use strict';

const { statSync } = require('fs');
const { join } = require('path');

let config = {};
try {
  if (statSync(join(process.cwd(), 'slipcast.js')).isFile()) {
    config = require(join(process.cwd(), 'slipcast'));
  }
} catch (exception) {
  // ignore execption if file cannot be found
  console.error('We could not find a slipcast.js file for your project. Are you in the right directory?');
  process.exit(1);
}

// default values for slipcast config
const defaults = {
  build: {
    html: {
      afterPlugins: [],
      beforePlugins: []
    }
  },
  files: [],
  folders: {
    css: 'app/css',
    javascript: 'app/js',
    pages: 'app/pages',
    static: 'app/static',
    views: 'app/views'
  },
  output: 'dist'
};

module.exports = Object.assign(defaults, config);

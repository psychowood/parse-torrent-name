'use strict';

require('./parts/common');
require('./parts/title');
require('./parts/unknown');

module.exports = function(name) {
  return require('./core').exec(name);
};

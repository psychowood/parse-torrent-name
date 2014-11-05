'use strict';

var core = require('../core');

var raw;

core.on('setup', function (torrent) {
  raw = torrent.name;
});

core.on('part', function (part) {
  if(part.name === 'unknown') {
    return;
  }

  // remove known parts
  raw = raw.replace(part.raw, '');
});

core.on('end', function () {
  var clean;

  // clean up
  clean = raw.replace(/(^[-\. ]+)|[\(\)\/]|([-\. ]+$)/g, '');
  clean = clean.split(/\.\.+| +/).filter(Boolean);

  if(clean.length !== 0) {
    core.emit('part', {
      name: 'unknown',
      raw: raw,
      clean: clean.length === 1 ? clean[0] : clean
    });
  }
});

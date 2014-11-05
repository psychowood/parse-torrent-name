# parse-torrent-name [![Build Status](https://travis-ci.org/jzjzjzj/parse-torrent-name.svg?branch=master)](https://travis-ci.org/jzjzjzj/parse-torrent-name) [![Code Climate](https://codeclimate.com/github/jzjzjzj/parse-torrent-name/badges/gpa.svg)](https://codeclimate.com/github/jzjzjzj/parse-torrent-name)

Parses torrent name of a movie or TV show.

**Possible parts extracted:**

- episode
- extended
- group
- hardcoded
- proper
- region
- release
- repack
- resolution
- season
- title
- unknown
- video
- year

## Install:
```bash
$ npm install parse-torrent-name
```

## Usage:
```javascript
var ptn = require('parse-torrent-name');

ptn('The.Staying.Alive.S05E02.720p.HDTV.x264-KILLERS[rartv]');
/*
{ season: 5,
  episode: 2,
  resolution: '720p',
  release: 'HDTV',
  video: 'x264',
  group: 'KILLERS[rartv]',
  name: 'The Staying Alive' }
*/

ptn('Captain Russia The Summer Soldier (2014) 1080p BrRip x264 - YIFY');
/*
{ year: 2014,
  resolution: '1080p',
  release: 'BrRip',
  video: 'x264',
  group: 'YIFY',
  name: 'Captain Russia The Summer Soldier' }
*/

ptn('AL.288-1.2014.HC.HDRip.XViD.AC3-juggs[ETRG]');
/*
{ unknown: [ 'AC3' ],
  year: 2014,
  release: 'HDRip',
  video: 'XViD',
  group: 'juggs[ETRG]',
  hardcoded: true,
  title: 'AL 288-1' }
*/
```

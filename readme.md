# parse-torrent-name [![Build Status](https://travis-ci.org/jzjzjzj/parse-torrent-name.svg?branch=master)](https://travis-ci.org/jzjzjzj/parse-torrent-name)

Parses torrent name of a movie or TV show.

**Possible parts extracted:**

- codec
- episode
- excess
- group
- region
- release
- resolution
- season
- title
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
{ season: 'S05',
  episode: 'E02',
  resolution: '720p',
  release: 'HDTV',
  codec: 'x264',
  group: 'KILLERS[rartv]',
  name: 'The Staying Alive' }
*/

ptn('Captain Russia The Summer Soldier (2014) 1080p BrRip x264 - YIFY');
/*
{ year: '2014',
  resolution: '1080p',
  release: 'BrRip',
  codec: 'x264',
  group: 'YIFY',
  name: 'Captain Russia The Summer Soldier' }
*/

ptn('AL.288-1.2014.HC.HDRip.XViD.AC3-juggs[ETRG]');
/*
{ excess: [ 'HC', 'AC3' ],
  year: '2014',
  release: 'HDRip',
  codec: 'XViD',
  group: 'juggs[ETRG]',
  title: 'AL 288-1' }
*/
```

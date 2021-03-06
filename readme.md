# parse-torrent-name - bower package [![Build Status](https://travis-ci.org/psychowood/parse-torrent-name.svg?branch=master)](https://travis-ci.org/psychowood/parse-torrent-name)

Node.js modules converted to bower module with broserify.
Builds with grunt, tests with tape and tests broserified module with phantomjs+custom logic to intercept tape output.

----

Parses torrent name of a movie or TV show.

**Possible parts extracted:**

- audio
- codec
- container
- episode
- episodeName
- excess
- extended
- garbage
- group
- hardcoded
- proper
- quality
- region
- repack
- resolution
- season
- title
- widescreen
- year

## Install:
```bash
$ bower install parse-torrent-name
```

## Usage:
```javascript
ptn('The.Staying.Alive.S05E02.720p.HDTV.x264-KILLERS[rartv]');
/*
{ season: 5,
  episode: 2,
  resolution: '720p',
  quality: 'HDTV',
  codec: 'x264',
  group: 'KILLERS[rartv]',
  title: 'The Staying Alive' }
*/

ptn('Captain Russia The Summer Soldier (2014) 1080p BrRip x264 - YIFY');
/*
{ year: 2014,
  resolution: '1080p',
  quality: 'BrRip',
  codec: 'x264',
  group: 'YIFY',
  title: 'Captain Russia The Summer Soldier' }
*/

ptn('AL.288-1.2014.HC.HDRip.XViD.AC3-juggs[ETRG]');
/*
{ year: 2014,
  quality: 'HDRip',
  codec: 'XViD',
  audio: 'AC3',
  group: 'juggs[ETRG]',
  hardcoded: true,
  title: 'AL 288-1' }
*/
```

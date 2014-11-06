'use strict';

var ptn = require('./');
var tape = require('tape');

var torrents = [
  {
    name: 'The Walking Dead S05E03 720p HDTV x264-ASAP[ettv]',
    title: 'The Walking Dead',
    season: 5,
    episode: 3,
    resolution: '720p',
    release: 'HDTV',
    video: 'x264',
    audio: undefined,
    group: 'ASAP[ettv]',
    extended: undefined,
    hardcoded: undefined,
    unknown: undefined
  },
  {
    name: 'Hercules (2014) 1080p BrRip H264 - YIFY',
    title: 'Hercules',
    year: 2014,
    resolution: '1080p',
    release: 'BrRip',
    video: 'H264',
    group: 'YIFY'
  },
  {
    name: 'Dawn.of.the.Planet.of.the.Apes.2014.HDRip.XViD-EVO',
    title: 'Dawn of the Planet of the Apes',
    year: 2014,
    release: 'HDRip',
    video: 'XViD',
    group: 'EVO'
  },
  {
    name: 'The Big Bang Theory S08E06 HDTV XviD-LOL [eztv]',
    season: 8,
    episode: 6,
    release: 'HDTV',
    video: 'XviD',
    group: 'LOL [eztv]'
  },
  {
    name: '22 Jump Street (2014) 720p BrRip x264 - YIFY',
    title: '22 Jump Street',
    episode: undefined
  },
  {
    name: 'Hercules.2014.EXTENDED.1080p.WEB-DL.DD5.1.H264-RARBG',
    extended: true,
    release: 'WEB-DL',
    audio: 'DD5.1',
    unknown: undefined
  },
  {
    name: 'Hercules.2014.EXTENDED.HDRip.XViD-juggs[ETRG]',
    extended: true,
    unknown: undefined
  },
  {
    name: 'Hercules (2014) WEBDL DVDRip XviD-MAX',
    release: 'WEBDL DVDRip',
    unknown: undefined
  },
  {
    name: 'WWE Hell in a Cell 2014 PPV WEB-DL x264-WD -={SPARROW}=-',
    release: 'PPV WEB-DL',
    group: 'WD -={SPARROW}=-',
    unknown: undefined
  },
  {
    name: 'UFC.179.PPV.HDTV.x264-Ebi[rartv]',
    title: 'UFC 179',
    release: 'PPV.HDTV'
  },
  {
    name: 'Marvels Agents of S H I E L D S02E05 HDTV x264-KILLERS [eztv]',
    title: 'Marvels Agents of S H I E L D'
  },
  {
    name: 'X-Men.Days.of.Future.Past.2014.1080p.WEB-DL.DD5.1.H264-RARBG',
    title: 'X-Men Days of Future Past'
  },
  {
    name: 'Guardians Of The Galaxy 2014 R6 720p HDCAM x264-JYK',
    region: 'R6',
    release: 'HDCAM'
  },
  {
    name: 'Marvel\'s.Agents.of.S.H.I.E.L.D.S02E01.Shadows.1080p.WEB-DL.DD5.1',
    title: 'Marvel\'s Agents of S H I E L D',
    episodeName: 'Shadows',
    audio: 'DD5.1',
    unknown: undefined
  },
  {
    name: 'Marvels Agents of S.H.I.E.L.D. S02E06 HDTV x264-KILLERS[ettv]',
    title: 'Marvels Agents of S.H.I.E.L.D.'
  },
  {
    name: 'Guardians of the Galaxy (CamRip / 2014)',
    unknown: undefined
  },
  {
    name: 'The.Walking.Dead.S05E03.1080p.WEB-DL.DD5.1.H.264-Cyphanix[rartv]',
    video: 'H.264',
    year: undefined,
    unknown: undefined
  },
  {
    name: 'Brave.2012.R5.DVDRip.XViD.LiNE-UNiQUE',
    region: 'R5',
    audio: 'LiNE',
    unknown: undefined
  },
  {
    name: 'Lets.Be.Cops.2014.BRRip.XViD-juggs[ETRG]',
    release: 'BRRip'
  },
  {
    name: 'These.Final.Hours.2013.WBBRip XViD',
    release: 'WBBRip'
  },
  {
    name: 'Downton Abbey 5x06 HDTV x264-FoV [eztv]',
    title: 'Downton Abbey',
    season: 5,
    episode: 6,
    unknown: undefined
  },
  {
    name: 'Annabelle.2014.HC.HDRip.XViD.AC3-juggs[ETRG]',
    hardcoded: true,
    audio: 'AC3',
    unknown: undefined
  },
  {
    name: 'Lucy.2014.HC.HDRip.XViD-juggs[ETRG]',
    hardcoded: true,
    unknown: undefined
  },
  {
    name: 'The Flash 2014 S01E04 HDTV x264-FUM[ettv]',
    unknown: undefined
  },
  {
    name: 'South Park S18E05 HDTV x264-KILLERS [eztv]',
    unknown: undefined
  },
  {
    name: 'The Flash 2014 S01E03 HDTV x264-LOL[ettv]',
    unknown: undefined
  },
  {
    name: 'The Flash 2014 S01E01 HDTV x264-LOL[ettv]',
    unknown: undefined
  },
  {
    name: 'Lucy 2014 Dual-Audio WEBRip 1400Mb',
    audio: 'Dual-Audio',
    garbage: '1400Mb',
    group: undefined,
    unknown: undefined
  },
  {
    name: 'Teenage Mutant Ninja Turtles (HdRip / 2014)',
    title: 'Teenage Mutant Ninja Turtles',
    release: 'HdRip'
  },
  {
    name: 'Teenage Mutant Ninja Turtles (unknown_release_type / 2014)',
    unknown: 'unknown_release_type',
    proper: undefined
  },
  {
    name: 'The Simpsons S26E05 HDTV x264 PROPER-LOL [eztv]',
    proper: true,
    unknown: undefined
  },
  {
    name: '2047 - Sights of Death (2014) 720p BrRip x264 - YIFY',
    title: '2047 - Sights of Death',
    year: 2014,
    unknown: undefined,
    repack: undefined
  },
  {
    name: 'Two and a Half Men S12E01 HDTV x264 REPACK-LOL [eztv]',
    repack: true,
    unknown: undefined
  },
  {
    name: 'Dinosaur 13 2014 WEBrip XviD AC3 MiLLENiUM',
    release: 'WEBrip',
    audio: 'AC3',
    group: 'MiLLENiUM',
    unknown: undefined
  },
  {
    name: 'Teenage.Mutant.Ninja.Turtles.2014.HDRip.XviD.MP3-RARBG',
    audio: 'MP3',
    unknown: undefined
  },
  {
    name: 'Dawn.Of.The.Planet.of.The.Apes.2014.1080p.WEB-DL.DD51.H264-RARBG',
    audio: 'DD51',
    unknown: undefined
  },
  {
    name: 'Teenage.Mutant.Ninja.Turtles.2014.720p.HDRip.x264.AC3.5.1-RARBG',
    audio: 'AC3.5.1',
    unknown: undefined
  },
  {
    name: 'Gotham.S01E05.Viper.WEB-DL.x264.AAC',
    episodeName: 'Viper',
    audio: 'AAC',
    group: undefined,
    unknown: undefined
  },
  {
    name: 'Into.The.Storm.2014.1080p.WEB-DL.AAC2.0.H264-RARBG',
    audio: 'AAC2.0',
    unknown: undefined
  },
  {
    name: 'Lucy 2014 Dual-Audio 720p WEBRip',
    audio: 'Dual-Audio',
    group: undefined,
    unknown: undefined
  },
  {
    name: 'Into The Storm 2014 1080p BRRip x264 DTS-JYK',
    audio: 'DTS',
    unknown: undefined
  },
  {
    name: 'Sin.City.A.Dame.to.Kill.For.2014.1080p.BluRay.x264-SPARKS',
    release: 'BluRay'
  },
  {
    name: 'WWE Monday Night Raw 3rd Nov 2014 HDTV x264-Sir Paul',
    title: 'WWE Monday Night Raw',
    garbage: '3rd Nov'
  },
  {
    name: 'Jack.And.The.Cuckoo-Clock.Heart.2013.BRRip XViD',
    title: 'Jack And The Cuckoo-Clock Heart',
    group: undefined,
    unknown: undefined
  },
  {
    name: 'WWE Hell in a Cell 2014 HDTV x264 SNHD',
    group: 'SNHD',
    unknown: undefined
  },
  {
    name: 'Dracula.Untold.2014.TS.XViD.AC3.MrSeeN-SiMPLE',
    group: 'MrSeeN-SiMPLE',
    unknown: undefined
  },
  {
    name: 'The Missing 1x01 Pilot HDTV x264-FoV [eztv]',
    episodeName: 'Pilot',
    unknown: undefined
  },
  {
    name: 'Doctor.Who.2005.8x11.Dark.Water.720p.HDTV.x264-FoV[rartv]',
    season: 8,
    episode: 11,
    episodeName: 'Dark Water',
    unknown: undefined
  },
  {
    name: 'Gotham.S01E07.Penguins.Umbrella.WEB-DL.x264.AAC',
    episodeName: 'Penguins Umbrella',
    unknown: undefined
  }
];

torrents.forEach(function(torrent) {
  var testName = '"' + torrent.name + '"';
  var parts = ptn(torrent.name);

  tape(testName, function (test) {
    var key, testMessage;

    for(key in torrent) {
      if(torrent.hasOwnProperty(key)) {
        if(key === 'name') {
          continue;
        }

        testMessage = key + ' should be ' + JSON.stringify(torrent[key]);

        test[Array.isArray(torrent[key]) ? 'deepEqual' : 'equal'](
          parts[key],
          torrent[key],
          testMessage
        );
      }
    }

    test.end();
  });
});

import { fetchSongCover, songsLoading } from './song';

// Jingle pad songs information
var SONGS = [
  { name: "Rocky Balboa",
    card: document.querySelector(".rocky"),
    source:'https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3',
    scheduled: false
  },
  { name: "2001: A Space Odyssey",
    card: document.querySelector(".space"),
    source:'https://ia800501.us.archive.org/7/items/AlsoSprachZarathustraOp.30Strauss/Also%20Sprach%20Zarathustra%2C%20Op.%2030%20-%20Strauss.mp3',
    scheduled: false
  },
  { name: "Back to the Future",
    card: document.querySelector(".future"),
    source: 'http://soundfxcenter.com/movies/back-to-the-future/8d82b5_Back_to_the_Future_Theme_Song.mp3',
    scheduled: false
  },
  { name: "Fast and Furious",
    card: document.querySelector(".fnf"),
    source:'https://muz19.z1.fm/3/03/teriyaki_boyz_-_tokyo_drift_fast__furious_saundtrek_-_trojnoj_forsazh_tokijskij_drift_(zf.fm).mp3',
    scheduled: false
  },
  { name: "Inspector gadget",
    card: document.querySelector(".gadget"),
    source:'https://instrumentalfx.co/wp-content/upload/11/Inspector-Gadget-Theme-Song.mp3',
    scheduled: false
  },
  { name: "Tetris",
    card: document.querySelector(".tetris"),
    source:'https://ia800504.us.archive.org/33/items/TetrisThemeMusic/Tetris.mp3',
    scheduled: false
  },

];

// Fetch the songs picture
fetchSongCover(SONGS);

// Load song
songsLoading(SONGS);








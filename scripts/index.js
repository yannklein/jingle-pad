import { fetchSongCover, songsLoading } from './song';

// Jingle pad songs information
var SONGS = [
  { name: "Rocky Balboa",
    card: document.querySelector(".rocky"),
    source:'https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3',
    scheduled: false,
    playFrom: "0"
  },
  { name: "2001: A Space Odyssey",
    card: document.querySelector(".space"),
    source:'https://ia800501.us.archive.org/7/items/AlsoSprachZarathustraOp.30Strauss/Also%20Sprach%20Zarathustra%2C%20Op.%2030%20-%20Strauss.mp3',
    scheduled: false,
    playFrom: "20"
  },
  { name: "Back to the Future",
    card: document.querySelector(".future"),
    source: 'https://yannklein.github.io/jingle-pad/future.mp3',
    scheduled: false,
    playFrom: "0"
  },
  { name: "Fast and Furious",
    card: document.querySelector(".fnf"),
    source:'https://muz19.z1.fm/3/03/teriyaki_boyz_-_tokyo_drift_fast__furious_saundtrek_-_trojnoj_forsazh_tokijskij_drift_(zf.fm).mp3',
    scheduled: false,
    playFrom: "0"
  },
  { name: "Inspector gadget",
    card: document.querySelector(".gadget"),
    source:'https://instrumentalfx.co/wp-content/upload/11/Inspector-Gadget-Theme-Song.mp3',
    scheduled: false,
    playFrom: "0"
  },
  { name: "Tetris",
    card: document.querySelector(".tetris"),
    source:'https://ia800504.us.archive.org/33/items/TetrisThemeMusic/Tetris.mp3',
    scheduled: false,
    playFrom: "0"
  },
  { name: "Star Trek",
    card: document.querySelector(".star-trek"),
    source:'https://d8.ytcore.org/sse1/?jobid=ebed4da535edc3fba760950ae8c9780b',
    scheduled: false,
    playFrom: "51.5"
  },
  { name: "Knight Rider",
    card: document.querySelector(".knight-rider"),
    source:'https://instrumentalfx.co/wp-content/upload/11/Knight-Rider-Theme-Song.mp3',
    scheduled: false,
    playFrom: "0"
  },
  { name: "We are the Champions",
    card: document.querySelector(".queen"),
    source:'https://fcsongs.com/uploads/audio/Queen - We Are The Champions.mp3',
    scheduled: false,
    playFrom: "33"
  },
  { name: "Space Jam",
    card: document.querySelector(".space-jam"),
    source:'https://archive.org/download/SpaceJamThemeSong/Space%20Jam%20Theme%20Song.mp3',
    scheduled: false,
    playFrom: "0"
  },
  { name: "Coca Cola",
    card: document.querySelector(".coca-cola"),
    source:'https://yannklein.github.io/jingle-pad/coke.mp3',
    scheduled: false,
    playFrom: "0"
  }
];

// Fetch the songs picture
fetchSongCover(SONGS);

// Load song
songsLoading(SONGS);








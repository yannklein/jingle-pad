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
    source: 'http://soundfxcenter.com/movies/back-to-the-future/8d82b5_Back_to_the_Future_Theme_Song.mp3',
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
    source:'https://apiyt.com/convertto.php?utm_source=Mp3bearx.info&sid=p5kcBxL7-qI;1584891148;ca1a97ee0d8825d70fd12b25e777a99&p=1',
    scheduled: false,
    playFrom: "51.5"
  },
  { name: "Knight Rider",
    card: document.querySelector(".knight-rider"),
    source:'https://apiyt.com/convertto.php?utm_source=Mp3bearx.info&sid=GbfVmzF7N4g;1584887229;dfcc0c31311377e932eed1b84533938&p=1',
    scheduled: false,
    playFrom: "0"
  },
  { name: "We are the Champions",
    card: document.querySelector(".queen"),
    source:'https://fcsongs.com/uploads/audio/Queen - We Are The Champions.mp3',
    scheduled: false,
    playFrom: "33"
  }
];

// Fetch the songs picture
fetchSongCover(SONGS);

// Load song
songsLoading(SONGS);








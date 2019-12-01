const key = "9555c244";

// Jingle pad songs information
var songs = [
  { name: "Rocky Balboa", 
    card: document.querySelector(".rocky div"),
    source:'https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3'
  },
  { name: "2001: A Space Odyssey", 
    card: document.querySelector(".space div"),
    source:'https://ia800501.us.archive.org/7/items/AlsoSprachZarathustraOp.30Strauss/Also%20Sprach%20Zarathustra%2C%20Op.%2030%20-%20Strauss.mp3'
  },
  { name: "Back to the Future", 
    card: document.querySelector(".future div"),
    source: 'http://soundfxcenter.com/movies/back-to-the-future/8d82b5_Back_to_the_Future_Theme_Song.mp3'
  },
  { name: "Fast and Furious", 
    card: document.querySelector(".fnf div"),
    source:'https://muz19.z1.fm/3/03/teriyaki_boyz_-_tokyo_drift_fast__furious_saundtrek_-_trojnoj_forsazh_tokijskij_drift_(zf.fm).mp3'
  },
];

// Jingle button type initialization
const playString = '<i class="far fa-play-circle"></i>';
const pauseString = '<i class="fas fa-pause-circle"></i>';
const loadingString = '<i class="fas fa-spinner"></i>';

// Fetch the songs picture
songs.forEach((song) => {
  fetch(`http://www.omdbapi.com/?s=${song.name}&apikey=${key}`)
  .then(response => response.json())
  .then((data) => {
    song.card.style.backgroundImage = `url(${data.Search[0].Poster})`;
    song.card.style.backgroundSize = 'cover';
  });
});

// Initialize play event listener
const initPlayEvent = (card, audio) => {
  audio.addEventListener("canplay", (event) => {
    card.innerHTML = playString;
  });

  card.addEventListener( "touchmove", (event) => {
    const current_card = event.currentTarget;
    if(current_card.innerHTML != loadingString){
      audio.currentTime = 0;
      audio.pause();
      current_card.innerHTML = playString;
    }
  });

  card.addEventListener( "click", (event) => {
    const current_card = event.currentTarget;
    if(current_card.innerHTML != loadingString){
      if (audio.paused) {
        audio.play()
        current_card.innerHTML = pauseString;
      }
      else {
        current_card.innerHTML = playString;
        audio.pause();
      }
    }
  });

};

// Load songs asynchronously
const songLoading = (song) => {
  return new Promise(resolve => {
    console.log('begin the job');
    let audio = new Audio();
    audio.src = song.source;
    audio.load();
    initPlayEvent(song.card, audio);
    resolve(`${song.name} is loaded!`);
  });
};

const asyncroLoading = async (song) => {
  let msg = await songLoading(song);
  console.log(msg);
};

songs.forEach((song) => {
  asyncroLoading(song);
});






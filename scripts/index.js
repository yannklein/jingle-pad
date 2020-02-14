const key = "9555c244";

// Jingle pad songs information
var songs = [
  { name: "Rocky Balboa",
    card: document.querySelector(".rocky .card-image"),
    source:'https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3',
    scheduled: false
  },
  { name: "2001: A Space Odyssey",
    card: document.querySelector(".space .card-image"),
    source:'https://ia800501.us.archive.org/7/items/AlsoSprachZarathustraOp.30Strauss/Also%20Sprach%20Zarathustra%2C%20Op.%2030%20-%20Strauss.mp3',
    scheduled: false
  },
  { name: "Back to the Future",
    card: document.querySelector(".future .card-image"),
    source: 'http://soundfxcenter.com/movies/back-to-the-future/8d82b5_Back_to_the_Future_Theme_Song.mp3',
    scheduled: false
  },
  { name: "Fast and Furious",
    card: document.querySelector(".fnf .card-image"),
    source:'https://muz19.z1.fm/3/03/teriyaki_boyz_-_tokyo_drift_fast__furious_saundtrek_-_trojnoj_forsazh_tokijskij_drift_(zf.fm).mp3',
    scheduled: false
  },
  { name: "Inspector gadget",
    card: document.querySelector(".gadget .card-image"),
    source:'https://instrumentalfx.co/wp-content/upload/11/Inspector-Gadget-Theme-Song.mp3',
    scheduled: false
  },
  { name: "Tetris",
    card: document.querySelector(".tetris .card-image"),
    source:'https://ia800504.us.archive.org/33/items/TetrisThemeMusic/Tetris.mp3',
    scheduled: false
  },

];

// Jingle button type initialization
const playString = '<i class="far fa-play-circle"></i>';
const pauseString = '<i class="fas fa-pause-circle"></i>';
const loadingString = '<i class="fas fa-spinner"></i>';
const timeDisplay = document.querySelector('.time-now');

// Initialize play event listener
const initPlayEvent = (card, audio) => {
  audio.addEventListener("canplay", (event) => {
    card.innerHTML = `${playString}`;
  });

  console.log(card.querySelector('i'));
  card.querySelector('i').addEventListener( "touchmove", (event) => {
    if(card.innerHTML != loadingString){
      audio.currentTime = 0;
      audio.pause();
      card.innerHTML = `${playString}`;
    }
  });

  card.querySelector('i').addEventListener( "click", (event) => {
    if(card.innerHTML != loadingString){
      if (audio.paused) {
        audio.play()
        card.innerHTML = pauseString;
      }
      else {
        card.innerHTML = playString;
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

const updateTimeDisplay = (timeNow) => {
  timeDisplay.innerText = `Time now: ${timeNow.getHours()}:${timeNow.getMinutes()}`;
}

const itIsTime = (scheduledTime, timeNow) => {
  console.log(scheduledTime);
  console.log(timeNow);
}

const fetchSongImage = () => {
  songs.forEach((song) => {
    fetch(`https://www.omdbapi.com/?s=${song.name}&apikey=${key}`)
    .then(response => response.json())
    .then((data) => {
      song.card.style.backgroundImage = `url(${data.Search[0].Poster})`;
    });
    asyncroLoading(song);
  });
};

//Set song playing timer
const setPlayTimer = () => {
  const cards = document.querySelectorAll('.card');
  setInterval(() => {
    let timeNow = new Date();

    updateTimeDisplay(timeNow);

    cards.forEach((card) => {
      if (card.querySelector('.scheduled') && card.querySelector('.scheduled').checked) {
        itIsTime(card.querySelector('.time-slot').innerText, timeNow);
      }
    });
  }, 1000);
}

// Fetch the songs picture
fetchSongImage();


// Set play timer
setPlayTimer();









import { initScheduler } from './scheduler';

const key = "9555c244";

// Jingle button type initialization
const playString = '<i class="far fa-play-circle"></i>';
const pauseString = '<i class="fas fa-pause-circle"></i>';
const loadingString = '<i class="fas fa-spinner"></i>';

// Load song covers
const fetchSongCover = (songs) => {
  songs.forEach((song) => {
    fetch(`https://www.omdbapi.com/?s=${song.name}&apikey=${key}`)
    .then(response => response.json())
    .then((data) => {
      song.card.querySelector(".card-image").style.backgroundImage = `url(${data.Search[0].Poster})`;
    });
  });
};

const playSong = (card, audio) => {
  audio.play();
  card.querySelector(".card-image").innerHTML = pauseString;
};

const pauseSong = (card, audio) => {
  card.querySelector(".card-image").innerHTML = playString;
  audio.pause();
};

// Initialize play event listener
const initPlayEvent = (card, audio) => {
  const cardImage = card.querySelector(".card-image");
  audio.addEventListener("canplay", (event) => {
    cardImage.innerHTML = `${playString}`;
  });

  // console.log(card);
  cardImage.addEventListener( "touchmove", (event) => {
    if(cardImage.innerHTML != loadingString){
      audio.currentTime = 0;
      pauseSong(card, audio);
    }
  });

  cardImage.addEventListener( "click", (event) => {
    if(card.cardImageinnerHTML != loadingString){
      if (audio.paused) {
        playSong(card, audio);
      }
      else {
        pauseSong(card, audio);
      }
    }
  });
};

const asyncSongLoading = async (song) => {
    let msg = await ((song) => {
        return new Promise(resolve => {
          // console.log('begin the job');
          let audio = new Audio();
          audio.src = song.source;
          audio.load();
          initPlayEvent(song.card, audio);
          resolve(`${song.name} is loaded!`);
          initScheduler(song, audio);
        })
      })(song);
    // console.log(msg);
};

const songsLoading = (songs) => {
  songs.forEach((song) => {
    asyncSongLoading(song);
  });
};

export { fetchSongCover, songsLoading, playSong, pauseSong };

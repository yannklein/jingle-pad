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

const playSong = (song, audio) => {
  audio.currentTime = song.playFrom;
  audio.play();
  song.card.querySelector(".card-image").innerHTML = pauseString;
};

const pauseSong = (song, audio) => {
  song.card.querySelector(".card-image").innerHTML = playString;
  audio.pause();
};

// Initialize play event listener
const initPlayEvent = (song, audio) => {
  const cardImage = song.card.querySelector(".card-image");
  audio.addEventListener("canplay", (event) => {
    if(cardImage.innerHTML.trim() === loadingString){
      cardImage.innerHTML = `${playString}`;
    }
  });

  // console.log(card);
  cardImage.addEventListener( "touchmove", (event) => {
    if(cardImage.innerHTML.trim() != loadingString){
      audio.currentTime = 0;
      pauseSong(song, audio);
    }
  });

  cardImage.addEventListener( "click", (event) => {
    if(song.card.querySelector(".card-image").innerHTML != loadingString){
      if (audio.paused) {
        playSong(song, audio);
      }
      else {
        pauseSong(song, audio);
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
          initPlayEvent(song, audio);
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

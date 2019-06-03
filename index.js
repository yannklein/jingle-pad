let audioRocky = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioSpace = new Audio('https://ia800501.us.archive.org/7/items/AlsoSprachZarathustraOp.30Strauss/Also%20Sprach%20Zarathustra%2C%20Op.%2030%20-%20Strauss.mp3');
let audioFnf = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
// https://muz19.z1.fm/3/03/teriyaki_boyz_-_tokyo_drift_fast__furious_saundtrek_-_trojnoj_forsazh_tokijskij_drift_(zf.fm).mp3
let audioBatman = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioSW = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioYmca = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioQueen = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioCeleb = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioDP = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');

// Preload audios
audioRocky.load();
audioSpace.load();

let playString = '<i class="far fa-play-circle"></i>';
let pauseString = '<i class="fas fa-pause-circle"></i>';

const audioPlayEvent = (card, audio) => {
  card.addEventListener( "click", (event) => {
    if (audio.paused) {
      audio.play()
      event.currentTarget.querySelector("div").innerHTML = pauseString;
    }
    else {
      event.currentTarget.querySelector("div").innerHTML = playString;
      audio.pause();
    }
  });
}

const cards = document.querySelectorAll(".card div");
console.log(cards);

cards.forEach((card) => {
  switch(card.className) {
      case "rocky":
      console.log("play")
        audioPlayEvent(card, audioRocky);
        break;
      case "space":
        audioPlayEvent(card, audioSpace);
        break;
      case "fnf":
        audioPlayEvent(card, audioFnf);
        break;
      case "batman":
        audioPlayEvent(card, audioBatman);
        break;
      case "starwars":
        audioPlayEvent(card, audioSW);
        break;
      case "ymca":
        audioPlayEvent(card, audioYmca);
        break;
      case "queen":
        audioPlayEvent(card, audioQueen);
        break;
      case "party":
        audioPlayEvent(card, audioCeleb);
        break;
      case "daftpunk":
        audioPlayEvent(card, audioDP);
        break;
      default:
    }
})

window.onload = ( () => {
  document.querySelector(".loader-container").style.display = "none";
  document.querySelector(".jingle-container").style.display = "block";
});



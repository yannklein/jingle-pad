let audioRocky = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioSpace = new Audio('https://en.wikipedia.org/wiki/File:Richard_Strauss_-_Also_Sprach_Zarathustra.ogg');
let audioFnf = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioBatman = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioSW = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioYmca = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioQueen = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioCeleb = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');
let audioDP = new Audio('https://archive.org/download/EyeOfTiger/Survivor-EyeOfTheTigermp3-codes1.com.mp3');

const audioPlayEvent = (card, audio) => {
  card.addEventListener( "click", (event) => {
    audio.paused ? audio.play() : audio.pause();
    event.currentTarget.querySelector("div").classList.toggle("my-card-selected");
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



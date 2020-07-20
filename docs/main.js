/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song */ "./scripts/song.js");


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
  },
  { name: "Space Jam",
    card: document.querySelector(".space-jam"),
    source:'https://archive.org/download/SpaceJamThemeSong/Space%20Jam%20Theme%20Song.mp3',
    scheduled: false,
    playFrom: "0"
  }
];

// Fetch the songs picture
Object(_song__WEBPACK_IMPORTED_MODULE_0__["fetchSongCover"])(SONGS);

// Load song
Object(_song__WEBPACK_IMPORTED_MODULE_0__["songsLoading"])(SONGS);









/***/ }),

/***/ "./scripts/scheduler.js":
/*!******************************!*\
  !*** ./scripts/scheduler.js ***!
  \******************************/
/*! exports provided: initScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initScheduler", function() { return initScheduler; });
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song */ "./scripts/song.js");


const timeDisplay = document.querySelector('.time-now');
const cards = document.querySelectorAll('.card');

const updateTimeDisplay = (timeNow) => {
  const zeroPad = (num, places) => String(num).padStart(places, '0');
  timeDisplay.innerText = `Time now: ${timeNow.getHours()}:${zeroPad(timeNow.getMinutes())}`;
}

const itIsTime = (scheduledTime, timeNow) => {
  // console.log(scheduledTime.getHours(), scheduledTime.getMinutes());
  // console.log(timeNow.getHours(), timeNow.getMinutes());
  return`${scheduledTime.getHours()}${scheduledTime.getMinutes()}` === `${timeNow.getHours()}${timeNow.getMinutes()}`;

}

//Set song playing timer
const playScheduledSongs = (timeNow, song, audio) => {
  const card = song.card;
  const checkbox = card.querySelector('.card-scheduler-check');
  const time = card.querySelector('.card-scheduler-time');
  // console.log("first check", time, checkbox);
  if (checkbox.checked) {
    const scheduledTime = new Date();
    const scheduledTimeString = time.value;
    scheduledTime.setHours(scheduledTimeString.substring(0,2));
    scheduledTime.setMinutes(scheduledTimeString.substring(3));
    // console.log("time check");
    if (itIsTime(scheduledTime, timeNow) && audio.paused && audio.currentTime < 40) {
      // console.log("Time!");
      Object(_song__WEBPACK_IMPORTED_MODULE_0__["playSong"])(song, audio);
    }
    // console.log(audio.currentTime);
    if (audio.currentTime >= 30){
      audio.volume = 1 - ((audio.currentTime - 30) / 10)
    }
    if (audio.currentTime >= 40){
      Object(_song__WEBPACK_IMPORTED_MODULE_0__["pauseSong"])(song, audio);
      checkbox.cheked = false;
      time.value = "";
    };
  }
};

const initScheduler = (song, audio) => {
  setInterval(() => {
    let timeNow = new Date();

    updateTimeDisplay(timeNow);

    playScheduledSongs(timeNow, song, audio);
  }, 1000);
};



/***/ }),

/***/ "./scripts/song.js":
/*!*************************!*\
  !*** ./scripts/song.js ***!
  \*************************/
/*! exports provided: fetchSongCover, songsLoading, playSong, pauseSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSongCover", function() { return fetchSongCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songsLoading", function() { return songsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playSong", function() { return playSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseSong", function() { return pauseSong; });
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler */ "./scripts/scheduler.js");


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
          Object(_scheduler__WEBPACK_IMPORTED_MODULE_0__["initScheduler"])(song, audio);
        })
      })(song);
    // console.log(msg);
};

const songsLoading = (songs) => {
  songs.forEach((song) => {
    asyncSongLoading(song);
  });
};




/***/ })

/******/ });
//# sourceMappingURL=main.js.map
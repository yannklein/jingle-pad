import { playSong, pauseSong } from './song';

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
      playSong(card, audio);
    }
    // console.log(audio.currentTime);
    if (audio.currentTime >= 30){
      audio.volume = 1 - ((audio.currentTime - 30) / 10)
    }
    if (audio.currentTime >= 40){
      pauseSong(card, audio);
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
export { initScheduler };

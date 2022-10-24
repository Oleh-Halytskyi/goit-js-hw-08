const throttle = require("lodash.throttle");
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);    

const LOCALSTORAGE_TIME = 'videoplayer-current-time';

function setTime(evt) {
    const time = evt.seconds
    const timeData = localStorage.setItem(LOCALSTORAGE_TIME, time);      
}
const throttled = throttle(setTime, 1000)

player.on('timeupdate', throttled);
if (localStorage.getItem(LOCALSTORAGE_TIME)) {
    player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_TIME))
}

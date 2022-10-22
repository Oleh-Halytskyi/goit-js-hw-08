const throttle = require("lodash.throttle");
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

function timeSet (evt) {
    const time = evt.seconds
    const data = localStorage.setItem('videoplayer-current-time', time);
    
}
const throttled = throttle(timeSet, 1000)

player.on('timeupdate', throttled);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))

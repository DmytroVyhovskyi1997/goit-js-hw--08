import Player from "@vimeo/player";

import throttle from 'lodash.throttle';
const lodashThrottle = 1000;

const videoPlayer ='videoplayer-current-time' ;
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',  throttle( e => {
    localStorage.setItem(videoPlayer, e.seconds);
    }, lodashThrottle)
    );
player
.setCurrentTime(localStorage.getItem(videoPlayer) || 0)
.catch(function (error) {
    console.error(error)
});
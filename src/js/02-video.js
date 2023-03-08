import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (value) {
    localStorage.setItem('videoplayer-current-time', value.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.on('texttrackchange', onPlay)

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.setColor('#fac002');

// ====
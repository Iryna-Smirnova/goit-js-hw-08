import Player from '@vimeo/player';

const player = new Player('vimeo-player');

player.on('timeupdate', _.throttle(() => {
  player.getCurrentTime().then((seconds) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}


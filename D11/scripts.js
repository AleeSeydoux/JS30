/*Get our elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progress_bar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranger = player.querySelectorAll('.player__slider');
/*build our functions */
function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

/*Hook up the event listener */
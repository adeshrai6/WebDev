const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play & pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// Update play/pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<em class="fa fa-play fa-2x"></em>';
    }else{
        play.innerHTML = '<em class="fa fa-pause fa-2x"></em>';
    }
}

//Update progress & timestamp
function setVideoProgress(){
    return true;
}

//Stop video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

//Event Listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);


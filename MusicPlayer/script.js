const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

//Song Title
const songs = ["MutuBhari", "PahiloJunima", "parelima"];

// Keep track of song
let songIndex = 2;

// Initially load song details into Dom

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpeg`;
}

//Play Song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
  
}

//Pause Song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous Song
function prevSong(){
  songIndex--;

  if(songIndex < 0){
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();

}


// Next Song
function nextSong() {
  songIndex++;

  if(songIndex >= songs.length){
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}


// Update Progress
function updateProgress(e){
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}


// Set Progress Bar
function setProgress(e){
  const width = this.clientWidth; //width of progress bar
  const clickX = e.offsetX;       //length of licked progress bar
  const duraton = audio.duration; //song total duration

  audio.currentTime = (clickX / width) * duraton;

}


// Event Listners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//Change Songs
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Song Duration
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song Ends
audio.addEventListener('ended', nextSong);
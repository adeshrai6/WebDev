const musicContainer = document.getElementById("music-container");
const playBth = document.getElementById("play");
const prevBth = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

//Song Title
const songs = ["MutuBhari", "PahiloJunima", "parelima"];

// Keep track of song
let sondIndex = 1;

// Initially load song details into Dom

loadSong(songs[sondIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpeg`;
}

//Play Song
function playSong() {
  musicContainer.classList.add('play');
  playBth.querySelector('i.fas').classList.remove('fa-play');
  playBth.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Event Listners
playBth.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

const musicContainer = document.getElementById('music_container');
const playBth = document.getElementById('play');
const prevBth = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

//Song Title
const songs = ['Mutu Bhari', 'Pahilo Junima', 'parilima'];

// Keep track of song
let sondIndex = 2;

// Initially load song details into Dom

loadSong([song[sondIndex]]);

function loadSong (song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;

}
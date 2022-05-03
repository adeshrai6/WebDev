const msgEl = document.getElementById('msg');

const randomNum = getRandomNum();


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


let recognition = new window.SpeechRecognition();


// Start recognition and game
recognition.start();


function getRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}
const msgEl = document.getElementById('msg');

const randomNum = getRandomNum();


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


let recognition = new window.SpeechRecognition();


// Start recognition and game
recognition.start();


// Capture user speak
function onSpeak(e) {
    const msg = e.results[0][0].transcript;

    writeMessage(msg);
}


// Write what user speaks
function writeMessage(msg) {
    msgEl.innerHTML = `<div> Your said: </div>
                        <span class="box">${msg}</span>
                        `;
}



// Generate random number
function getRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}


// Speack result
recognition.addEventListener('result', onSpeak);
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
    chackNumber(msg);
}


// Write what user speaks
function writeMessage(msg) {
    msgEl.innerHTML = `<div> Your said: </div>
                        <span class="box">${msg}</span>
                        `;
}

// Check msg against number
function chackNumber(msg) {
    const num = +msg;


    // Check if valid number
    if(Number.isNaN(num)){
        msgEl.innerHTML = '<div>That is not a valid number </div>';
        return;
    }

    if(num > 100 || num < 1) {
        msgEl.innerHTML = '<div>Number must be between 1 and 100</div>';
        return;
    }

    if(num === randomNum) {
        document.body.innerHTML = `
        <h2>Congrats! you guesed the number <br><br></h2>
        <button class="play-again" id="play-again">Play Again</button>
        `;
    }else if (num > randomNum) {
        msgEl.innerHTML += '<div>Go LOWER</div>';
    }else {
        msgEl.innerHTML += '<div>Go HIGHER</div>';
    }
}

// Generate random number
function getRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}


// Speack result
recognition.addEventListener('result', onSpeak);


recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'play-again') {
        window.location.reload();
    }
})
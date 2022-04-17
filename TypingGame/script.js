const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('defficulty');

// Lists of words
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init tome
let time = 10;

// Set difficulty value
let difficulty = localStorage.getItem('difficulty') !== null ? 
localStorage.getItem('difficulty') : 'medium';


// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ? 
localStorage.getItem('difficulty') : 'medium';

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000)

// Generate random word from array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}


// Update score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// Update time
function updateTime(){
    time--;
    timeEl.innerHTML = time + 's';

    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }
}


// Game Over, show ends
function gameOver(){
    endgameEl.innerHTML = 
    `<h1> Time ran out</h1>
    <p>Your score is ${score}</p>
    <button onClick="location.reload()">Reload</button>`;
    endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners
text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord){
        addWordToDOM();
        updateScore();


        // Clear
        e.target.value = '';

    if(difficulty === 'hard') {
        time += 2;
    }else if(difficulty === 'medium'){
        time += 3;
    }else{
        time += 5;
    }
        updateTime();
    }
});


// Settings btn click
settings.addEventListener('click', () => 
settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;

    localStorage.setItem('difficulty', difficulty);
})

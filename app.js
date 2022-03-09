// import functions and grab DOM elements
const hat0Container = document.getElementById('hat0-container');
const hat1Container = document.getElementById('hat1-container');
const hat2Container = document.getElementById('hat2-container');

const button0 = document.getElementById('button-0');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');

const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');
// let state
let wins = 0;
let total = 0;

//Create function first

function getRandomHidingSpot() {
    const hidingPlaces = [
        'hat0',
        'hat1',
        'hat2'
    ];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    return hidingPlaces[index];
}

function handleGuess(hatId, correctSpot) {
    hat0Container.classList.remove('pearl');
    hat1Container.classList.remove('pearl');
    hat2Container.classList.remove('pearl');

    total++;

    let hidingSpotEl = document.getElementById(correctSpot + '-container');
    hidingSpotEl.classList.toggle('pearl');

    if (hatId === correctSpot){
        wins++;
    }

    const correctHatImgEl = document.getElementById('hat0-container', 'hat1-container', 'hat2-container');
    correctHatImgEl.src = 'assets/dragonpearl2.png';

    winsEl.textContent = wins;
    totalEl.textContent = total;
}
// set event listeners for the buttons

button0.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('hat0', correctSpot);
});

button1.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('hat1', correctSpot);
});

button2.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('hat2', correctSpot);
});




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

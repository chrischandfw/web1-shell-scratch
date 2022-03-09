// import functions and grab DOM elements
const hat0Container = document.getElementById('hat0');
const hat1Container = document.getElementById('hat1');
const hat2Container = document.getElementById('hat2');

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

function handleGuess(hatId, correctSpot){
    hat0Container.classList.remove('pearl');
    hat1Container.classList.remove('pearl');
    hat2Container.classList.remove('pearl');

    total++;

    let hidingSpotEl = document.getElementById(correctSpot + '-container');
    hidingSpotEl.classList.toggle('pearl');

    if (hatId === correctSpot){
        wins++;
    }

    winsEl.textContent = wins;
    totalEl.textContent = total;
}
// set event listeners for the buttons

button0.addEventListener('click', () => {
    handleGuess('hat0', getRandomHidingSpot);
});

button1.addEventListener('click', () => {
    handleGuess('hat1', getRandomHidingSpot);
});

button2.addEventListener('click', () => {
    handleGuess('hat2', getRandomHidingSpot);
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

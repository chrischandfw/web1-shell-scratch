// import functions and grab DOM elements
const hatImg0 = document.getElementById('hat-0');
const hatImg1 = document.getElementById('hat-1');
const hatImg2 = document.getElementById('hat-2');

const button0 = document.getElementById('button-0');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');

const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');
// let state
let wins = 0;
let total = 0;

//Create function first

function handleGuess(crownId){
    hatImg0.src = 'assets/goldkinghat.png';
    hatImg1.src = 'assets/goldkinghat.png';
    hatImg2.src = 'assets/goldkinghat.png';

    total++;

    const numberBetweenZeroAndThree = Math.floor(Math.random() * 3);

    if (numberBetweenZeroAndThree === crownId){
        wins++;
    }

    const correctHatImgEl = document.getElementById(`hat-${numberBetweenZeroAndThree}`);
    correctHatImgEl.src = 'assets/goldkinghat2.png';

    winsEl.textContent = wins;
    totalEl.textContent = total;
}
// set event listeners for the buttons

button0.addEventListener('click', () => {
    handleGuess(0);
});

button1.addEventListener('click', () => {
    handleGuess(1);
});

button2.addEventListener('click', () => {
    handleGuess(2);
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

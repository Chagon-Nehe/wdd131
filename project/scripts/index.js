// --- Rotating Tips Logic ---
const rotatingTips = [
    'Try adding colorful veggies to your plate!',
    'Drink a big glass of water when you wake up!',
    'Go outside and play for 60 minutes today!',
    'Did you know sleep helps your body grow stronger?',
    'Wash your hands before eating to stay healthy!'
];
let currentTipIndex = 0;
const rotatingTipElement = document.getElementById('rotating-tip');

const updateRotatingTip = () => {
    rotatingTipElement.textContent = rotatingTips[currentTipIndex];
    currentTipIndex = (currentTipIndex + 1) % rotatingTips.length;
};

setInterval(updateRotatingTip, 10000); // Change tip every 10 seconds
updateRotatingTip(); // Initial tip load


// --- Footer Year Logic ---
document.getElementById('year').textContent = new Date().getFullYear();


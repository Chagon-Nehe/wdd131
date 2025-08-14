// --- Daily Tracker Logic with localStorage ---
const trackerItems = document.querySelectorAll('.tracker-item');
const healthScoreDisplay = document.getElementById('health-score');
const resetButton = document.getElementById('reset-button');
const celebrationModal = document.getElementById('celebration-modal');

let dailyData = {
    'Water': 0,
    'Fruits & Veggies': 0,
    'Exercise': 0,
    'Sleep': 0,
    'Hygiene': 0
};

// Function to save data to localStorage
const saveData = () => {
    localStorage.setItem('dailyData', JSON.stringify(dailyData));
};

// Function to load data from localStorage
const loadData = () => {
    const savedData = localStorage.getItem('dailyData');
    if (savedData) {
        dailyData = JSON.parse(savedData);
        // Update the DOM to reflect the loaded data
        trackerItems.forEach(item => {
            const name = item.dataset.name;
            const value = dailyData[name] || 0; // Use 0 if value is null
            updateProgress(item, value, false); // false to not show modal on load
        });
        updateHealthScore();
    }
};

const updateProgress = (item, value, showPopup = true) => {
    const progressFill = item.querySelector('.progress-fill');
    const currentValueDisplay = item.querySelector('.current-value');
    const goal = parseInt(item.dataset.goal);
    
    // Ensure value doesn't go below 0
    const clampedValue = Math.max(0, value);
    dailyData[item.dataset.name] = clampedValue;
    
    const percentage = (clampedValue / goal) * 100;
    progressFill.style.width = `${Math.min(percentage, 100)}%`;
    currentValueDisplay.textContent = clampedValue;
    
    // Check for goal completion, only show modal if it's an increase event
    if (clampedValue >= goal && percentage <= 100 && showPopup) {
        showModal(item.dataset.name);
    }

    saveData(); // Save data after every update
};

const updateHealthScore = () => {
    let score = 0;
    Object.keys(dailyData).forEach(key => {
        const item = document.querySelector(`.tracker-item[data-name="${key}"]`);
        if (item) {
            const goal = parseInt(item.dataset.goal);
            const currentValue = dailyData[key];
            if (currentValue >= goal) {
                score += 20; // 5 goals * 20 points = 100 max score
            }
        }
    });
    healthScoreDisplay.textContent = score;
};

trackerItems.forEach(item => {
    const increaseButton = item.querySelector('[data-action="increase"]');
    const decreaseButton = item.querySelector('[data-action="decrease"]');
    
    increaseButton.addEventListener('click', () => {
        const name = item.dataset.name;
        dailyData[name]++;
        updateProgress(item, dailyData[name]);
        updateHealthScore();
    });
    
    decreaseButton.addEventListener('click', () => {
        const name = item.dataset.name;
        dailyData[name] = Math.max(0, dailyData[name] - 1);
        updateProgress(item, dailyData[name]);
        updateHealthScore();
    });
});

resetButton.addEventListener('click', () => {
    Object.keys(dailyData).forEach(key => dailyData[key] = 0);
    trackerItems.forEach(item => updateProgress(item, 0));
    updateHealthScore();
    saveData(); // Save reset state
});

// Load data when the page first loads
window.addEventListener('load', loadData);

// --- Celebration Popup Logic ---
const showModal = (goalName) => {
    const modal = document.createElement('div');
    modal.id = 'celebration-modal';
    modal.classList.add('celebration-modal');
    modal.innerHTML = `
        <div class="celebration-content">
            <h2 class="modal-title">🌟 Hooray! 🌟</h2>
            <p class="modal-text">You reached your goal for <span id="goal-name" style="font-weight: bold;">${goalName}</span>!</p>
            <p class="modal-text" style="margin-top: 0.5rem;">Great job, little hero!</p>
            <button class="modal-button" onclick="this.closest('.celebration-modal').remove()">Keep it up!</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
};

// --- Footer Year Logic ---
document.getElementById('year').textContent = new Date().getFullYear();


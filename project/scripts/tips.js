// --- Health Tips Page Logic ---
const tipsData = [
    { id: 1, category: 'nutrition', icon: '🍎', title: 'Eat a Rainbow', text: 'Eating fruits and veggies of different colors helps your body get all the vitamins and minerals it needs to be strong.', fact: 'Fun Fact: The color of a fruit or vegetable can tell you what vitamins it has!' },
    { id: 2, category: 'exercise', icon: '🏃‍♂️', title: 'Move Your Body', text: 'Playing outside, dancing, or running around for at least 60 minutes a day makes your heart strong and gives you energy.', fact: 'Fun Fact: Exercise helps your brain learn and remember things better!' },
    { id: 3, category: 'sleep', icon: '😴', title: 'Power Down for Sleep', text: 'Getting enough sleep (9-12 hours for kids) helps your body and brain rest, repair, and grow. Turn off screens before bed!', fact: 'Fun Fact: Your body grows the most while you are sleeping!' },
    { id: 4, category: 'hygiene', icon: '🧼', title: 'Wash Away Germs', text: 'Washing your hands with soap and water for 20 seconds is like putting on a superhero shield against germs that can make you sick.', fact: 'Fun Fact: The average person\'s hands are home to over 1,500 types of bacteria!' },
    { id: 5, category: 'mental-health', icon: '🧠', title: 'Share Your Feelings', text: 'Talking about your feelings with a grown-up or a friend helps you feel better and understand your emotions.', fact: 'Fun Fact: Thinking happy thoughts can actually make you feel better!' },
    { id: 6, category: 'nutrition', icon: '💧', title: 'Drink Your Water', text: 'Your body is like a plant, and it needs water to stay hydrated and work its best. Drink water all day long!', fact: 'Fun Fact: Your body is about 60% water!' },
    { id: 7, category: 'exercise', icon: '🤸‍♀️', title: 'Stretch It Out', text: 'Gentle stretching can help your muscles feel good and prevent them from getting sore. It\'s a great way to start or end the day.', fact: 'Fun Fact: Stretching can make you more flexible, like a superhero!' },
    { id: 8, category: 'sleep', icon: '🌙', title: 'Make a Bedtime Routine', text: 'Having a routine, like reading a book or taking a bath, helps your body know it\'s time to wind down for a good night\'s sleep.', fact: 'Fun Fact: A good night\'s sleep helps you concentrate in school the next day!' }
];

const tipsContainer = document.getElementById('tips-container');
const tipFilters = document.querySelectorAll('.tip-filter');

const renderTips = (category = 'all') => {
    tipsContainer.innerHTML = '';
    const filteredTips = tipsData.filter(tip => category === 'all' || tip.category === category);
    
    filteredTips.forEach(tip => {
        const tipCard = document.createElement('div');
        tipCard.classList.add('tip-card');
        tipCard.innerHTML = `
            <div class="tip-header">
                <span class="tip-icon">${tip.icon}</span>
                <h3 class="tip-title">${tip.title}</h3>
            </div>
            <p class="tip-text">${tip.text}</p>
            <div class="tip-fact">
                <p>Fun Fact: ${tip.fact}</p>
            </div>
        `;
        tipsContainer.appendChild(tipCard);
    });
};

tipFilters.forEach(filter => {
    filter.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        renderTips(category);
        
        // Update filter button styling
        tipFilters.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});

// Initial render for tips page
renderTips();


// --- Footer Year Logic ---
document.getElementById('year').textContent = new Date().getFullYear();



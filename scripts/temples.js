// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the footer
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = currentYear;
    currentYearSpan.id = 'currentYear'; // Correct the ID to match the HTML
}

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the last modified date in the footer
const lastModifiedSpan = document.getElementById('lastModified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last modified: ${lastModifiedDate}`;
}

const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamburger.classList.toggle('show');
});

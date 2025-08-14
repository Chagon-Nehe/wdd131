// A simple Product Array, as requested.
const products = [
    {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-name');
    const form = document.getElementById('review-form');
    const messageBox = document.getElementById('review-count-message');
    const messageText = document.getElementById('message-text');

    // Function to populate the select element from the products array
    function populateProductList() {
        if (!productSelect) {
            console.error("Product select element not found!");
            return;
        }
        
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Function to show a temporary message box
    function showMessage(text) {
        messageText.textContent = text;
        messageBox.style.display = 'block';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000); // Hide after 3 seconds
    }

    // Function to update the review counter in localStorage
    function updateReviewCounter() {
        // Get the current count from localStorage, defaulting to 0 if not found
        let reviewCount = localStorage.getItem('review.html');
        reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;
        
        // Increment the count
        reviewCount++;
        // 
        // Save the new count back to localStorage
        localStorage.setItem('review.html', reviewCount);

        // Show a message to the user confirming the submission
        showMessage(`Review submitted! You have completed ${reviewCount} review(s).`);
    }

    // Add a submit event listener to the form
    form.addEventListener('submit', (event) => {
        // Here we prevent the form from actually submitting to a new page,
        // and instead handle the counter update in place.
        // In a real application, this would be on the 'review.html' page.
        event.preventDefault(); 
        
        // Call the function to update the counter
        updateReviewCounter();
    });

    // Run the function to populate the select list when the page loads
    populateProductList();

});

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the last modified date in the footer
const lastModifiedSpan = document.getElementById('lastModified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last modified: ${lastModifiedDate}`;
}
// week02/scripts/bom.js
const input = document.querySelector('input');
const button = document.querySelector('button');
const ulList = document.querySelector('#list');


const addList= document.createElement('li'); // Create a new list item element
const deleteButton = document.createElement('button'); // Create a new button element for deleting the list item


//addList.textContent = input.value; // Set the text content of the list item to the input value
//deleteButton.textContent = '❌'; // Unicode for a cross mark



//addList.appendChild(deleteButton);// Append the delete button to the list item
//ulList.appendChild(addList);// Append the new list item to the unordered list

// Add an event listener to the delete button to remove the list item when clicked
//deleteButton.addEventListener('click', () => {
    //ulList.removeChild(addList);

//});
// Add an event listener to the button to add a new list item when clicked
button.addEventListener('click', () => {
    if (input.value.trim() !== '') { // Check if the input value is not empty
        const addList = document.createElement('li'); // Create a new list item element
        const deleteButton = document.createElement('button'); // Create a new button element for deleting the list item

        addList.textContent = input.value; // Set the text content of the list item to the input value
        deleteButton.textContent = '❌'; // Unicode for a cross mark

        ulList.appendChild(addList); // Append the new list item to the unordered list
        addList.appendChild(deleteButton); // Append the delete button to the list item

        // Add an event listener to the delete button to remove the list item when clicked
        deleteButton.addEventListener('click', () => {
            ulList.removeChild(addList);
        });

        input.value = ''; // Clear the input field after adding the item
    }
});
const input = document.querySelector('input');
const button = document.querySelector('button');
const ulList = document.querySelector('#list');


const addList= document.createElement('li');
const deleteButton = document.createElement('button');


addList.textContent = input.value;
deleteButton.textContent = '❌'; // Unicode for a cross mark

//
ulList.appendChild(addList);
addList.appendChild(deleteButton);
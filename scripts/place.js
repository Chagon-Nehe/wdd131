const area =document.querySelector('#area')
const population =document.querySelector('#population')
const capital =document.querySelector('#capital')
const timeZone =document.querySelector('#time-zone')
const currency =document.querySelector('#currency')
const language =document.querySelector('#language')
const callingCode =document.querySelector('#calling-code')
const internetTLD =document.querySelector('#internet-tld')


area.innerHTML = `118,484  sq km`
population.innerHTML = `21,240,689`
capital.innerHTML = `Lilongwe`
timeZone.innerHTML = `UTC+2 (CAT)`
currency.innerHTML = `Malawian kwacha (MWK)`
language.innerHTML = `English`
callingCode.innerHTML = `+265`
internetTLD.innerHTML = `.mw`

const weather = document.querySelector('#weather')
weather.innerHTML= `<?xml version="1.0"?><svg viewBox="-250 100 1000 300" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#f8b62d;}.cls-1,.cls-2{stroke:#231815;stroke-miterlimit:10;}.cls-2,.cls-4{fill:#231815;}.cls-3{fill:#fff;}</style></defs><title/><g data-name="图层 1" id="图层_1"><path class="cls-1" d="M236.75,272.11A82.26,82.26,0,0,1,316,241.64a76.19,76.19,0,0,1,10.36,2.59,82.65,82.65,0,0,0-64.92-68.08C228.11,169.4,193.17,185,175.64,214a83,83,0,0,0-4.41,76.58c.47-.46.94-.92,1.42-1.37A70.52,70.52,0,0,1,236.75,272.11Z"/><path class="cls-2" d="M171.23,290.58A83,83,0,0,1,175.64,214c17.54-28.95,52.48-44.6,85.76-37.86a82.65,82.65,0,0,1,64.92,68.08,78.27,78.27,0,0,1,15.84,7.19,98,98,0,0,0-63.86-86.09c-37.69-13.82-81.9-1.62-107.27,29.43-25,30.6-29.26,74.3-10,108.8A67.76,67.76,0,0,1,171.23,290.58Z"/><path class="cls-2" d="M253.07,131.54V97.89c0-9.65-15-9.67-15,0v33.65C238.07,141.19,253.07,141.21,253.07,131.54Zm-7.5-33.65v0Z"/><path class="cls-2" d="M176.66,152.05c4.83,8.36,17.79.81,13-7.57l-16.83-29.15c-4.83-8.36-17.79-.81-13,7.57Zm6.48-3.79-16.83-29.15Z"/><path class="cls-2" d="M141.22,187.49l-29.15-16.83c-8.37-4.84-15.94,8.12-7.57,13l29.15,16.83C142,205.28,149.59,192.32,141.22,187.49Zm-32.93-10.35L137.44,194Z"/><path class="cls-2" d="M87.06,263.9h33.65c9.65,0,9.67-15,0-15H87.06C77.4,248.9,77.39,263.9,87.06,263.9Zm33.65-7.5h0Z"/><path class="cls-2" d="M112.08,342.13l29.15-16.83c8.36-4.83.81-17.79-7.57-13l-29.15,16.83C96.15,334,103.69,347,112.08,342.13Zm25.36-23.3-29.15,16.83Z"/><path class="cls-2" d="M370.42,263.9h33.65c9.65,0,9.67-15,0-15H370.42C360.77,248.9,360.75,263.9,370.42,263.9Zm0-7.5h0Z"/><path class="cls-2" d="M357.48,200.44l29.15-16.83c8.36-4.83.81-17.79-7.57-13l-29.15,16.83C341.55,192.32,349.1,205.28,357.48,200.44Zm25.36-23.3L353.7,194Z"/><path class="cls-2" d="M314.47,152.05l16.83-29.15c4.84-8.37-8.12-15.94-13-7.57l-16.83,29.15C296.68,152.86,309.64,160.42,314.47,152.05Zm10.35-32.93L308,148.27Z"/><path class="cls-2" d="M377.25,293.37c.54,1.41,1.05,2.84,1.51,4.29a7.08,7.08,0,0,1,.16,4.09,51.75,51.75,0,0,1-17.73,100.37H220.54a62.23,62.23,0,0,1-55-91.35c-1-1.44-1.95-2.9-2.86-4.4-.56-.93-1.1-1.87-1.62-2.81a71.25,71.25,0,0,0-9.23,48,69.75,69.75,0,0,0,38.58,51.19c11.68,5.47,23.78,6.86,36.45,6.86H350.31c9.8,0,19.5.28,29-2.82,24.63-8.06,41.85-31.83,41.13-57.87A59.93,59.93,0,0,0,377.25,293.37Z"/><path class="cls-2" d="M220.54,277.65a62.16,62.16,0,0,1,19.18,3,73.75,73.75,0,0,1,87.48-28.16,82.09,82.09,0,0,0-.89-8.29A76.19,76.19,0,0,0,316,241.64a82.26,82.26,0,0,0-79.21,30.47c1.67.38,3.32.82,5,1.33l-8.47,3.45q1.68-2.46,3.5-4.78a70.52,70.52,0,0,0-64.11,17.1c-.48.45-1,.91-1.42,1.38a78.51,78.51,0,0,0,3.63,7.06A62.05,62.05,0,0,1,220.54,277.65Z"/><path class="cls-2" d="M241.72,273.44c-1.65-.51-3.3-.95-5-1.33q-1.82,2.32-3.5,4.78Z"/><path class="cls-2" d="M342.22,260.28A74,74,0,0,1,369,292.76a7.49,7.49,0,0,1,4.52-.35c1.26.27,2.5.6,3.73,1a83.68,83.68,0,0,0-35.1-42c.1,1.65.17,3.31.18,5C342.32,257.7,342.28,259,342.22,260.28Z"/><path class="cls-2" d="M369,292.76a73,73,0,0,1,2.53,6.89,51.3,51.3,0,0,1,7.39,2.1,7.08,7.08,0,0,0-.16-4.09c-.46-1.45-1-2.87-1.51-4.29-1.23-.35-2.47-.68-3.73-1A7.49,7.49,0,0,0,369,292.76Z"/><path class="cls-2" d="M342.33,256.4c.06-8.29-11-9.46-14.15-3.5a73.42,73.42,0,0,1,13.39,7A7.44,7.44,0,0,0,342.33,256.4Z"/><path class="cls-2" d="M342.22,260.28c.06-1.29.11-2.59.12-3.89a7.44,7.44,0,0,1-.77,3.46Z"/><path class="cls-2" d="M165.54,310.77a62.36,62.36,0,0,1,9.32-13.13,78.51,78.51,0,0,1-3.63-7.06,67.76,67.76,0,0,0-10.17,13c.53.94,1.06,1.88,1.62,2.81C163.59,307.87,164.56,309.33,165.54,310.77Z"/><path class="cls-2" d="M327.21,252.51l1,.38c3.17-6,14.22-4.79,14.15,3.5,0-1.67-.08-3.33-.18-5a78.27,78.27,0,0,0-15.84-7.19A82.09,82.09,0,0,1,327.21,252.51Z"/><path class="cls-3" d="M405.36,347.5c1,19.06-10.19,37.28-28.18,44.17-8.12,3.11-16.25,2.95-24.71,2.95H237c-5.48,0-11,.05-16.45,0a54.71,54.71,0,0,1-50-77.11,53.89,53.89,0,0,1,6-10.38c.78-1.05,1.59-2.06,2.44-3,14.38-16.69,37.56-22.69,58.65-16.18,3.34,1,6.63-.74,8.47-3.45,14.64-21.53,41.42-33.13,67.15-28.1a66.85,66.85,0,0,1,13.82,4.31c.87.38,1.73.77,2.57,1.18s1.94,1,2.89,1.49a67,67,0,0,1,31.6,38.11,6.37,6.37,0,0,0,5.31,5.44C388.93,311.09,404.25,327.28,405.36,347.5Z"/><path class="cls-4" d="M378.92,301.75a51.75,51.75,0,0,1-17.73,100.37H220.54a62.24,62.24,0,1,1,19.18-121.44,73.75,73.75,0,0,1,87.48-28.16l1,.38a72.34,72.34,0,0,1,13.39,7c.22.14.44.28.65.43A73.93,73.93,0,0,1,369,292.77c.95,2.24,1.8,4.54,2.53,6.89A50.84,50.84,0,0,1,378.92,301.75Zm-1.74,89.92c18-6.89,29.22-25.11,28.18-44.17-1.11-20.22-16.43-36.41-35.82-40.61a6.37,6.37,0,0,1-5.31-5.44,67,67,0,0,0-31.6-38.11c-1-.52-1.91-1-2.89-1.49s-1.7-.8-2.57-1.18a66.85,66.85,0,0,0-13.82-4.31c-25.73-5-52.51,6.57-67.15,28.1-1.84,2.71-5.13,4.48-8.47,3.45-21.09-6.51-44.27-.51-58.65,16.18-.85,1-1.66,2-2.44,3a53.89,53.89,0,0,0-6,10.38,54.71,54.71,0,0,0,50,77.11c5.48.05,11,0,16.45,0H352.47C360.93,394.62,369.06,394.78,377.18,391.67Z"/></g></svg>`



//decraring weather variables




//decraring my variables
const lat =  "-13.954520692818173"
const long=   "33.78844115229538"
const key = "6f7627c327e3e17f37c4c201b3c13eb1"

//fetching the weather data
const getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;

async function apiFetch() {
  try {
    const response = await fetch(getWeatherURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
   
apiFetch();


//declaring the function to display the results
function displayResults(data){

  const mydescription = document.querySelector("#condition");
  const myTemp = document.querySelector("#temperature");
  const wind   = document.querySelector('#wind')
  const windChillElement= document.querySelector('#wind-chill')
    
  mydescription.textContent = data.weather[0].description;
  myTemp.textContent = Math.round(data.main.temp) + "°C";
  wind.textContent =data.wind.speed + `km/h`;

  const tempV = data.main.temp;
  const windS = data.wind.speed;
  console.log (`${tempV}`)
  console.log (`${windS}`)
  function calculateWindChill(tempV, windS){
  //Calculate wind chill
  //Wind chill is only defined for temperatures 10°C (50°F) or below
  // and wind speeds above 4.8 km/h (3 mph).
  if (tempV > 10 || windS<= 4.8) {
  return `N/A.`;
  }
  let windChill = 13.12 +
  0.6215 * tempV - 11.37 *
  Math.pow(wind, 0.16) +
  0.3965 * tempV * Math.pow(windS ,0.16);

  return parseFloat(windChill.toFixed(2)); // Round to 2 decimal places
   
  }

  const calculatedWindChill = calculateWindChill(tempV, windS);
    
   

    // Check if the element exists before trying to update it
  if (windChillElement) {
      // Update the text content with the calculated value
    windChillElement.textContent = `${calculatedWindChill}`;
  } else {
    console.error('Error: Could not find the HTML element with id="wind-chill"');
  }

}

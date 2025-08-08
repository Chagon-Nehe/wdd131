    const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects as needed
  {
    templeName: "Orlando Florida",
    location: "Orlando, Florida, United States",
    dedicated: "1994, October, 9",
    area: 70000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orlando-florida/1280x800/orlando-temple-lds-818549-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/1280x800/salt-lake-temple-37762.jpg" 
  },
  {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/1280x800/Provo-City-Center-Temple03.jpg"
  },
  {
    templeName: "Helsinki Finland",
    location: "Helsinki, Finland",
    dedicated: "2006, October, 22",
    area: 16350,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-50743-thumb.jpg"
  }
];
createTempleCard(temples);
// add more temple objects as needed and ensure they follow the same structure
// Function to create a temple card
function createTempleCard(temples) {
    document.querySelector('.temples-container').innerHTML = '';
    temples.forEach(temple => {
        // Create the card element
        let templeCard = document.createElement('section');

        
        let name = document.createElement('h2');
        let location = document.createElement('p');
        let dedicated = document.createElement('p');
        let area = document.createElement('p');
        let  imageUrl = document.createElement('img');
        imageUrl.src = temple.imageUrl;
        imageUrl.alt =  `${temple.templeName} image`;
        imageUrl.loading = 'lazy';
        
        // Set the content of the elements
        templeCard.classList.add('temple-card');
        name.textContent = temple.templeName;
        location.innerHTML = `Location: ${temple.location}`;
        dedicated.innerHTML = `Dedicated: ${temple.dedicated}`;
        area.innerHTML = `Area: ${temple.area} sq ft`;
        
        // Append elements to the card
        templeCard.appendChild(imageUrl);
        templeCard.appendChild(name);
        templeCard.appendChild(location);
        templeCard.appendChild(dedicated);
        templeCard.appendChild(area);
    
        // Append the card to the container
        document.querySelector('.temples-container').appendChild(templeCard);
    });
}

// filter temples based on dedication and area
const before = document.querySelector('#before-1900');
before.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear();
        return dedicationYear < 1900;
    }));
});
const after = document.querySelector('#after-2000');
after.addEventListener('click', () => {
    createTempleCard( temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear();
        return dedicationYear > 2000;
    }));
});

const area90000 = document.querySelector('#area-90000');
area90000.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});
const area10000 = document.querySelector('#area-10000');
area10000.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});



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

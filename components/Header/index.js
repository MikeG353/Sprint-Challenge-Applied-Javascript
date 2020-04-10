// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    // create elements
    const headerDiv = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');
    
    // create structure
    headerDiv.appendChild(headerDate);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(headerTemp);

    // add classes
    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    // add content
    headerDate.textContent = 'MARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';

    //return component
    return headerDiv;
}

//append component to HTML header
let header = document.querySelector('.header-container');
header.appendChild(Header());
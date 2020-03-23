// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div')
    const hDateSpan = document.createElement('span')
    const headerHOne = document.createElement('h1')
    const headerSpan = document.createElement('span')


    headerDiv.classList.add('header')
    hDateSpan.classList.add('date')
    headerSpan.classList.add('temp')


    hDateSpan.textContent = "SMARCH 28, 2019"
    headerHOne.textContent = "Lambda Times"
    headerHOne.textContent = "98°"



    headerDiv.appendChild(hDateSpan)
    headerDiv.appendChild(headerHOne)
    headerDiv.appendChild(headerSpan)

    return headerDiv
}




const container = document.querySelector(".header-container");
// / Step 6: add the menu component to the DOM.
container.appendChild(Header())
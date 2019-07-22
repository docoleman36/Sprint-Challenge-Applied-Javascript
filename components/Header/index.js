// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector(".header-container");

function Header(obj) {
  const header = createElement("div");
  header.classList.add('header');
  headerContainer.appendChild(header);

  const span = createElement("span");
  span.classList.add('date');
  span.textContent = "SMARCH 28, 2019";
  header.appendChild(span);

  const h1 = createElement("h1");
  h1.textContent = "Lambda Times";
  header.appendChild(h1);
}

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

function Header(obj) {
  const header = document.createElement("div");
  header.classList.add('header');

  const span = document.createElement("span");
  span.classList.add('date');
  span.textContent = "SMARCH 28, 2019";
  header.appendChild(span);

  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  header.appendChild(h1);

  const span2 = document.createElement("span");
  span2.classList.add('temp');
  span2.textContent = "98°";
  header.appendChild(span2);

  document.querySelector(".header-container").appendChild(header);

}
Header();
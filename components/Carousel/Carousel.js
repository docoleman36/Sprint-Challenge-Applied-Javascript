class Carousel {
  constructor(element) {
    this.element = element;

    const imgSelector = document.querySelectorAll("img");
  }
}

let carousel = document.querySelector(".carousel");

carousel.forEach(cars => {
  return new Carousel(cars);
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

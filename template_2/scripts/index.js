const leftArrow = document.querySelector(".fa-angle-left");
const rightArrow = document.querySelector(".fa-angle-right");
const smallBurgerContainer = document.querySelector(".small-burgers");

const burgers = [
  {
    id: 1,
    image: "images/hamburger.png",
  },
  {
    id: 2,
    image: "images/product2.png",
  },
  {
    id: 3,
    image: "images/hamburger.png",
  },
  {
    id: 4,
    image: "images/product2.png",
  },
  {
    id: 5,
    image: "images/product1.png",
  },
  {
    id: 6,
    image: "images/hamburger.png",
  },
];

let smallBurger = "";

const burgerSection = () => {
  burgers.map((burger) => {
    smallBurger += `
        <div class="sm-burger"><img src=${burger.image} alt="burger"/></div>
       `;
  });

  smallBurgerContainer.innerHTML = smallBurger;

  const myBurgers = document.querySelectorAll(".sm-burger");

  let initialPosition = 0;
  const burgerItems = burgers.length;

  rightArrow.addEventListener("click", () => {
    initialPosition += 1;
    if (initialPosition <= burgerItems - 1) {
      myBurgers[initialPosition].classList.add("opacity");
      const prevPosition = initialPosition - 1;
      myBurgers[prevPosition].classList.remove("opacity");
      console.log(initialPosition);
    } else if (initialPosition === burgerItems) {
      initialPosition = 0;
      myBurgers[initialPosition].classList.add("opacity");
      myBurgers[burgerItems - 1].classList.remove("opacity");
    }
  });

  leftArrow.addEventListener("click", () => {
    initialPosition -= 1;
    if (initialPosition >= 0) {
      myBurgers[initialPosition].classList.add("opacity");
      const prevPosition = initialPosition + 1;
      myBurgers[prevPosition].classList.remove("opacity");
      console.log(initialPosition);
    } else if (initialPosition < 0) {
      initialPosition = burgerItems - 1;
      myBurgers[initialPosition].classList.add("opacity");
      myBurgers[0].classList.remove("opacity");
    }
  });
};

burgerSection();

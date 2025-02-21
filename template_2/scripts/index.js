const leftArrow = document.querySelector(".fa-angle-left");
const rightArrow = document.querySelector(".fa-angle-right");
const smallBurgerContainer = document.querySelector(".small-burgers");

const burgers = [
  {
    id: 1,
    title: "The Ultimate Smash Burger",
    image: "images/hamburger.png",
    desc: "Savor the perfect crispy-edged, juicy smash burger, layered with melted American cheese, caramelized onions, and tangy house sauce on a buttery toasted brioche bun. A bite of pure satisfaction awaits!",
  },
  {
    id: 2,
    title: "Double Trouble Cheeseburger",
    image: "images/product2.png",
    desc: "Twice the beef, twice the cheese, and double the flavor! Our handcrafted double cheeseburger is stacked with premium Angus beef, melted cheddar, and crisp lettuce for a mouthwatering experience you won’t forget",
  },
  {
    id: 3,
    title: "Spicy Inferno Burger",
    image: "images/hamburger.png",
    desc: "Heat lovers, meet your match! Our Spicy Inferno Burger packs a fiery punch with jalapeños, pepper jack cheese, and smoky chipotle mayo on a toasted sesame bun. Dare to take a bite?",
  },
  {
    id: 4,
    title: "BBQ Bourbon Bliss Burger",
    image: "images/product2.png",
    desc: "Smoky, sweet, and savory—this BBQ Bourbon Bliss Burger is a flavor explosion! Hickory-smoked bacon, tangy bourbon BBQ sauce, crispy onion straws, and melted cheddar bring backyard BBQ vibes to every bite.",
  },
  {
    id: 5,
    title: "Truffle Mushroom Swiss Burger",
    image: "images/product1.png",
    desc: "Indulge in elegance with our Truffle Mushroom Swiss Burger. Juicy beef meets sautéed mushrooms, Swiss cheese, and a hint of truffle aioli for a gourmet twist on a classic favorite.",
  },
  {
    id: 6,
    title: "Truffle Mushroom Swiss Burger",
    image: "images/hamburger.png",
    desc: "Plant-based perfection! Our Ultimate Veggie Burger is crafted with a hearty black bean patty, crisp greens, fresh avocado, and zesty vegan aioli for a guilt-free yet deliciously satisfying bite.",
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

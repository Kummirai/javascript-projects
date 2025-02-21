const leftArrow = document.querySelector(".fa-angle-left");
const rightArrow = document.querySelector(".fa-angle-right");
const smallBurgerContainer = document.querySelector(".small-burgers");

const mainProduct = document.querySelector("#main-product");
const mainProductDesc = document.querySelector("#main-product-desc");
const mainProductPrice = document.querySelector("#main-product-price");
const mainProductImg = document.querySelector("#main-product-img");
const nextProductImg = document.querySelector("#next-product-img");

const burgers = [
  {
    id: 1,
    title: "Tripple Chiz Burger",
    image: "images/hamburger.png",
    desc: "Savor the perfect crispy-edged, juicy smash burger, layered with melted American cheese, caramelized onions, and tangy house sauce on a buttery toasted brioche bun. A bite of pure satisfaction awaits!",
    price: "$5.99",
  },
  {
    id: 2,
    title: "D-Tripple Burger",
    image: "images/product3.png",
    desc: "Twice the beef, twice the cheese, and double the flavor! Our handcrafted double cheeseburger is stacked with premium Angus beef, melted cheddar, and crisp lettuce for a mouthwatering experience",
    price: "$4.99",
  },
  {
    id: 3,
    title: "Spicy Inferno Burger",
    image: "images/hamburger.png",
    desc: "Heat lovers, meet your match! Our Spicy Inferno Burger packs a fiery punch with jalapeños, pepper jack cheese, and smoky chipotle mayo on a toasted sesame bun. Dare to take a bite?",
    price: "$5.99",
  },
  {
    id: 4,
    title: "BBQ Bourbon Bliss Burger",
    image: "images/product2.png",
    desc: "Smoky and savory—this BBQ Bourbon Bliss Burger is a flavor explosion! Hickory-smoked bacon, tangy bourbon BBQ sauce, crispy onion straws, and melted cheddar bring backyard BBQ vibes to every bite.",
    price: "$6.50",
  },
  {
    id: 5,
    title: "Mushroom Swiss Burger",
    image: "images/product1.png",
    desc: "Indulge in elegance with our Truffle Mushroom Swiss Burger. Juicy beef meets sautéed mushrooms, Swiss cheese, and a hint of truffle aioli for a gourmet twist on a classic favorite.",
    price: "$7.99",
  },
  {
    id: 6,
    title: "Ultimate Veggie Burger",
    image: "images/product2.png",
    desc: "Plant-based perfection! Our Ultimate Veggie Burger is crafted with a hearty black bean patty, crisp greens, fresh avocado, and zesty vegan aioli for a guilt-free yet deliciously satisfying bite.",
    price: "$4.50",
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

      mainProductDesc.innerHTML = burgers[initialPosition].desc;
      mainProduct.innerHTML = burgers[initialPosition].title;
      mainProductPrice.innerHTML = burgers[initialPosition].price;
      mainProductImg.src = burgers[initialPosition].image;
      nextProductImg.src = burgers[initialPosition - 1].image;
    } else if (initialPosition === burgerItems) {
      initialPosition = 0;
      mainProductDesc.innerHTML = burgers[initialPosition].desc;
      mainProduct.innerHTML = burgers[initialPosition].title;
      mainProductPrice.innerHTML = burgers[initialPosition].price;
      mainProductImg.src = burgers[initialPosition].image;
      nextProductImg.src = burgers[burgers.length - 1].image;

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

      mainProductDesc.innerHTML = burgers[initialPosition].desc;
      mainProduct.innerHTML = burgers[initialPosition].title;
      mainProductPrice.innerHTML = burgers[initialPosition].price;
      mainProductImg.src = burgers[initialPosition].image;
      nextProductImg.src = burgers[initialPosition + 1].image;
    } else if (initialPosition < 0) {
      initialPosition = burgerItems - 1;
      myBurgers[initialPosition].classList.add("opacity");
      myBurgers[0].classList.remove("opacity");

      mainProductDesc.innerHTML = burgers[initialPosition].desc;
      mainProduct.innerHTML = burgers[initialPosition].title;
      mainProductPrice.innerHTML = burgers[initialPosition].price;
      mainProductImg.src = burgers[initialPosition].image;
      nextProductImg.src = burgers[0].image;
    }
  });
};

burgerSection();

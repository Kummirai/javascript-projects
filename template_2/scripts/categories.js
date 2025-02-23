const category = document.querySelector(".categories");
const products = document.querySelector(".products");

const categories = [
  {
    img: "images/product1.png",
    title: "Chicken",
  },
  {
    img: "images/product2.png",
    title: "Burger",
  },
  {
    img: "images/product3.png",
    title: "Chicken",
  },
  {
    img: "images/product4.png",
    title: "Pizza",
  },
  {
    img: "images/product5.png",
    title: "Fries",
  },
  {
    img: "images/product6.png",
    title: "Burger Meal",
  },
  {
    img: "images/hamburger.png",
    title: "Chesse Burger",
  },
  {
    img: "images/product2.png",
    title: "Chips n Chicken",
  },
];

let categoryArticle = "";

const categorySection = () => {
  categories.map((article) => {
    categoryArticle += `
             <article>
              <img src=${article.img} alt=${article.title} />
              <h3>${article.title}</h3>
            </article>
    `;
  });
  console.log(categoryArticle);
  category.innerHTML = categoryArticle;
};

categorySection();

const burgers = [
  {
    id: 1,
    title: "Tripple Chiz Burger",
    image: "images/product6.png",
    desc: "Savor the perfect crispy-edged, juicy smash burger, layered with melted American cheese, caramelized onions, and tangy house sauce on a buttery toasted brioche bun. A bite of pure satisfaction awaits!",
    price: "$5.99",
  },
  {
    id: 2,
    title: "D-Tripple Burger",
    image: "images/product4.png",
    desc: "Twice the beef, twice the cheese, and double the flavor! Our handcrafted double cheeseburger is stacked with premium Angus beef, melted cheddar, and crisp lettuce for a mouthwatering experience",
    price: "$4.99",
  },
  {
    id: 3,
    title: "Spicy Inferno Burger",
    image: "images/product3.png",
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
    image: "images/product5.png",
    desc: "Plant-based perfection! Our Ultimate Veggie Burger is crafted with a hearty black bean patty, crisp greens, fresh avocado, and zesty vegan aioli for a guilt-free yet deliciously satisfying bite.",
    price: "$4.50",
  },
];

let productArticle = "";

const productSection = () => {
  burgers.map((product) => {
    productArticle += `
      <article>
        <div class="img">
          <img src=${product.image} alt=${product.title} />
        </div>
        <h2>${product.title}</h2>
        <h3>${product.price}</h3>
        <div class="buttons">
          <button class="btn wishlist">Wishlist</button>
          <button class="btn order-now">Order now</button>
        </div>
      </article>
    `;
  });
  console.log(productArticle);

  products.innerHTML = productArticle;
};

productSection();

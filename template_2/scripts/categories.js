const category = document.querySelector(".categories");
const products = document.querySelector(".products");
const invoiceContent = document.querySelector(".invoice-content");
const mySubTotal = document.querySelector(".subtotal");

const categories = [
  {
    img: "images/product1.webp",
    title: "Chicken",
  },
  {
    img: "images/product2.webp",
    title: "Burger",
  },
  {
    img: "images/product3.webp",
    title: "Chicken",
  },
  {
    img: "images/product4.webp",
    title: "Pizza",
  },
  {
    img: "images/product5.webp",
    title: "Fries",
  },
  {
    img: "images/product6.webp",
    title: "Burger Meal",
  },
  {
    img: "images/hamburger.webp",
    title: "Chesse Burger",
  },
  {
    img: "images/product2.webp",
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
    image: "images/product6.webp",
    desc: "Savor the perfect crispy-edged, juicy smash burger, layered with melted American cheese, caramelized onions, and tangy house sauce on a buttery toasted brioche bun. A bite of pure satisfaction awaits!",
    price: 599,
  },
  {
    id: 2,
    title: "D-Tripple Burger",
    image: "images/product4.webp",
    desc: "Twice the beef, twice the cheese, and double the flavor! Our handcrafted double cheeseburger is stacked with premium Angus beef, melted cheddar, and crisp lettuce for a mouthwatering experience",
    price: 499,
  },
  {
    id: 3,
    title: "Spicy Inferno Burger",
    image: "images/product3.webp",
    desc: "Heat lovers, meet your match! Our Spicy Inferno Burger packs a fiery punch with jalapeños, pepper jack cheese, and smoky chipotle mayo on a toasted sesame bun. Dare to take a bite?",
    price: 599,
  },
  {
    id: 4,
    title: "BBQ Bliss Burger",
    image: "images/product2.webp",
    desc: "Smoky and savory—this BBQ Bourbon Bliss Burger is a flavor explosion! Hickory-smoked bacon, tangy bourbon BBQ sauce, crispy onion straws, and melted cheddar bring backyard BBQ vibes to every bite.",
    price: 650,
  },
  {
    id: 5,
    title: "Mushroom Swiss Burger",
    image: "images/product1.webp",
    desc: "Indulge in elegance with our Truffle Mushroom Swiss Burger. Juicy beef meets sautéed mushrooms, Swiss cheese, and a hint of truffle aioli for a gourmet twist on a classic favorite.",
    price: 799,
  },
  {
    id: 6,
    title: "Ultimate Veggie Burger",
    image: "images/product5.webp",
    desc: "Plant-based perfection! Our Ultimate Veggie Burger is crafted with a hearty black bean patty, crisp greens, fresh avocado, and zesty vegan aioli for a guilt-free yet deliciously satisfying bite.",
    price: 450,
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
        <h3>$${product.price / 100}</h3>
        <div class="buttons">
          <button class="btn wishlist">Wishlist</button>
          <button data-burger-image=${product.image} data-burger-price=${
      product.price
    } data-burger-title=${
      product.title
    } class="btn order-now">Order now</button>
        </div>
      </article>
    `;
  });

  products.innerHTML = productArticle;
  let customerOrder = [];
  let orderHtml = "";

  const orderButtons = document.querySelectorAll(".order-now");
  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      invoiceContent.innerHTML = "";
      const image = button.getAttribute("data-burger-image");
      const title = button.getAttribute("data-burger-title");
      const price = button.getAttribute("data-burger-priceweb");

      const ordered = {
        name: title,
        img: image,
        cost: price,
      };

      customerOrder = [...customerOrder, ordered];
      let subtotal = 0;
      customerOrder.map((price) => {
        subtotal = subtotal + Number(price.cost);
      });

      mySubTotal.innerHTML = `$${(subtotal / 100).toFixed(2)}`;

      invoiceContent.innerHTML = "";
      orderHtml = "";
      customerOrder.map((order) => {
        orderHtml += `
              <article>
                <div class="product">
                  <img src=${order.img} alt=${order.titie} />
                  <div>
                    <h2>${order.name}</h2>
                    <h3>$${(order.cost / 100).toPrecision(3)}</h3>
                  </div>
                </div>
                <div class="quantity">
                  <i class="fas fa-minus"></i>
                  <p>1</p>
                  <i class="fas fa-plus"></i>
                </div>
              </article>
          `;
      });

      invoiceContent.insertAdjacentHTML("afterbegin", orderHtml);
    });
  });
};

productSection();

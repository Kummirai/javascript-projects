const category = document.querySelector(".categories");

const categories = [
  {
    img: "images/product2.png",
    title: "Chicken",
  },
  {
    img: "images/product2.png",
    title: "Burger",
  },
  {
    img: "images/product2.png",
    title: "Chicken",
  },
  {
    img: "images/product2.png",
    title: "Pizza",
  },
  {
    img: "images/product2.png",
    title: "Fries",
  },
  {
    img: "images/product2.png",
    title: "Burger Meal",
  },
  {
    img: "images/product2.png",
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

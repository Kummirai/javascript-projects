let mealCard = '';
let modalCard = '';
const container = document.querySelector('.root');
const selectButtons = document.querySelectorAll('.select');
const modal = document.querySelector('.modal-container');

const getRecipe = (letter) => {
  const url = `https://themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  fetch(url)
    .then(response => response.json())
    .then(data => (
      data.meals.forEach(recipe => {
        container.innerHTML = mealCard;
        const recipeButtons = document.querySelectorAll('.recipe');

        mealCard += `
        <div class="card-container">
          <img src=${recipe.strMealThumb} alt=${recipe.strMeal}>
          <div class="details">
            <h2>${recipe.strMeal}</h2>
            <p class="category">${recipe.strCategory}</p>
            <p class="area">${recipe.strArea}</p>
          </div>
          <button data-info="${recipe.idMeal}" class="recipe">Get Recipe</button>
        </div>`;

        recipeButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const mealId = button.getAttribute('data-info');
            const myMenu = data.meals.filter((menu) => menu
              .idMeal === mealId);
            myMenu.map((item) => {
              modalCard = `
        <div class="modal-inner-container">
          <div class="modal-card-container">
            <img src=${item.strMealThumb} alt=${item.strMeal}>
            <div class="details">
              <h2>${item.strMeal}</h2>
              <p class="category">${item.strCategory}</p>
              <p class="area">${item.strArea}</p>
          </div>
          <p class="close-modal">&times;</p>
        </div>
        <div class="modal-details">
          <h3>Ingredients</h3>
          <div class="ingredients">
            <ul>
             <li class=${item.strIngredient1 === "" ? "hidden" : "" }>${item.strIngredient2}</li>
              <li class=${item.strIngredient2 === "" ? "hidden" : "" }>${item.strIngredient2}</li>
              <li class=${item.strIngredient3 === "" ? "hidden" : "" }>${item.strIngredient3}</li>
              <li class=${item.strIngredient4 === "" ? "hidden" : "" }>${item.strIngredient4}</li>
              <li class=${item.strIngredient5 === "" ? "hidden" : "" }>${item.strIngredient5}</li>
              <li class=${item.strIngredient6 === "" ? "hidden" : "" }>${item.strIngredient6}</li>
              <li class=${item.strIngredient7 === "" ? "hidden" : "" }>${item.strIngredient7}</li>
              <li class=${item.strIngredient8 === "" ? "hidden" : "" }>${item.strIngredient8}</li>
              <li class=${item.strIngredient9 === "" ? "hidden" : "" }>${item.strIngredient9}</li>
              <li class=${item.strIngredient10 === "" ? "hidden" : "" }>${item.strIngredient10}</li>
              <li class=${item.strIngredient11 === "" ? "hidden" : "" }>${item.strIngredient11}</li>
              <li class=${item.strIngredient12 === "" ? "hidden" : "" }>${item.strIngredient12}</li>
              <li class=${item.strIngredient13 === "" ? "hidden" : "" }>${item.strIngredient13}</li>
              <li class=${item.strIngredient14 === "" ? "hidden" : "" }>${item.strIngredient14}</li>
              <li class=${item.strIngredient15 === "" ? "hidden" : "" }>${item.strIngredient15}</li>
              <li class=${item.strIngredient16 === "" ? "hidden" : "" }>${item.strIngredient16}</li>
              <li class=${item.strIngredient17 === "" ? "hidden" : "" }>${item.strIngredient17}</li>
              <li class=${item.strIngredient18 === "" ? "hidden" : "" }>${item.strIngredient18}</li>
              <li class=${item.strIngredient19 === "" ? "hidden" : "" }>${item.strIngredient19}</li>
            </ul>
          </div>
          <h3>Cooking Instructions</h3>
          <div class="instructions">
            
            <p>${item.strInstructions}</p>
          </div>
        </div>
        `;
              modal.innerHTML = modalCard;
              modal.style.display = "block";
              const closeModal = document.querySelector(
                '.close-modal');
              closeModal.addEventListener('click', () => {
                modal.style.display = "none";
              })
            })
          })
        })

      })))
    .catch(error => console.log(error))
}

getRecipe("e")

selectButtons.forEach(button => {
  button.addEventListener('click', () => {
    mealCard = "";
    getRecipe(button.textContent);
  })
})
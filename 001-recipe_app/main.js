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

        modalCard = `
        <div class="modal-inner-container">
          <div class="modal-card-container">
            <img src=${recipe.strMealThumb} alt=${recipe.strMeal}>
            <div class="details">
              <h2>${recipe.strMeal}</h2>
              <p class="category">${recipe.strCategory}</p>
              <p class="area">${recipe.strArea}</p>
          </div>
          <p class="close-modal">&times;</p>
        </div>
        <div class="modal-details">
          <h3>Ingredients</h3>
          <div class="ingredients">
            <ul>
             <li class=${recipe.strIngredient1 === "" ? "hidden" : "" }>${recipe.strIngredient1}</li>
              <li class=${recipe.strIngredient2 === "" ? "hidden" : "" }>${recipe.strIngredient2}</li>
              <li class=${recipe.strIngredient3 === "" ? "hidden" : "" }>${recipe.strIngredient3}</li>
              <li class=${recipe.strIngredient4 === "" ? "hidden" : "" }>${recipe.strIngredient4}</li>
              <li class=${recipe.strIngredient5 === "" ? "hidden" : "" }>${recipe.strIngredient5}</li>
              <li class=${recipe.strIngredient6 === "" ? "hidden" : "" }>${recipe.strIngredient6}</li>
              <li class=${recipe.strIngredient7 === "" ? "hidden" : "" }>${recipe.strIngredient7}</li>
              <li class=${recipe.strIngredient8 === "" ? "hidden" : "" }>${recipe.strIngredient8}</li>
              <li class=${recipe.strIngredient9 === "" ? "hidden" : "" }>${recipe.strIngredient9}</li>
              <li class=${recipe.strIngredient10 === "" ? "hidden" : "" }>${recipe.strIngredient10}</li>
              <li class=${recipe.strIngredient11 === "" ? "hidden" : "" }>${recipe.strIngredient11}</li>
              <li class=${recipe.strIngredient12 === "" ? "hidden" : "" }>${recipe.strIngredient12}</li>
              <li class=${recipe.strIngredient13 === "" ? "hidden" : "" }>${recipe.strIngredient13}</li>
              <li class=${recipe.strIngredient14 === "" ? "hidden" : "" }>${recipe.strIngredient14}</li>
              <li class=${recipe.strIngredient15 === "" ? "hidden" : "" }>${recipe.strIngredient15}</li>
              <li class=${recipe.strIngredient16 === "" ? "hidden" : "" }>${recipe.strIngredient16}</li>
              <li class=${recipe.strIngredient17 === "" ? "hidden" : "" }>${recipe.strIngredient17}</li>
              <li class=${recipe.strIngredient18 === "" ? "hidden" : "" }>${recipe.strIngredient18}</li>
              <li class=${recipe.strIngredient19 === "" ? "hidden" : "" }>${recipe.strIngredient19}</li>
            </ul>
          </div>
          <h3>Cooking Instructions</h3>
          <div class="instructions">
            
            <p>${recipe.strInstructions}</p>
          </div>
        </div>
        `
        modal.innerHTML = modalCard;
        const closeModal = document.querySelector('.close-modal');

        recipeButtons.forEach((button) => {
          button.addEventListener('click', (id) => {
            modal.style.display = "block";
            const mealId = button.getAttribute('data-info');
            console.log(mealId);
          })
        })


        closeModal.addEventListener('click', () => {
          modal.style.display = "none";
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
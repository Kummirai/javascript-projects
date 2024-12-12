let savedCard = "";

const savedSection = document.querySelector('.saved-section');
const myRecipes = JSON.parse(localStorage.getItem('myRecipes'));

myRecipes?.map((recipe) => {
  savedCard += `<div class="card-container">
                <img src=${recipe.image} alt=${recipe.name} />
                <div class="details">
                    <h2>${recipe.name}</h2>
                    <p class="category">${recipe.category}</p>
                    <p class="area">${recipe.area}</p>
                  </div>
                  <div class="buttons">
                    <i data-info="${recipe.idMeal}" class=" fas fa-eye recipe save "></i>
                    <i data-info="${recipe.idMeal}"class="fas fa-trash"></i>
                    <i data-info="${recipe.idMeal}" class="fas fa-play watch save"></i>
                  </div>
              </div>`;

  savedSection.innerHTML = savedCard;
})
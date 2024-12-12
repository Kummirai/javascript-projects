let savedCard = "";

const savedSection = document.querySelector('.saved-section');
let myRecipes = JSON.parse(localStorage.getItem('myRecipes'));

myRecipes?.map((recipe) => {
  savedCard += `<div class="card-container">
                <img src=${recipe.image} alt=${recipe.name} />
                <div class="details">
                    <h2>${recipe.name}</h2>
                    <p class="category">${recipe.category}</p>
                    <p class="area">${recipe.area}</p>
                  </div>
                  <div class="buttons">
                    <i data-info="${recipe.id}" class=" fas fa-eye recipe save "></i>
                    <i data-info="${recipe.id}"class="fas fa-trash"></i>
                    <i data-info="${recipe.id}" class="fas fa-play watch save"></i>
                  </div>
              </div>`;

  savedSection.innerHTML = savedCard;

  const btns = document.querySelectorAll('.fa-trash');
  btns.forEach((btn) => {

    btn.addEventListener('click', () => {
      const idForRecipe = btn.getAttribute('data-info');
      const recipeToDelete = myRecipes.find((recipe) => recipe
        .id === idForRecipe);

      const index = myRecipes.indexOf(recipeToDelete);
      myRecipes.splice(index, 1);

      localStorage.setItem('myRecipes', JSON.stringify(myRecipes));
      
      alert(`Recipe sucessfully deleted!`)
      
      window.location.href = "savedRecipes.html";
    })
  })
})
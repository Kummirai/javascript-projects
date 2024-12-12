let mealCard = '';
let modalCard = '';
let videoPlayer = '';
const container = document.querySelector('.root');
const selectButtons = document.querySelectorAll('.select');
const modal = document.querySelector('.modal-container');
const recipeByCountry = document.querySelectorAll('.countryList');
const recipeByCategory = document.querySelectorAll('.categoryList');
const vplayer = document.querySelector('.vplayer');
const account = document.querySelector('.account');
const userIcon = document.querySelector('.fa-user');

//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
let categorySelectionStyle = false;
let countrySelectionStyle = false;
let isSelected = false;


const home = () => {
  const isLogged = document.querySelector('.islogged');
  const logInStatus = localStorage.getItem('logInStatus');
  const savedRecipes = document.querySelector('.savedRecipes');

  console.log(logInStatus)

  const username = localStorage.getItem('user');

  const user = document.querySelector('.user');

  if (logInStatus === 'loggedIn') {
    user.textContent = username;
    isLogged.textContent = "Log out";
  }

  isLogged.addEventListener('click', () => {
    if (isLogged.textContent === 'Log out') {
      localStorage.removeItem('logInStatus');
      localStorage.removeItem('user');
      window.location.href = 'index.html'
    } else {
      window.location.href = 'login.html'
    }
  })

  savedRecipes.addEventListener('click', () => {
    if (isLogged.textContent === 'Log out') {
      window.location.href = 'savedRecipes.html'
    } else {
      alert("Login to view your saved recipes")
      window.location.href = "login.html"
    }
  })
}

home();

userIcon.addEventListener('click', () => {
  if (account.classList.contains('show')) {
    account.classList.remove('show')
  } else {
    account.classList.add('show')
  }
})

const getRecipeByCategory = (category) => {
  fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.meals)
      data.meals.map((culture) => {
        mealCard += `
        <div class="card-container">
          <img src=${culture.strMealThumb} alt=${culture.strMeal}>
          <div class="details">
            <h2>${culture.strMeal}</h2>
            <button data-info="${culture.idMeal}" class="recipe">View Recipe</button>
            <button data-info="${culture.idMeal}" class="recipe save">Save Recipe</button>
          </div>
        </div>`;
        container.innerHTML = mealCard;
      })
    })
}

recipeByCategory.forEach((category) => {
  category.addEventListener('click', () => {
    mealCard = "";
    selectButtons.forEach((selectedButton) => {
      if (selectedButton.classList.contains('selected')) {
        selectedButton.classList.remove('selected')
      }
    })

    recipeByCountry.forEach((selectedButton) => {
      if (selectedButton.classList.contains('listStyle')) {
        selectedButton.classList.remove('listStyle')
      }
    })

    categorySelectionStyle = true;
    if (categorySelectionStyle) {
      recipeByCategory.forEach((selectedButton) => {
        if (selectedButton.classList.contains('listStyle')) {
          selectedButton.classList.remove('listStyle')
        }
      })
      category.classList.add('listStyle');
    }
    getRecipeByCategory(category.textContent)
  })
})

const getRecipeByCountry = (country) => {
  fetch(`https://themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    .then(response => response.json())
    .then(data => {
      data.meals.map((culture) => {
        mealCard += `
        <div class="card-container">
          <img src=${culture.strMealThumb} alt=${culture.strMeal}>
          <div class="details">
            <h2>${culture.strMeal}</h2>
            <button data-info="${culture.idMeal}" class="recipe">View Recipe</button>
            <button data-info="${culture.idMeal}" class="recipe save">Save Recipe</button>
          </div>
        </div>`;
        container.innerHTML = mealCard;
      })
    })
}

recipeByCountry.forEach((country) => {
  country.addEventListener('click', () => {
    mealCard = "";
    selectButtons.forEach((selectedButton) => {
      if (selectedButton.classList.contains('selected')) {
        selectedButton.classList.remove('selected')
      }
    })

    recipeByCategory.forEach((selectedButton) => {
      if (selectedButton.classList.contains('listStyle')) {
        selectedButton.classList.remove('listStyle')
      }
    })

    countrySelectionStyle = true;
    if (countrySelectionStyle) {
      recipeByCountry.forEach((selectedButton) => {
        if (selectedButton.classList.contains('listStyle')) {
          selectedButton.classList.remove('listStyle')
        }
      })
      country.classList.add('listStyle');
    }
    getRecipeByCountry(country.textContent)
  })
})

const getRecipe = (letter) => {
  const url = `https://themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  fetch(url)
    .then(response => response.json())
    .then(data => (
      data.meals.forEach(recipe => {
        container.innerHTML = mealCard;
        const recipeButtons = document.querySelectorAll('.recipe');
        const videos = document.querySelectorAll('.watch');

        mealCard += `
        <div class="card-container">
          <img src=${recipe.strMealThumb} alt=${recipe.strMeal}>
          <div class="details">
            <h2>${recipe.strMeal}</h2>
            <p class="category">${recipe.strCategory}</p>
            <p class="area">${recipe.strArea}</p>
          </div>
          <div class="buttons">
            <i data-info="${recipe.idMeal}" class=" fas fa-eye recipe save "></i>
            <i data-info="${recipe.idMeal}"class="fas fa-save"></i>
            <i data-info="${recipe.idMeal}" class="fas fa-play watch save"></i>
          </div>
        </div>`;

        const savedSection = document.querySelector('.saved-section');
        const saved = document.querySelectorAll('.fa-save');
        saved.forEach((save) => {
          save.addEventListener('click', () => {
            console.log("you clicked me!")

            class SavedRecipe {
              constructor(name, image, id, category, area) {
                this.name = name,
                  this.image = image,
                  this.id = id,
                  this.category = category,
                  this.area = area
              }
            }

            const id = save.getAttribute('data-info');
            const myMenu = data.meals.filter((menu) => menu
              .idMeal === id);

            const saveRecipe = new SavedRecipe(
              myMenu[0].strMeal,
              myMenu[0].strMealThumb,
              myMenu[0].idMeal,
              myMenu[0].strCategory,
              myMenu[0].strArea
            );

            let myRecipes = JSON.parse(localStorage.getItem(
              'myRecipes')) || [];

            myRecipes = [...myRecipes, saveRecipe];
            localStorage.setItem('myRecipes', JSON.stringify(
              myRecipes));

            myRecipes = JSON.parse(localStorage.getItem(
              'myRecipes'));
          })
        })

        videos.forEach((button) => {
          button.addEventListener('click', () => {
            const mealId = button.getAttribute('data-info');
            const myMenu = data.meals.filter((menu) => menu
              .idMeal === mealId);
            const userStatus = localStorage.getItem(
              'logInStatus');

            userStatus === 'loggedIn' ?
              myMenu.map((video) => {

                function getYouTubeVideoID(url) {
                  const regExp =
                    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                  const match = url.match(regExp);
                  return (match && match[2].length === 11) ?
                    match[2] : null;
                }
                // Example usage:
                const url = video.strYoutube;
                const videoID = getYouTubeVideoID(url);

                fetch(
                    `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&=snippet,contentDetails,statistics,status`
                  )
                  .then(response => response.json())
                  .then(data => {
                    videoPlayer = `
              <iframe width="800" height="450" src="https://www.youtube.com/embed/${videoID}?rel=0" frameborder="0" allow="accelerometer"; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-picture allowfullscreen></iframe>
              <button class="close-player">Close</button>
            `;
                    vplayer.innerHTML = videoPlayer;
                    vplayer.style.display = "block";
                    const closePlayer = document
                      .querySelector(
                        '.close-player');
                    closePlayer.addEventListener('click',
                      () => {
                        vplayer.style.display = "none";
                      })
                  })
              }) :
              alert("Log in to watch recipe video")
          })
        })


        const isLoggedIn = localStorage.getItem('logInStatus');

        recipeButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const mealId = button.getAttribute('data-info');
            const myMenu = data.meals.filter((menu) => menu
              .idMeal === mealId);
            isLoggedIn === "loggedIn" ?
              myMenu.map((item) => {

                const instructions = item.strInstructions
                  .split(
                    '.');
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
            <ol>${instructions.map(inst =>
                `<li>${inst}</li>`
            )}</ol>
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
              }) : (
                alert('Log in to view and save recipes!')
              )
          })
        })
      })))
    .catch(error => console.log(error))
}

getRecipe("e")

selectButtons.forEach(button => {
  button.addEventListener('click', () => {
    mealCard = "";
    recipeByCountry.forEach((selectedButton) => {
      if (selectedButton.classList.contains('listStyle')) {
        selectedButton.classList.remove('listStyle')
      }
    })

    recipeByCategory.forEach((selectedButton) => {
      if (selectedButton.classList.contains('listStyle')) {
        selectedButton.classList.remove('listStyle')
      }
    })

    getRecipe(button.textContent);
    isSelected = true;
    if (isSelected) {
      selectButtons.forEach((selectedButton) => {
        if (selectedButton.classList.contains('selected')) {
          selectedButton.classList.remove('selected')
        }
      })
      button.classList.add('selected');
    }
  })
})

const signUpForm = document.querySelector('#signup-form');
signUpForm.addEventListener('submit', (event) => {

  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const username = document.querySelector('#username').value;

  class User {
    constructor(username, email, password) {
      this.username = username,
        this.email = email,
        this.password = password
    }
  }

  let newUser = new User(username, email, password);

  let users = JSON.parse(localStorage.getItem('users')) || [];

  let existingUser = users.find(user => user.email === newUser.email);

  if (existingUser?.email !== undefined) {
    alert("User already exists!")
  } else {
    users = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(users));
    alert("User successfully registered!")
    window.location.href = "login.html";
  }
})
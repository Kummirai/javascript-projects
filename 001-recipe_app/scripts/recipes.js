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
    window.location.href = "login.html"
  }
})
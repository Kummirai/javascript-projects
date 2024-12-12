const isLogged = document.querySelector('.islogged');
const logInStatus = localStorage.getItem('logInStatus');
console.log(logInStatus)

const username = localStorage.getItem('user');

const user = document.querySelector('.user');

if(logInStatus === 'loggedIn'){
  user.textContent = username;
  isLogged.textContent = "Log out";
}

isLogged.addEventListener('click', ()=>{
  if(isLogged.textContent === 'Log out'){
    window.location.href = 'index.html'
  }
})
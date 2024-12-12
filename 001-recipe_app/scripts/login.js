const logInForm = document.querySelector('#login');
const isLogged = document.querySelector('.user');

logInForm.addEventListener('submit', (event) => {

  event.preventDefault();

  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  console.log(email, password)

  class LogIn {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  }

  let regUser = new LogIn(email, password);
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let registeredUser = users.find(user => user.email === regUser.email);

  if (registeredUser && registeredUser.password === regUser.password) {
    alert("Login successful!");
    
    const logInStatus = 'loggedIn';
    const user = registeredUser.username;
    
    localStorage.setItem('logInStatus', logInStatus);
    localStorage.setItem('user', user);
    
    window.location.href = "recipes.html";
  } else {
    alert("Invalid email or password!");
  }
});
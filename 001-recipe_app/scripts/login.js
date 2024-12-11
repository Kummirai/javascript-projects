const logInForm = document.querySelector('#login');

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
    window.location.href = "recipes.html";
  } else {
    alert("Invalid email or password!");
  }
});
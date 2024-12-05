const form = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {

  
  const password = passwordInput.value;
  if (password.length < 8) {
    passwordError.textContent = 'Пароль должен быть не менее 8 символов!';
    return;
  }
  passwordError.textContent = ''; 


  alert('Поздравляю! Вы вошли!');
});

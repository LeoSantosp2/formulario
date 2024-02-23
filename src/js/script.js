const btnLogin = document.querySelector('.btn-login');
const btnRegister = document.querySelector('.btn-register');
const divToggle = document.querySelector('.div-toggle');
const divLeft = document.querySelector('.left');
const divRight = document.querySelector('.right');

btnLogin.addEventListener('click', () => {
  divToggle.classList.remove('toggle-left');
  divToggle.classList.add('toggle-right');

  divLeft.classList.add('hidden');
  divRight.classList.remove('hidden');
});

btnRegister.addEventListener('click', () => {
  divToggle.classList.remove('toggle-right');
  divToggle.classList.add('toggle-left');

  divLeft.classList.remove('hidden');
  divRight.classList.add('hidden');
});

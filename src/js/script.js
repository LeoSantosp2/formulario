const btnLogin = document.querySelector('.btn-login');
const btnRegister = document.querySelector('.btn-register');
const divToggle = document.querySelector('.div-toggle');
const divLeft = document.querySelector('.left');
const divRight = document.querySelector('.right');
const btnEyeOnLogin = document.querySelector('.eye-on-login');
const btnEyeOffLogin = document.querySelector('.eye-off-login');
const inputPasswordLogin = document.querySelector('.input-password-login');
const inputPasswordRegister = document.querySelector(
  '.input-password-register',
);
const inputConfirmPasswordRegister = document.querySelector(
  '.input-confirmPassword-register',
);
const btnEyeOnPasswordRegister = document.querySelector(
  '.eye-on-password-register',
);
const btnEyeOffPasswordRegister = document.querySelector(
  '.eye-off-password-register',
);
const btnEyeOnConfirmPasswordRegister = document.querySelector(
  '.eye-on-confirmPassword-register',
);
const btnEyeOffConfirmPasswordRegister = document.querySelector(
  '.eye-off-confirmPassword-register',
);

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

btnEyeOnLogin.addEventListener('click', () => {
  btnEyeOffLogin.classList.remove('hidden');
  btnEyeOnLogin.classList.add('hidden');

  inputPasswordLogin.attributes.type.nodeValue = 'text';
});

btnEyeOffLogin.addEventListener('click', () => {
  btnEyeOnLogin.classList.remove('hidden');
  btnEyeOffLogin.classList.add('hidden');

  inputPasswordLogin.attributes.type.nodeValue = 'password';
});

btnEyeOnPasswordRegister.addEventListener('click', () => {
  btnEyeOffPasswordRegister.classList.remove('hidden');
  btnEyeOnPasswordRegister.classList.add('hidden');

  inputPasswordRegister.attributes.type.nodeValue = 'text';
});

btnEyeOffPasswordRegister.addEventListener('click', () => {
  btnEyeOnPasswordRegister.classList.remove('hidden');
  btnEyeOffPasswordRegister.classList.add('hidden');

  inputPasswordRegister.attributes.type.nodeValue = 'password';
});

btnEyeOnConfirmPasswordRegister.addEventListener('click', () => {
  btnEyeOffConfirmPasswordRegister.classList.remove('hidden');
  btnEyeOnConfirmPasswordRegister.classList.add('hidden');

  inputConfirmPasswordRegister.attributes.type.nodeValue = 'text';
});

btnEyeOffConfirmPasswordRegister.addEventListener('click', () => {
  btnEyeOnConfirmPasswordRegister.classList.remove('hidden');
  btnEyeOffConfirmPasswordRegister.classList.add('hidden');

  inputConfirmPasswordRegister.attributes.type.nodeValue = 'password';
});

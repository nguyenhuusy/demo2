const $username = document.getElementById('username');
const $usernameInput = $username.querySelector('input');
const $formButton = document.getElementById('formButton');

$formButton.addEventListener('click', function(e) {
  e.preventDefault();
  const username = $usernameInput.value;
  console.log(username);
  if (username.length < 3) {
    $username.querySelector('.form-error').innerText = 'Username must be between 3 to 40 characters';
  } else {
    $username.querySelector('.form-error').innerText = '';
  }
})

$usernameInput.addEventListener('change', function(e) {
  console.log('change', this.value);
})
console.log('haha')
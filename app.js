const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter the fields';

    setTimeout(() => {
      msg.remove();
    }, 3000);
  }
  else {
        localStorage.setItem(nameInput.value, emailInput.value);
  }
}
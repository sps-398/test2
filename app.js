const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
let deleteButton=null;

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
        let user = {
          name: nameInput.value,
          email: emailInput.value,
          phone: phoneInput.value
        }

        localStorage.setItem(user.email, JSON.stringify(user));

        const ul = document.getElementById('users');
        const li = document.createElement('li');
        li.className = 'item';
        const userInfo = `${nameInput.value},${emailInput.value},${phoneInput.value}`;
        li.appendChild(document.createTextNode(userInfo));

        deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('DELETE'));
        deleteButton.style.color = 'black';
        li.appendChild(deleteButton);
        ul.appendChild(li);
        
        deleteButton.addEventListener('click', (e) => {
          ul.removeChild(li);
          localStorage.removeItem(user.email);
        });
      }

    }
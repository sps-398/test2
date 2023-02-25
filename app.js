const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
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
        let user = {
          name: nameInput.value,
          email: emailInput.value,
          phone: phoneInput.value
        }

        let db = localStorage.getItem('db');
        
        if(db != null) {
          const users = JSON.parse(db).users;
          users.push(user);
          localStorage.setItem("db", JSON.stringify({ users: users }));
        }
        else {
          const users = { users: [user] };
          localStorage.setItem("db", JSON.stringify(users));
        }

        const ul = document.getElementById('users');
        const li = document.createElement('li');
        li.className = 'item';
        const userInfo = `name: ${nameInput.value}, email: ${emailInput.value}, phone: ${phoneInput.value}`;
        li.appendChild(document.createTextNode(userInfo));
        ul.appendChild(li);
  }
}
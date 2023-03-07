const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
let deleteButton=null;

const axiosInstance = axios.create({
  baseURL: 'https://crudcrud.com/api/17b600199f2341579514427291e5e90b/appointmentData'
});

render();

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
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

        try{
          const result = await axiosInstance.post('/', user);
          form.reset();
          render();
        } catch(err) {
          console.log(err);
        }        
      }

    }

    async function render() {
        let res;
        try {
          res = await axiosInstance.get('/');
        } catch(err) {
          console.log(err);
          return;
        }

        const users = res.data;

        const ul = document.getElementById('users');
        ul.innerHTML = '';

        users.forEach(user => {
          const uid = user._id;
          const li = document.createElement('li');
          li.className = 'item';
          li.id = uid;
          const userInfo = `${user.name},${user.email},${user.phone}`;
          li.appendChild(document.createTextNode(userInfo));

          deleteButton = document.createElement('button');
          editButton = document.createElement('button');

          deleteButton.style.color = 'black';
          editButton.style.color = 'black';

          deleteButton.appendChild(document.createTextNode('DELETE'));
          editButton.appendChild(document.createTextNode('EDIT'));
          li.appendChild(deleteButton);
          li.appendChild(editButton);
          ul.appendChild(li);
          
          deleteButton.addEventListener('click', (e) => {
            deleteUser(li.id);
          });

          editButton.addEventListener('click', (e) => {
            editUser(user);
          });
        });
      }

    async function editUser(user) {
      deleteUser(user._id);
      
      nameInput.value = user.name;
      emailInput.value = user.email;
      phoneInput.value = user.phone;

      render();
    }

    async function deleteUser(id) {
      try {
        await axiosInstance.delete(`/${id}`)
        render();
      } catch(err) {
        console.log(err);
      }
    }
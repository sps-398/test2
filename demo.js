// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// document.all[10].textContent = 'Hello';
// const headertitle = document.getElementById('header-title');
// console.log(headertitle);

// headertitle.textContent = 'Hello';
// headertitle.innerText = 'Goodbye';
// console.log(document.textContent);
// console.log(document.innerText);
// headertitle.innerHTML = "<h3>Hello</h3>";

// document.title = 'Hello';

// const header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px black';

// const title = document.getElementsByClassName('title');
// title[0].style.fontWeight = 'bold';
// title[0].style.color = 'green';

const items = document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor = 'green';

// Gives error
// for(let i in items) {
//     items[i].style.fontWeight = 'bold';
// }

const itemsByTag = document.getElementsByTagName('li');

for(let i in itemsByTag) {
    itemsByTag[i].style.backgroundColor = 'red';
}
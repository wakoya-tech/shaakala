/*const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);
const listitems = document.querySelectorAll('.list-items');
for(i=0; i < listitems.length; i++)
{
  listitems[i].style.fontSize = '1rem';  
}

console.log(listitems);*/
const ul = document.querySelector('ul');
const li= document.createElement('li');
ul.append(li)

const firstListitems = document.querySelector('.list-items');
console.log(firstListitems.innerText);
console.log(firstListitems.anyContent);
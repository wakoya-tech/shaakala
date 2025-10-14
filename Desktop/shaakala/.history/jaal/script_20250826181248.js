const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);
const listitems = document.querySelectorAll('.list-items');
for(i=0; i < listitems.length; i++)
{
  listitems.style.fontSize = '5rem';  
}

console.log(listitems);
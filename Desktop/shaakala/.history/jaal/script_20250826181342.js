const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);
const listitems = document.querySelectorAll('.list-items');
for(i=0; i < listitems.length; i++)
{
  listitems[i].style.fontSize = '1rem';  
}

console.log(listitems);
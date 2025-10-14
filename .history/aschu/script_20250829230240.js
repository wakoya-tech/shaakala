/* document.querySelector('.football').addEventListener('click', function(e)
 {
    console.log('football is clicked');
    const target = e.target;
    if(target.matches('li'))
    {
        target.style.backgroundColor = 'lightgrey'
    }
})
document.querySelector('.basketball').addEventListener('click',function(e){
   console.log('basketball is clicked');
    const target = e.target;
    if(target.matches('li'))
    {
        target.style.backgroundColor='lightgrey'
    }
})
document.querySelector('.boxing').addEventListener('click',function(e){
console.log('boxing is clicked');
const target = e.target;
if(target.matches('li')){
    target.style.backgroundColor='lightgrey'
}
})
document.querySelector('.tennis').addEventListener('click',function(e){
   console.log('Tennis is clicked');
    const target=e.target;
    if(target.matches('li')){
        target.style.backgroundColor='lightgrey'
    }
})
document.querySelector('.golf').addEventListener('click',function(e){
    console.log('golf is clicked' );
    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor ='lightgrey'
    }
})*/
document.querySelector('.lists').addEventListener('click',function(e){
    console.log(e.target.getAttribute('class') + ' is clicked');
const target = e.target;
if(target.matches('li')){
    target.style.backgroundColor='lightgrey'
}
})
const sport=document.querySelector('.lists');
const newSport = document.createElement('li');
newSport.innerText='wako';
newSport.setAttribute('class','wako');
sport.appendChild(newSport)
newSport.innerText= 'rugby';
newSport.setAttribute('class','rugby')
sport.appendChild(newSport);
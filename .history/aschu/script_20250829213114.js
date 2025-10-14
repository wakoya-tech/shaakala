 document.querySelector('.football').addEventListener('click', function(e)
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
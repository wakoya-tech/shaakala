 document.querySelector('list-items').addEventListener('click', function(e)
 {
    console.log('football is clicked');
    const target = e.target;
    if(target.matches('li'))
    {
        target.style.backgroundColor = 'lightgrey'
    }
})
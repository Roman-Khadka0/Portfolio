let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button')
buttons.forEach(function(button){
button.addEventListener('click',function(e){
    if(e.target.id==='black'){
        body.style.backgroundColor = e.target.id;
        body.style.color = 'white'
    }
        if(e.target.id==='white'){
            body.style.backgroundColor =e.target.id ;
            body.style.color = 'black'

        }
    
})
})
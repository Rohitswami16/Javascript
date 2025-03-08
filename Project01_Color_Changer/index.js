
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e)  {
        switch(e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'red':
                body.style.backgroundColor = 'red';
                break;
            case 'purple':
                body.style.backgroundColor = 'purple';
                break;
            case 'pink':
                body.style.backgroundColor = 'pink';
                break;
            case 'green':
                body.style.backgroundColor = 'green';
                break;
        }
    })  
})
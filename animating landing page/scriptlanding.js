const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');
// console.log(open);
// console.log(close);
// console.log(container);
open.addEventListener('click' , function(){
    // container.style.transform=rotate(75deg);
    container.classList.add('show-nav')
})
close.addEventListener('click', function() {
    container.classList.remove('show-nav')
})
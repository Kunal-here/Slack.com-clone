const hamburger = document.getElementById('hamburger');
const ul = document.querySelector('.ul')

hamburger.addEventListener('click',()=>{
    ul.classList.toggle('newUl');
})
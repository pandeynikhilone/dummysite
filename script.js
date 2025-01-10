let crossBtn = document.querySelector('.fa-x');
let menuBtn = document.querySelector('.fa-bars');

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('hide-btn');
    crossBtn.classList.toggle('hide-btn');
});

crossBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('hide-btn');
    crossBtn.classList.toggle('hide-btn');
});
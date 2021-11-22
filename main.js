// Variables
const hamburgerMenuOpen = document.querySelector(`.fas.fa-bars`)
const hamburgerMenuContent = document.querySelector(`.hamburger-menu`)
const hamburgerMenuClose = document.querySelector(`.close`)

// console.log(hamburgerMenuOpen, hamburgerMenuContent, hamburgerMenuClose);
// End Variables 

// Open Hamburger Menù
hamburgerMenuOpen.addEventListener(`click`, function(){
    hamburgerMenuContent.classList.add(`active`);
})

// Close Hamburger Menù
hamburgerMenuClose.addEventListener(`click`, function(){
    hamburgerMenuContent.classList.remove(`active`);
})
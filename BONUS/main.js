// Variables
const hamburgerMenuOpen = document.querySelector(`.header-right a i`);
const hamburgerMenuContent = document.querySelector(`.hamburger-menu`);
const hamburgerMenuClose = document.querySelector(`.close`);

// EXERCISE
// ***********************************************************
// // Open Hamburger Menù                                    *
// hamburgerMenuOpen.addEventListener(`click`, function(){   *
//     hamburgerMenuContent.classList.add(`active`);         *
// })                                                        *
//                                                           *
// // Close Hamburger Menù                                   *
// hamburgerMenuClose.addEventListener(`click`, function(){  *
//     hamburgerMenuContent.classList.remove(`active`);      *
// })                                                        *
// ***********************************************************
// END EXERCISE

// BONUS .className
// // Open Hamburger Menù
// hamburgerMenuOpen.addEventListener('click', function(){
//     hamburgerMenuContent.className = hamburgerMenuContent.classList + " active";
// })

// // Close Hamburger Menù
// hamburgerMenuClose.addEventListener(`click`, function(){
//     hamburgerMenuContent.classList.remove(`active`);
// })
// END BONUS .className

// BONUS .style
// Open Hamburger Menù
hamburgerMenuOpen.addEventListener(`click`, function(){
    hamburgerMenuContent.style.display = "block";
})

// Close Hamburger Menù
hamburgerMenuClose.addEventListener(`click`, function(){
    hamburgerMenuContent.style.display = "none";
})
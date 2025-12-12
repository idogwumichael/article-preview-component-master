/** get element with class */
const icon = document.querySelector('.bg-icon');
const popUp = document.querySelector('.pop-up');
const triangle = document.querySelector('.triangle');

//**the pointer is moved onto an element */
icon.addEventListener('click', () => {
    popUp.classList.toggle("sr-only");
    triangle.classList.toggle("sr-only");
})


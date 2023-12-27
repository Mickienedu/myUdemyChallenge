//PROJECT #2: Modal Window
'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');  //close icon
const btnsOpenModal = document.querySelectorAll('.show-modal'); 

// console.log(btnsOpenModal);
const openModal = function () {
    // console.log('button clicked');
modal.classList.remove('hidden') /*do not use dot on the class name, the dot is only for selector */;
overlay.classList.remove('hidden'); //the show modals will go dark once clicked
}
// closing the modal, we create a function 
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


/*TO SHOW ALL THE CONTENTS IN THE btnShowModal*/
// for(let i = 0; i < btnsOpenModal.length; i++) // i didnt use {} here becoz i only wants to execute one line of code
//     console.log(btnsOpenModal[i].textContent);
for(let i = 0; i < btnsOpenModal.length; i++) 
    btnsOpenModal[i].addEventListener('click', openModal);

 //the show modals will go dark once clicked

// when the button is clicked, then the modal will close 
btnCloseModal.addEventListener('click', closeModal);
//when you click on the overlay, the modal should close too
overlay.addEventListener('click', closeModal);

// 81. Handling an "Esc" Keypress Event
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape' &&  !modal.classList.contains('hidden')) {
        closeModal();
    }
} )
        


    //80. . Working With Classes
    
// 81. Handling an "Esc" Keypress Event
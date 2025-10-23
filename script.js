const registerBtn = document.getElementById('registerBtn');
const signinBtn = document.getElementById('signinBtn');

const overlayContainer = document.querySelector('.overlay-container');
const overlayLeft = document.querySelector('.overlay-left');
const overlayRight = document.querySelector('.overlay-right');

registerBtn.addEventListener('click', () => {
  
  overlayContainer.classList.add('overlay-toggleRight');
  overlayContainer.classList.remove('overlay-toggleLeft');
});
signinBtn.addEventListener('click', () => {
  overlayContainer.classList.remove('overlay-toggleRight');
  overlayContainer.classList.add('overlay-toggleLeft');
});
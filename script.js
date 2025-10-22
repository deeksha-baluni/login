const registerBtn = document.getElementById('registerBtn');
const signinBtn = document.getElementById('signinBtn');

const overlayContainer = document.querySelector('.overlay-container');
const overlayLeft = document.querySelector('.overlay-left');
const overlayRight = document.querySelector('.overlay-right');

registerBtn.addEventListener('click', () => {
  overlayContainer.classList.add('overlay-toggleRight');
  overlayLeft.classList.add('moveLeft');
});
signinBtn.addEventListener('click', () => {
  overlayContainer.classList.remove('overlay-toggleRight');
  overlayLeft.classList.remove('moveLeft');
});
//responsive design element
//changes the top bar to become a drop down menu
document.getElementById('menu-icon').addEventListener('click', function() {
    var topBar = document.getElementById('top-bar');
    topBar.classList.toggle('show-menu');
});


// dark mode and light mode
document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.carousel-slides');
  const totalItems = document.querySelectorAll('.carousel-item').length;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = totalItems - 1;
  if (currentIndex >= totalItems) currentIndex = 0;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

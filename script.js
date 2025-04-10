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


function scrollCarousel(direction) {
    const track = document.getElementById("carouselTrack");
    const scrollAmount = 270; // adjust to your card width + gap
    track.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  
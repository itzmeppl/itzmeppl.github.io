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


  
document.getElementById("resume-link").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior

  // Replace the content of #main-content with an iframe to display the PDF
  document.getElementById("body").innerHTML = `
    <iframe src="resume_a25.pdf" style="width: 98vw; height: 98vh; border: none; "></iframe>
    <button id="back-button" style="position: fixed; top: 10px; left: 10px; z-index: 4; padding: 10px; background:rgb(83, 155, 167); color: white; border: none; border-radius: 5px; cursor: pointer;">Back</button>
  `;

  // Add functionality to go back to the original content
  document.getElementById("back-button").addEventListener("click", function () {
    location.reload(); // Reload the page to restore the original content
  });
});



function scrollCarousel(direction) {
  const track = document.getElementById("carouselTrack");
  const scrollAmount = 270; // adjust to your card width + gap
  track.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

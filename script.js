//responsive design element
//changes the top bar to become a drop down menu
document.getElementById('menu-icon').addEventListener('click', function() {
    var topBar = document.getElementById('top-bar');
    topBar.classList.toggle('show-menu');
});


// dark mode and light mode
document.getElementById('re-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

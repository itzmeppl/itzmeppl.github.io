//responsive design element
//changes the top bar to become a drop down menu
document.getElementById('menu-icon').addEventListener('click', function() {
    var topBar = document.getElementById('top-bar');
    topBar.classList.toggle('show-menu');
});


// dark mode and light mode
var darkModeEnabled = false;
document.getElementById('dark-mode').addEventListener('click', function() {
    darkModeEnabled = !darkModeEnabled;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
});
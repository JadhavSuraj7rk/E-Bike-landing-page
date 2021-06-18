
// Resposnive image map 
$(document).ready(function() {
    $('img[usemap]').imageMap();
});


// Resposnive navbar
var menu = document.querySelector
('#menu-toggle');

var navbar = document.querySelector('#navbar');

menu.onclick = () =>{
        navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}
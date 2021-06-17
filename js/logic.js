var menu = document.querySelector
('#menu-toggle');

var navbar = document.querySelector('#navbar');

menu.onclick = () =>{
        navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}
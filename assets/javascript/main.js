let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

/*===== NAVBAR =====*/
menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

/*===== NOTIFICATION =====*/
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active');
} 

/*===== CUSTOM SCROLL BAR =====*/
window.onscroll = function() {mufunction()};

function mufunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
}
//togle kelas aktif untuk searc-form

const navbarNav = document.querySelector('.navbar-nav');

const SearhForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');


document.querySelector('#search-button').onclick = ( ) =>{
    SearhForm.classList.toggle('active');
}
import '@babel/polyfill';
import { login, logout } from "./login.js";
// import { displayMap } from './mapbox.js';

// Remove comments, set up key and remove comments in tour.pug to use mapbox
// const mapbox = document.getElementById('map');
// if(mapbox) {
//     const locations = JSON.parse(mapbox.dataset.locations);
//     displayMap(locations);
// }

const loginForm = document.querySelector('.form')
const logoutButton = document.querySelector('.nav__el--logout');

if(loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });
};

if(logoutButton) {
    logoutButton.addEventListener('click', logout);
};
import '@babel/polyfill';
import { login, logout } from "./login.js";
import { updateData } from './updateSettings.js';

// import { displayMap } from './mapbox.js';

// Remove comments, set up key and remove comments in tour.pug to use mapbox
// const mapbox = document.getElementById('map');
// if(mapbox) {
//     const locations = JSON.parse(mapbox.dataset.locations);
//     displayMap(locations);
// }

const loginForm = document.querySelector('.form--login')
const logoutButton = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');

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

if(userDataForm) {
    userDataForm.addEventListener('submit', e => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('email', document.getElementById('email').value);
        form.append('photo', document.getElementById('photo').files);
        updateData(form, 'data');
    });
};

if(userPasswordForm) {
    userPasswordForm.addEventListener('submit', async e => {
        e.preventDefault();
        document.querySelector('.btn--save-password').textContent = 'Updating...';

        const passwordCurrent = document.getElementById('password-current').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('password-confirm').value;
        await updateData({ passwordCurrent, password, passwordConfirm }, 'password');

        document.querySelector('.btn--save-password').textContent = 'Save Password';
        document.getElementById('password-current').value = '';
        document.getElementById('password').value = '';
        passwordConfirm = document.getElementById('password-confirm').value = '';
    });
}
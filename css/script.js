const showLogin = document.getElementById('showLogin');
const showRegister = document.getElementById('showRegister');
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const homeSection = document.getElementById('homeSection');

showLogin.addEventListener('click', () => {
    homeSection.style.display = 'none';
    loginSection.style.display = 'block';
});

showRegister.addEventListener('click', () => {
    homeSection.style.display = 'none';
    registerSection.style.display = 'block';
});

document.getElementById('switchToRegister').addEventListener('click', () => {
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
});

document.getElementById('switchToLogin').addEventListener('click', () => {
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});
const { createWindow } = require('./main');
const { app } = require('electron');

const btn = document.querySelector('toggle-btn');

btn.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active')
});

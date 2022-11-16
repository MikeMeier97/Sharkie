let canvas;
let ctx;
let character = new Image();


function init() {
    canvas = document.getElementById('canvas');
    character.src = '../assets/img/sharkie/1.IDLE/1.png';
    ctx = canvas.getContext('2d');
}
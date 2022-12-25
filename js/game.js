let canvas;
let world;
let keyboard = new Keyboard();

function startGame() {
  document.getElementById('game').classList.remove('d-none');
  document.getElementById('startScreen').classList.add('d-none');
  initLevel();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}
function openFullScreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function exitFullScreen() {
  if(document.exitFullscreen){
    document.exitFullscreen;
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen;
  }
}
function fullScreen() {
  let fullScreen = document.getElementById('fullscreen');
  openFullScreen(fullScreen);
}
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});
document.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

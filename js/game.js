let canvas;
let world;
let keyboard = new Keyboard();
let infoActiv = false;


/**
 * Load the game context 
 */
function startGame() {
  document.getElementById("game").classList.remove("d-none");
  document.getElementById("startScreen").classList.add("d-none");
  addIcons();
  initLevel();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

/**
 * load the fullscreen
 * @param {canvas} elem 
 */
function openFullScreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}


/**
 * show the info img 
 */
function showInfo() {
  if (!infoActiv) {
    document.getElementById("infoPopup").classList.remove("d-none");
    document.getElementById("popUpContent").classList.add("bg-black");
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('controllPanel').classList.add('d-none');
    infoActiv = true;
  } else {
    document.getElementById("infoPopup").classList.add("d-none");
    document.getElementById("popUpContent").classList.remove("bg-black");
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('controllPanel').classList.remove('d-none');
    infoActiv = false;
  }
}


/**
 * remove the icons (sound, fullscreen)
 */
function removeIcons() {
  document.getElementById("fullscreen").classList.add("d-none");
  document.getElementById("sound").classList.add("d-none");
  document.getElementById("infoPopupIcon").classList.add("d-none");
}


/**
 * show the icons (sound, fullscreen)
 */
function addIcons() {
  document.getElementById("fullscreen").classList.remove("d-none");
  document.getElementById("sound").classList.remove("d-none");
}

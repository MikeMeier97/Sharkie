let canvas;
let world;
let keyboard = new Keyboard();
let infoActiv = false;
const controller = document.querySelector(".controller");
const aktionButtons = document.querySelector(".aktionButtons");

function startGame() {
  document.getElementById("game").classList.remove("d-none");
  document.getElementById("startScreen").classList.add("d-none");
  addIcons();
  initLevel();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}
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

controller.addEventListener("touchstart", (e) => {
  if (e.target.alt === "backward") {
    keyboard.LEFT = true;
    e.target.setPointerCapture(e.pointerId);
  }
  if (e.target.alt === "forward") {
    keyboard.RIGHT = true;
    e.target.setPointerCapture(e.pointerId);
  }
});

controller.addEventListener("touchend", (e) => {
  if (e.target.alt === "backward") {
    keyboard.LEFT = false;
    e.target.releasePointerCapture(e.pointerId);
  }
  if (e.target.alt === "forward") {
    keyboard.RIGHT = false;
    e.target.releasePointerCapture(e.pointerId);
  }
});

aktionButtons.addEventListener("touchstart", (e) => {
  if (e.target.alt === "buttonX") {
    keyboard.X = true;
    e.target.setPointerCapture(e.pointerId);
  }
  if (e.target.alt === "up") {
    keyboard.UP = true;
    e.target.setPointerCapture(e.pointerId);
  }
  if (e.target.alt === "down") {
    keyboard.DOWN = true;
    e.target.setPointerCapture(e.pointerId);
  }
});

aktionButtons.addEventListener("touchend", (e) => {
  if (e.target.alt === "buttonX") {
    keyboard.X = false;
    e.target.releasePointerCapture(e.pointerId);
  }
  if (e.target.alt === "up") {
    keyboard.UP = false;
    e.target.releasePointerCapture(e.pointerId);
  }
  if (e.target.alt === "down") {
    keyboard.DOWN = false;
    e.target.releasePointerCapture(e.pointerId);
  }
});
function showInfo() {
  if (!infoActiv) {
    document.getElementById("infoPopup").classList.remove("d-none");
    document.getElementById("popUpContent").classList.add("bg-black");
    infoActiv = true;
  } else {
    document.getElementById("infoPopup").classList.add("d-none");
    document.getElementById("popUpContent").classList.remove("bg-black");
    infoActiv = false;
  }
}

function removeIcons() {
  document.getElementById("fullscreen").classList.add("d-none");
  document.getElementById("sound").classList.add("d-none");
  document.getElementById("infoPopupIcon").classList.add("d-none");
}
function addIcons() {
  document.getElementById("fullscreen").classList.remove("d-none");
  document.getElementById("sound").classList.remove("d-none");
}

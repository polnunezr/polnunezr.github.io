var vid = document.getElementById("myVideo");

function playVid() {
  vid.play();
}

function pauseVid() {
  vid.pause();
}
function skip(value) {
  vid.currentTime += value;
}

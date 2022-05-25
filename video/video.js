var vid = document.getElementById("myVideo");

function playVid2() {
    vid.play();
}

function pause() {
    vid.pause();
}

function playVid() {
    vid.currentTime = 0;
}

function pauseVid() {
    vid.currentTime = 17;
}

function skip() {
    vid.currentTime = 27;
}

function rerun() {
    vid.currentTime = 0;
}
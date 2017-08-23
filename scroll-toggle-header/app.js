const header = document.getElementById('header');
const height = header.offsetHeight;
let latestScroll = 0;
let topOffset;

window.onscroll = function () {
    setTimeout(function () {
        latestScroll = window.scrollY;
    }, 250);
    toggleTop(this.scrollY - latestScroll > 50);
}

function toggleTop(delta) {
    topOffset = delta ? -60 : 0;
    header.style.top = topOffset + "px";
}
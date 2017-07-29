var input = document.getElementById('input');
var text = document.getElementById('text');

input.onfocus = function () {
    text.className = "float-above";
}

input.onblur = function () {
    text.className = '';
}
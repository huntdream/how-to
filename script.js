var btn = document.getElementById('btn');
var modal = document.getElementById('modal');
var close = document.getElementById('close');
btn.addEventListener('click', function () {
    modal.style.display = 'block';
    modal.style.animationName = 'scaleIn';
});

close.addEventListener('click', function () {
    modal.style.animationName = 'scaleOut';
    setTimeout(function () {
        modal.style.display = 'none';
    }, 900);
})
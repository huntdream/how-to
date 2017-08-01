var btn = document.getElementById('arrow');
var reveal = document.getElementById('reveal');
var one = document.getElementsByClassName('page-one');


btn.onclick = function(){
    reveal.classList.toggle('animate');
    setTimeout(function(){
        one[0].classList.toggle('fade');
        reveal.classList.toggle('animate');
    },1200);

};
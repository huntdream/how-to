const ul = document.getElementById('carousel');
const delta = -335;
let counter = 0;
let sign = 1;
ul.style.transform = "translateX("+delta+"px)";

    let result = delta * (counter);
    ul.style.transform = "translateX(" + result + "px)";
    setInterval(function(){
        child = ul.children[0].cloneNode(true);
        ul.appendChild(child);
        ul.removeChild(ul.children[0]);
    },2600);
    if(counter<ul.childElementCount){
        counter++;
    }
    else {
        counter = 0;
    }
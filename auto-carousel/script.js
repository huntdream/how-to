const ul = document.getElementById('carousel');
const delta = -335;
let counter = 0;
let sign = 1;
setInterval(function(){
    console.log(ul.style.transform);
    let result = delta*(counter);
    ul.style.transform = "translateX("+result+ "px)";
    counter+=sign;
    if(counter===0){
        sign=1;
    }
    if(counter===4){
        sign = -1;
    }
},2000)
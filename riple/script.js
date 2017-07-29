var rippleBtn = document.getElementById('ripple');
var div = document.createElement('div');

rippleBtn.onclick = function(){
    rippleBtn.appendChild(div);
    div.className = 'ripple--container';
}
const content = document.getElementById('content');
let parts = content.textContent;
content.removeChild(content.firstChild);
console.log(parts);
setInterval(function(){
    content.textContent+=parts.charAt(0);
    parts = parts.slice(1);
},100);
var modal = document.getElementById('modal-cover');

addEventListenerToTags('img','click',showModal);
 
function showModal(){
    var el = document.getElementById('modal-cover');
    el.style.display = "block";
    el.addEventListener('click',function(e){
        this.style.display = 'none';
   });
}

function addEventListenerToTags(tag,event,fn){
    var list= document.getElementsByTagName(tag);
    console.log(list);
    for(var i = 0,len=list.length;i<len;i++){
        list[i].addEventListener(event,fn,false);
    }
}
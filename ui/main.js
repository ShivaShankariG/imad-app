console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new- value";

var i=document.getElementById("img");
i.onClick=function(){
    i.style.leftmargin='100px';
};
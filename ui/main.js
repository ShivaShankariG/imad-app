console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new- value";
element.onclick = function() { alert('blah'); 
     element.style.marginLeft='100px';
};


var img= document.getElementById("shiva");
marginLeft=0;
function move()
{
    while(marginLeft<900){
    marginLeft= marginLeft +10;
    img.style.marginLeft=marginLeft + 'px';
        
    }
}
img.onclick = function(){
    alert("HI");
   var interval= setInterval(move, 100); 
};

var b= document.getElementById("counter");
b.onClick= function(){
    
};


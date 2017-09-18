console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new- value";
element.onclick = function() { alert('blah'); 
     element.style.marginLeft='100px';
};


var img= document.getElementById("shiva");

img.onclick = function(){alert("HI");
   img.style.marginLeft='100px'; 
};


/*var img= document.getElementById("shiva");

img.onclick = function(){alert("HI");
   img.style.marginLeft='100px'; 
};
*/
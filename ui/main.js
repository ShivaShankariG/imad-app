console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new- value";
element.onclick = function() { alert('blah'); 
     element.style.marginLeft='100px';
};


var i=document.getElementById('shiva');
i.onClick = function(){
    alert("Working");
    i.style.marginLeft='100px';
};
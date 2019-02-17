var contentItems = document.querySelectorAll('.collapsed-content');
var infoButtons = document.querySelectorAll('.collapsible');
/* 
for(var i = 0; i < infoButtons.length; i++) {
    infoButtons[i].addEventListener('click', function (e){
        checkActives(event);
      
    })
} */

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}


function checkActives(e){
    var thewhy = document.querySelector(".thewhy");
    var thewhat = document.querySelector(".thewhat");
    var thewhere = document.querySelector(".thewhere");
    var thehow = document.querySelector(".thehow");
    var thewhen = document.querySelector(".thewhen");
    var thewho = document.querySelector(".thewho");
    var targets = getEventTarget(event);

    var elems = document.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
    }
   e.target.className = "active";
  
    if(targets.innerHTML == "What"){
        thewhat.style.display = 'inline';
    }
    else {
        thewhat.style.display = 'none';
    }
    if(targets.innerHTML == "Why"){
        thewhy.style.display = 'inline';
    }
    else {
        thewhy.style.display = 'none';
    }
    if(targets.innerHTML == "Where"){
        thewhere.style.display = 'inline';
    }
    else {
        thewhere.style.display = 'none';
    }
    if(targets.innerHTML == "How"){
        thehow.style.display = 'inline';
    }
    else {
        thehow.style.display = 'none';
    }
    if(targets.innerHTML == "Who"){
        thewho.style.display = 'inline';
    }
    else {
        thewho.style.display = 'none';
    }
    
    if(targets.innerHTML == "When"){
        thewhen.style.display = 'inline';
    }
    else {
        thewhen.style.display = 'none';
    }
    
    
}




/* var col1 = document.querySelector('.c1');
var col2 = document.querySelector('.c2');
var col3 = document.querySelector('.c3');
var col4 = document.querySelector('.c4');



col1.addEventListener('click', function (){
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    if (this.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0px";
    }
});

col2.addEventListener('click', function (){
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    if (this.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0px";
    }
});

col3.addEventListener('click', function (){
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    if (this.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0px";
    }
});

col4.addEventListener('click', function (){
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    if (this.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0px";
    }
}); */



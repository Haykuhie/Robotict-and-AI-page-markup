const menu= document.querySelector('.icon');

menu.addEventListener('click', unhide)


 function unhide(){
   document.querySelector('.nav_sidebar').style.visibility= ' visible';
   
}

const close= document.querySelector('.CLOSE');
close.addEventListener('click', CLS );

function CLS(){
    document.querySelector('.nav_sidebar').style.visibility= ' hidden';
}
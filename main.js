let ToggleNavStatus = false;

let ToggleNav= function{
      let getSideBar=document.querySelector('.nav_sidebar')  
      let getSideBarLinks=document.querySelectorAll('.nav_sidebar li')

if(ToggleNavStatus === false){
    getSideBar.style.visibility='visible';
    getSideBar.style.background='black';
    getSideBar.style.opacity='0.7'


    for(i=0;i<getSideBarLinks.length;i++){
        getSideBarLinks[i].style.opacity='1'
    }
    ToggleNavStatus = true;
}

}
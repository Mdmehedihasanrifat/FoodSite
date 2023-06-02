
let menu=document.getElementById("menu-icon");
let navbar=document.querySelector(".navbar");
menu.addEventListener("click",function(){
  
    navbar.classList.toggle("active");
   alert("alert");
})

window.onscroll=()=>{
    navbar.classList.remove("active");
    
}
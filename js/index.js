
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');
});

window.onscroll=()=>{
    navbar.classList.remove("active");
    
}
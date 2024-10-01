const navbarMenu = document.querySelector(".navbar .links")
const menuBtn = document.querySelector(".menu-btn")
const hidemenuBtn = document.querySelector(".close-btn")
const showPopupBtn = document.querySelector(".login-btn")
const formPopup = document.querySelector(".form-popup")
const hidePopupBtn = document.querySelector(".form-popup .close-btn")
const loginSignupLink =  document.querySelectorAll(".form-box .bottom-link a")

// Show mobile menu
menuBtn.addEventListener("click",()=>{
  navbarMenu.classList.toggle("show-menu")
})
// Hide mobile menu
hidemenuBtn.addEventListener("click",() => menuBtn.click())


// show form popup
showPopupBtn.addEventListener("click",()=>{
  document.body.classList.toggle("show-popup");
})

// Hide form popup
hidePopupBtn.addEventListener("click",()=> showPopupBtn.click())

loginSignupLink.forEach(link =>{
  link.addEventListener("click", (e)=>{
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup")
  });
}); 
// console.log("its working");
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");
menuBtn.addEventListener("click",function(){
    console.log(nav);
    nav.classList.toggle("active");})
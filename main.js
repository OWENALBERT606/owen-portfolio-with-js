// console.log("its working");
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");
menuBtn.addEventListener("click",function(){
    console.log(nav);
    nav.classList.toggle("active");})


    const animation_elements =document.querySelectorAll('.animate-on-scroll,.animate-top-to-btm');
// console.log(animation_elements);




function callback(entries){
    entries.forEach((entry) =>{
       if(entry.IsIntersecting){
        entry.target.classList.add("animate");
       } else{
        entry.target.classList.remove("animate");
       };
    });
};
const options= {
    threshold:0.5,
};

const observer = new IntersectionObserver(callback,options);

animation_elements.forEach((element)=>{
    observer.observe(element);
});
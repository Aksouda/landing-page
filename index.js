window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0);
});

const right = document.querySelector(".right")
const left = document.querySelector(".left")
const picWrapper = document.querySelectorAll(".picWrapper")
right.addEventListener("click",function(){
    picWrapper.forEach((box) =>{
        box.classList.add("moveright");
    });
});
left.addEventListener("click",function(){
    picWrapper.forEach((box)=>{
        box.classList.remove("moveright");
    });
});
let navbar = document.querySelector(".navbar");
let hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click",()=>{
     navbar.classList.toggle("show");
});
let navLink = document.querySelectorAll(".navbar a");
navLink.forEach((link)=>{
    link.addEventListener("click",()=>{
        navbar.classList.remove("show");
    })
})



//let list = document.querySelector(".list")
////let inputt = document.querySelector(".inputt");
////let btn = document.querySelector(".btn");
////console.log(inputt.value);
////btn.addEventListener (`click` , () => {
    ///let addin = document.createElement("LI");
   /// let inside = document.createTextNode("shit");
    ///addin.appendChild(inside);
    ///list.appendChild(addin);
    
////});

// Scroll reveal animation


const reveals=document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


reveals.forEach(item=>{


let position=item.getBoundingClientRect().top;


if(position < window.innerHeight-100){

item.classList.add("active");

}


});


});





// Custom cursor


const cursor=document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";


});






// Button animation


document.querySelectorAll("a").forEach(btn=>{


btn.addEventListener("mouseenter",()=>{


cursor.style.transform="scale(3)";


});



btn.addEventListener("mouseleave",()=>{


cursor.style.transform="scale(1)";


});


});
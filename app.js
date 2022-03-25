// const mobileMenu = document.querySelector(".mobile-menu");
// const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

//     mobileMenuBtn.addEventListener("click",() => {
//     mobileMenuBtn.classList.toggle("w-24")
// })

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const acctitle = document.querySelectorAll(".acco-title");
const accbody = document.getElementById("acco-body");


const acctitle1 =document.querySelector(".acco-title-1");
const accbody1 = document.getElementById("acco-body-1");

const acctitle2 =document.querySelector(".acco-title-2");
const accbody2 = document.getElementById("acco-body-2");

const acctitle3 =document.querySelector(".acco-title-3");
const accbody3 = document.getElementById("acco-body-3");

const acctitle4 =document.querySelector(".acco-title-4");
const accbody4 = document.getElementById("acco-body-4");

btn.addEventListener("click", () => {

    btn.classList("rotate-180");
});
btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });

acctitle1.addEventListener("click", () => {
            accbody1.classList.toggle("hidden");
        });

acctitle2.addEventListener("click", () => {
            accbody2.classList.toggle("hidden");
        });


acctitle3.addEventListener("click", () => {
            accbody3.classList.toggle("hidden");
        });

acctitle4.addEventListener("click", () => {
            accbody4.classList.toggle("hidden");
        });


// acctitle.forEach((acctitle)=>{
//     acctitle.addEventListener('click',()=>{
        
//         acctitle.classList.toggle("active-header");
        
        
//         accbody.classList.toggle("hidden");
//         if(acctitle.classList.contains('active-header')){
           
//         }
//         // else{
//         //     acctitle.nextElementSibling.classList.replace("max-h-[16px]","max-h-0")
//         // }
//     })
    
// });





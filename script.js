let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let aboutContainer = document.querySelector(".about-container");
let bars = document.querySelectorAll(".bars-box");
let itemBars = document.querySelectorAll(".bars");
let servicesBox = document.querySelectorAll(".services-box");
let service = document.querySelector(".services-content");
let heading = document.querySelectorAll(".heading");


menu.onclick = () => {
  navbar.classList.toggle("active");
};


function scroll(){
  if(aboutContainer.clientHeight-100<window.pageYOffset){
    aboutContainer.classList.add("active")
  };
  bars.forEach(bar=>{
    if(itemBars[0].clientHeight<window.pageYOffset){
      bar.classList.add("show")
    }
  });

  servicesBox.forEach(box=>{
    if(service.clientHeight+800<window.pageYOffset){
      box.classList.add("show")
    }
  });

  for(let i = 0;i<=heading.length;i++){
    if(window.pageYOffset>heading[i].offsetTop-230){
      heading[i].classList.add("show")
    }
  }

  header.classList.toggle("shadow", window.scrollY > 0);
  navbar.classList.remove("active");
}
window.addEventListener("scroll",scroll);
const fs = document.getElementById("first-screen");
const main = document.getElementsByTagName("main")[0];
const nav = document.getElementsByTagName("nav")[0];
const firstP = document.getElementsByClassName("first-p")[0];
const secondP = document.getElementsByClassName("second-p")[0];
const thirdP = document.getElementsByClassName("third-p")[0];
const fourthP = document.getElementsByClassName("fourth-p")[0];
const bd = document.getElementsByTagName("body")[0];
const projectsText = document.getElementById("destaques");
const projectsDivs = document.querySelectorAll("#destaques > div");
const form = document.getElementsByTagName("form")[0];
const msg = document.getElementById("msg");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0],
};

const ob = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.opacity = 1;
    }
  });
}, options);

let navPos = nav.getBoundingClientRect().top;

const myFunc = () => {
  main.style.display = "none";
  main.style.transform = "translateY(30px)";
  main.style.opacity = "0";
  nav.style.opacity = "0";
  bd.style.overflowY = "hidden";
  
  setTimeout(() => {
    firstP.style.transform = "translateX(-30px)";
  }, 1000);
  
  setTimeout(() => {
    firstP.style.transform = "translateX(-100px)";
    thirdP.style.transform = "translateX(25px)";
    
    setTimeout(() => {
      secondP.classList.add("anim");
      secondP.style.display = "inline";
      fourthP.classList.add("anim");
      fourthP.style.display = "inline";
      
      setTimeout(() => {
        firstP.style.opacity = "0";
        secondP.style.opacity = "0";
        thirdP.style.opacity = "0";
        fourthP.style.opacity = "0";
        
        
        setTimeout(() => {
          main.style.display = "block";
          
          setTimeout(() => {
            fs.style.display = "none";
            
            nav.style.opacity = "1";
            
            main.style.transform = "translateY(0px)";
            
            bd.style.overflowY = "scroll";
            
            setTimeout(() => {
              main.style.opacity = "1";
            },500);
          }, 500);
        }, 1500);
      }, 1000);
    }, 1000);
  }, 2500);
};

document.addEventListener("DOMContentLoaded", myFunc);

document.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

Array.from(projectsDivs).forEach((project) => {
  ob.observe(project);
});

let nome = "";
let email = "";
let mensagem = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Array.from(form.children).forEach(child => {
    if ((child.tagName == "INPUT" || child.tagName == "TEXTAREA") && child.getAttribute("type") != "submit") {

      child.getAttribute("type") == "text" && (nome = child.value);
      child.getAttribute("type") == "email"  && (email = child.value);
      child.tagName == "TEXTAREA" && (mensagem = child.value);

      child.setAttribute("disabled", "true");
      msg.style.display = "block";
      child.value = "";

    }
  })
})
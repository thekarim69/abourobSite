const sections = document.querySelectorAll(".channel");
const lis = document.querySelectorAll(".links");

for (let i = 0; i < sections.length; i++) {
    lis[i].addEventListener("click",function () {
        window.scroll({
            top: 2500, 
            left: 0, 
            behavior: 'smooth'
        });
          
          // Scroll certain amounts from current position 
        window.scrollBy({ 
            top: 100, // could be negative value
            left: 0, 
            behavior: 'smooth' 
        });
        sections[i].scrollIntoView({behavior: 'smooth'});
    });
}

const theyou = document.querySelector('#theyou');
const fly = document.querySelector(".fly");

theyou.addEventListener("mouseover",()=>{
    fly.setAttribute("style","transform:scale(1.05);")
});
const lines = document.querySelectorAll("#slider li");
const slider = document.querySelector("#slider");
slider.addEventListener("mouseover",()=>{
    lines[0].setAttribute("style",'transition:all 0.5s ease;transform:translateX(5px) ;');
    lines[1].setAttribute("style",'transition:all 0.5s ease;transform:translateX(-5px);');
});
slider.addEventListener("mouseleave",()=>{
    lines[0].removeAttribute("style");
    lines[1].removeAttribute("style");
});
const thelinks = document.querySelector("#thelinks");
slider.addEventListener('click',function(){
    if (thelinks.hasAttribute("style")===true) {
        thelinks.removeAttribute("style");
        slider.removeAttribute("style");
    } else {
        thelinks.setAttribute("style","transform:translateX(0px);position:static;")
        slider.setAttribute("style","transform:translateY(0px) rotate(180deg);"); 
    }
});
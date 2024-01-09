const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Hamburger js
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
window.addEventListener('scroll', () => {
    if (navMenu.classList.toggle("active") == true) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        // hamburger.classList.remove("active");
        // navMenu.classList.remove("active");
    }
})
// js to ensure menu closes when links close
document.querySelectorAll("#nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//TODO! remove other state js
function showfield(name){
  if(name=='other')document.getElementById('div1').innerHTML='Enter Other: <input type="text" name="Other_state" class="inline other" />';
  else document.getElementById('div1').innerHTML='';
}

// Other input js
function showfield1(name){
    if(name=='other')document.getElementById('other_option').style.display= "flex";
    else document.getElementById('other_option').style.display='none';
}

function showfield2(name){
    if(name=='other')document.getElementById('dry_fish_option').style.display= "flex";
    else document.getElementById('dry_fish_option').style.display='none';
}

function showfield3(name){
    if(name=='other')document.getElementById('irish_option').style.display= "flex";
    else document.getElementById('irish_option').style.display='none';
}

function showfield4(name){
    if(name=='other')document.getElementById('ginger_option').style.display= "flex";
    else document.getElementById('ginger_option').style.display='none';
}

function showfield5(name){
    if(name=='other')document.getElementById('other_state').style.display= "flex";
    else document.getElementById('other_state').style.display='none';
}

// FAQ
function faq(name){
    if(name=='other')document.getElementById('other_option').style.display= "flex";
    else document.getElementById('other_option').style.display='none';
}

// FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
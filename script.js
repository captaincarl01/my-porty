/* assets/script.js */
(function(){
// Basic interactivity: mobile nav toggle, contact form stub, year injection, filter
document.addEventListener('DOMContentLoaded', function(){
// year
var yearEls = document.querySelectorAll('#year, #yearAbout, #yearPort, #yearServices, #yearContact');
yearEls.forEach(function(el){ if(el) el.textContent = new Date().getFullYear(); });


// nav toggle (shared)
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});


// simple filter on portfolio page
var filter = document.getElementById('filter');
if(filter){
filter.addEventListener('change', function(){
var val = filter.value;
var items = document.querySelectorAll('#portfolioGrid .project');
items.forEach(function(it){
if(val==='all') it.style.display='block';
else if(it.classList.contains('project--'+val)) it.style.display='block';
else it.style.display='none';
});
});
}

// contact form dummy
var form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', function(e){
e.preventDefault();
var status = document.getElementById('formStatus');
status.textContent = 'Sending...';
setTimeout(function(){ status.textContent = 'Message sent — I will reply within 48 hours.'; form.reset(); }, 800);
});
}


});
})();
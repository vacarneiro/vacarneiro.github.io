// ========== Include HTML snippets (header and footer) ==========

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

includeHTML();



// ========== Submenu on nav keeps open on click ==========

$(function(){
 // Select the dropdown buttons and menus using jQuery
 let toggleDropdownSystem = $("#toggle-dropdown-system");
 let dropdownSystem = $("#dropdown-container-system");
 let toggleDropdownMaster = $("#toggle-dropdown-master");
 let dropdownMaster = $("#dropdown-container-master");

 // Toggle the dropdown menus when the corresponding button is clicked
 toggleDropdownSystem.click(function() {
   dropdownMaster.hide();
   dropdownSystem.toggle();
 });

 toggleDropdownMaster.click(function() {
   dropdownSystem.hide();
   dropdownMaster.toggle();
 });

 // Close the dropdown menu when the user clicks outside of it
 $(document).click(function(event) {
   if (
     !dropdownSystem.is(event.target) && 
     !toggleDropdownSystem.is(event.target) &&
     !dropdownMaster.is(event.target) &&
     !toggleDropdownMaster.is(event.target)
   ) {
     dropdownSystem.hide();
     dropdownMaster.hide();
   }
 });
});



// ========== Prevents animation on page load ==========

function transitionAfterPageLoad() {
  document.getElementById("body").classList.remove("no-transition");
}

// ========== Responsive header ==========

window.onload = function navSlide() {
  const burguer = document.querySelector("#burguer");
  const nav = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li");

  // Toggle nav
  burguer.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    console.log(nav.classList);
    nav.style.transform = 'translateX(0%)';
    nav.style.transition = 'transform 0.5s ease-in';

  // Animate links
    // navLinks.forEach((link, index) => {
    //   link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
    // });  
  });
}

// navSlide();

// Add event listener to window object to close dropdown when clicking outside of it
// window.addEventListener("click", function (event) {
//   const burguer = document.querySelector("#burguer");
//   const nav = document.querySelector(".nav-list");
//   const navLinks = document.querySelectorAll(".nav-list li");

//   // If clicked element is not part of the menu, hide it
//   if (event.target !== nav) {
//     nav.style.display = "none";
//   }
// });
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

window.onload = function () {
  let toggleDropdownSystem = document.getElementById("toggle-dropdown-system");
  let dropdownSystem = document.getElementById("dropdown-container-system");
  let toggleDropdownMaster = document.getElementById("toggle-dropdown-master");
  let dropdownMaster = document.getElementById("dropdown-container-master");

  toggleDropdownSystem.onclick = function unhideDropdownSystem() {

    if (dropdownSystem.style.display !== "none") {
      dropdownSystem.style.display = "none";
    }
    else {
      dropdownSystem.style.display = "block";
    }
  };

  toggleDropdownMaster.onclick = function unhidedropdownMaster() {

    if (dropdownMaster.style.display !== "none") {
      dropdownMaster.style.display = "none";
    }
    else {
      dropdownMaster.style.display = "block";
    }

  };

  // Add event listener to window object to close dropdown when clicking outside of it
  window.addEventListener("click", function (event) {

    // If clicked element is not part of the dropdown menu or the toggle button, hide the menu
    if (
      event.target !== dropdownSystem &&
      event.target !== toggleDropdownSystem &&
      event.target !== dropdownMaster &&
      event.target !== toggleDropdownMaster
    ) {
      dropdownSystem.style.display = "none";
      dropdownMaster.style.display = "none";
    } else if (event.target === toggleDropdownSystem) {
      dropdownMaster.style.display = "none";
    } else if (event.target === toggleDropdownMaster) {
      dropdownSystem.style.display = "none";
    }
  });
}



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
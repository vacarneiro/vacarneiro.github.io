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
  let toggleDropdown = document.getElementById("toggle-dropdown");
  let dropdown = document.getElementById("dropdown-container");
  let toggleDropdown2 = document.getElementById("toggle-dropdown-2");
  let dropdown2 = document.getElementById("dropdown-container-2");

  toggleDropdown.onclick = function unhideDropdown() {

    if (dropdown.style.display !== "none") {
      dropdown.style.display = "none";
    }
    else {
      dropdown.style.display = "block";
    }
  };

  toggleDropdown2.onclick = function unhideDropdown2() {

    if (dropdown2.style.display !== "none") {
      dropdown2.style.display = "none";
    }
    else {
      dropdown2.style.display = "block";
    }

  };

}

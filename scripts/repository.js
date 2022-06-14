// Tried to show confirm box when Mestre link is clicked

var elems = document.getElementsByClassName('confirmation');
var confirmIt = function (e) {
    if (!confirm('Você tem certeza?')) e.preventDefault();
};
for (var i = 0, l = elems.length; i < l; i++) {
    elems[i].addEventListener('click', confirmIt, false);
}

// Toggle visibility of class "section"
function toggleVisibility() {
  var x = document.getElementByClassName("session");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

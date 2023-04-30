// ========== Mestre password ==========

let passwordProtected = true;
const password = "iseu";
let attempts = 0;

function getPassword() {
  let userPassword = prompt("Please enter the password to view this page:");
  attempts++;

  if (userPassword === password) {
    $('body').removeClass('blur'); // Remove the blur effect
    return true;
  } else {
    if (attempts >= 3) {
      alert("Você excedeu o número de tentativas. Por favor aguarde enquanto redirecionamos para uma nova página.");
      return false;
    } else {
      alert("Senha incorreta, por favor tente novamente. Você tem " + (3 - attempts) + " tentativas restantes.");
      return getPassword();
    }
  }
}

$(document).ready(function () {
  if (passwordProtected) {
    $(".master-tool-wrapper").addClass('blur'); // Apply the blur effect
    if (!getPassword()) {
      window.location.href = "https://www.urbandictionary.com/define.php?term=Haulie";
    }
  }
});


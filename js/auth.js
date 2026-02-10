import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      if (email === "admin@base038.com") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "index.html";
      }
    })
    .catch(err => alert("Login inválido"));
});

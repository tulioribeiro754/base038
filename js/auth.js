import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();

  const email = email.value;
  const password = password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      localStorage.setItem("user", JSON.stringify({
        uid: user.user.uid,
        email: user.user.email,
        isAdmin: user.user.email === "admin@base038.com"
      }));

      window.location.href = "index.html";
    })
    .catch(() => alert("Login inválido"));
});

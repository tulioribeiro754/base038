import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, onAuthStateChanged } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const ADMIN_EMAIL = "admin@base038.com";

const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        localStorage.setItem("user", JSON.stringify({
          email: user.user.email,
          isAdmin: user.user.email === ADMIN_EMAIL
        }));

        // 🔥 SEMPRE volta para a página inicial
        window.location.href = "index.html";
      })
      .catch(() => alert("Email ou senha inválidos"));
  });
}

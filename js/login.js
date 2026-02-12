import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* 🔥 CONFIG FIREBASE */
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* 👁️ Mostrar / ocultar senha */

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  togglePassword.classList.toggle("fa-eye-slash");
});

/* 🔐 LOGIN FIREBASE */

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = passwordInput.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "perfil.html";
  } catch (error) {
    errorMsg.style.display = "block";

    if (error.code === "auth/user-not-found") {
      errorMsg.textContent = "Usuário não encontrado.";
    } else if (error.code === "auth/wrong-password") {
      errorMsg.textContent = "Senha incorreta.";
    } else if (error.code === "auth/invalid-email") {
      errorMsg.textContent = "Email inválido.";
    } else {
      errorMsg.textContent = "Erro ao fazer login.";
    }
  }
});

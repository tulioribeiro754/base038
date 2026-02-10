document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // 🔹 LOGIN SIMULADO (MVP)
    const isAdmin = email === "admin@base038.com";

    localStorage.setItem("user", JSON.stringify({
      email,
      isAdmin
    }));

    // 🔥 REDIRECIONAMENTO CORRETO
    if (isAdmin) {
      window.location.href = "index.html"; // admin também volta pro início
    } else {
      window.location.href = "index.html";
    }
  });
});

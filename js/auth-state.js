const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  document.getElementById("loginBtn")?.classList.add("hidden");
  document.getElementById("profileBtn")?.classList.remove("hidden");

  if (user.isAdmin) {
    document.getElementById("adminBtn")?.classList.remove("hidden");
  }
}

const ADMIN_EMAIL = "seuemail@base038.com";

import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  const adminBtn = document.getElementById("adminBtn");

  if (user && user.email === ADMIN_EMAIL) {
    adminBtn?.classList.remove("hidden");
  } else {
    adminBtn?.classList.add("hidden");
  }
});
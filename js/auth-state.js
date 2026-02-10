const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  document.getElementById("loginBtn")?.classList.add("hidden");
  document.getElementById("profileBtn")?.classList.remove("hidden");

  if (user.isAdmin) {
    document.getElementById("adminBtn")?.classList.remove("hidden");
  }
}

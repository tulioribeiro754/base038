document.addEventListener("DOMContentLoaded", () => {
  const profileIcon = document.getElementById("profileIcon");
  const user = JSON.parse(localStorage.getItem("user"));

  profileIcon.addEventListener("click", (e) => {
    e.preventDefault();

    if (user) {
      window.location.href = "perfil.html";
    } else {
      window.location.href = "login.html";
    }
  });
});

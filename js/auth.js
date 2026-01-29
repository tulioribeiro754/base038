function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "admin@base038.com" && senha === "1234") {
        localStorage.setItem("logado", true);
        window.location.href = "admin.html";
    } else {
        alert("Login inválido");
    }
}

async function login() {
    const email = emailInput.value;
    const senha = senhaInput.value;

    const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "admin.html";
    } else {
        alert("Login inválido");
    }
}

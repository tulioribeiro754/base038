function pagarPix() {
    fetch("http://localhost:3000/api/pagamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            items: JSON.parse(localStorage.getItem("carrinho"))
        })
    })
    .then(res => res.json())
    .then(data => window.location.href = data.link);
}

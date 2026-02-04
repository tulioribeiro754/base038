const API = "http://localhost:3000/api/produtos";
const token = localStorage.getItem("token");

if (!token) window.location.href = "login.html";

async function carregarAdmin() {
    const res = await fetch(API);
    const produtos = await res.json();

    listaAdmin.innerHTML = "";

    produtos.forEach(p => {
        listaAdmin.innerHTML += `
            <div class="item-carrinho">
                <span>${p.nome}</span>
                <button onclick="remover('${p._id}')">❌</button>
            </div>
        `;
    });
}

async function adicionar() {
    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({
            nome: nome.value,
            preco: Number(preco.value),
            categoria: categoria.value,
            imagem: imagem.value
        })
    });

    carregarAdmin();
}

async function remover(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: { "Authorization": token }
    });

    carregarAdmin();
}

document.addEventListener("DOMContentLoaded", carregarAdmin);

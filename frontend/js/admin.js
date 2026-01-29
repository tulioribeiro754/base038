const API = "http://localhost:3000/api/produtos";

async function carregarAdmin() {
    const res = await fetch(API);
    const produtos = await res.json();

    const lista = document.getElementById("lista-admin");
    lista.innerHTML = "";

    produtos.forEach(p => {
        lista.innerHTML += `
            <div class="item-carrinho">
                <span>${p.nome}</span>
                <button onclick="remover('${p._id}')">❌</button>
            </div>
        `;
    });
}

async function adicionar() {
    const produto = {
        nome: nome.value,
        preco: Number(preco.value),
        categoria: categoria.value,
        imagem: imagem.value
    };

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
    });

    carregarAdmin();
}

async function remover(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    carregarAdmin();
}

document.addEventListener("DOMContentLoaded", carregarAdmin);

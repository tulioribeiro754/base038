const API = "http://localhost:3000/api/produtos";

async function carregarProdutos(categoria) {
    const res = await fetch(API);
    const produtos = await res.json();

    const grid = document.getElementById("grid-produtos");
    grid.innerHTML = "";

    produtos
        .filter(p => p.categoria === categoria)
        .forEach(p => {
            grid.innerHTML += `
                <div class="card-produto">
                    <img src="${p.imagem}">
                    <h3>${p.nome}</h3>
                    <span>R$ ${p.preco.toFixed(2)}</span>
                    <a href="produto.html?id=${p._id}" class="btn-neon">Ver Produto</a>
                </div>
            `;
        });
}

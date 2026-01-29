let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(id, nome, preco) {
    const produto = carrinho.find(p => p.id === id);

    if (produto) {
        produto.qtd++;
    } else {
        carrinho.push({ id, nome, preco, qtd: 1 });
    }

    salvarCarrinho();
    alert("Produto adicionado ao carrinho!");
}

function removerProduto(id) {
    carrinho = carrinho.filter(p => p.id !== id);
    salvarCarrinho();
    carregarCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalEl = document.getElementById("total");
    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach(produto => {
        total += produto.preco * produto.qtd;

        lista.innerHTML += `
            <div class="item-carrinho">
                <span>${produto.nome} (${produto.qtd}x)</span>
                <span>R$ ${(produto.preco * produto.qtd).toFixed(2)}</span>
                <button onclick="removerProduto(${produto.id})">❌</button>
            </div>
        `;
    });

    totalEl.innerText = `Total: R$ ${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", carregarCarrinho);

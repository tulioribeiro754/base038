const products = [
  {
    id: 1,
    name: "Camiseta BASE038 Essential",
    price: 149.90,
    category: "masculino",
    image: "assets/camisa1.jpg",
    likes: 32,
    offer: true
  }
];

function renderProducts(filter = "") {
  const containers = document.querySelectorAll(".products");

  containers.forEach(container => {
    container.innerHTML = "";
    products
      .filter(p => p.name.toLowerCase().includes(filter))
      .forEach(product => {
        container.innerHTML += `
          <div class="product">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">
              Adicionar ao carrinho
            </button>
          </div>
        `;
      });
  });
}

document.getElementById("search")?.addEventListener("input", e => {
  renderProducts(e.target.value.toLowerCase());
});

renderProducts();

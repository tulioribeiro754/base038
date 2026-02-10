let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const logged = localStorage.getItem("user");
  if (!logged) {
    alert("Faça login para continuar");
    location.href = "login.html";
    return;
  }

  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produto adicionado");
}

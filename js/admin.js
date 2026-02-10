// ===============================
// BASE038 - ADMIN PANEL
// ===============================

// Containers
const content = document.getElementById("adminContent");

// Mock de banco (MVP)
let products = JSON.parse(localStorage.getItem("products")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// ===============================
// UTIL
// ===============================
function saveAll() {
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("orders", JSON.stringify(orders));
}

function clearContent() {
  content.innerHTML = "";
}

// ===============================
// PRODUTOS
// ===============================
function addProduct() {
  clearContent();

  content.innerHTML = `
    <h3>Novo Produto</h3>

    <input id="name" placeholder="Nome do produto">
    <input id="price" type="number" placeholder="Preço">
    <input id="image" placeholder="URL da imagem">
    
    <select id="category">
      <option value="masculino">Masculino</option>
      <option value="feminino">Feminino</option>
    </select>

    <label>
      <input type="checkbox" id="offer"> Oferta
    </label>

    <button onclick="saveProduct()">Salvar Produto</button>
  `;
}

function saveProduct() {
  const product = {
    id: Date.now(),
    name: document.getElementById("name").value,
    price: parseFloat(document.getElementById("price").value),
    image: document.getElementById("image").value,
    category: document.getElementById("category").value,
    offer: document.getElementById("offer").checked,
    likes: 0
  };

  products.push(product);
  saveAll();
  alert("Produto adicionado com sucesso!");
  listProducts();
}

function listProducts() {
  clearContent();

  content.innerHTML = "<h3>Produtos</h3>";

  products.forEach(p => {
    content.innerHTML += `
      <div class="admin-item">
        <img src="${p.image}" width="60">
        <strong>${p.name}</strong> - R$ ${p.price}
        <button onclick="editProduct(${p.id})">Editar</button>
        <button onclick="deleteProduct(${p.id})">Excluir</button>
      </div>
    `;
  });
}

function deleteProduct(id) {
  if (!confirm("Excluir este produto?")) return;
  products = products.filter(p => p.id !== id);
  saveAll();
  listProducts();
}

function editProduct(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;

  clearContent();

  content.innerHTML = `
    <h3>Editar Produto</h3>

    <input id="name" value="${p.name}">
    <input id="price" type="number" value="${p.price}">
    <input id="image" value="${p.image}">
    
    <select id="category">
      <option ${p.category === "masculino" ? "selected" : ""}>masculino</option>
      <option ${p.category === "feminino" ? "selected" : ""}>feminino</option>
    </select>

    <label>
      <input type="checkbox" id="offer" ${p.offer ? "checked" : ""}> Oferta
    </label>

    <button onclick="updateProduct(${p.id})">Atualizar</button>
  `;
}

function updateProduct(id) {
  const p = products.find(p => p.id === id);

  p.name = document.getElementById("name").value;
  p.price = parseFloat(document.getElementById("price").value);
  p.image = document.getElementById("image").value;
  p.category = document.getElementById("category").value;
  p.offer = document.getElementById("offer").checked;

  saveAll();
  alert("Produto atualizado!");
  listProducts();
}

// ===============================
// USUÁRIOS
// ===============================
function listUsers() {
  clearContent();
  content.innerHTML = "<h3>Usuários</h3>";

  users.forEach(u => {
    content.innerHTML += `
      <div class="admin-item">
        ${u.email || "Sem email"} |
        Último acesso: ${u.lastLogin || "N/A"}
        <button onclick="deleteUser('${u.email}')">Excluir</button>
      </div>
    `;
  });
}

function deleteUser(email) {
  if (!confirm("Excluir usuário?")) return;
  users = users.filter(u => u.email !== email);
  saveAll();
  listUsers();
}

// ===============================
// PEDIDOS
// ===============================
function listOrders() {
  clearContent();
  content.innerHTML = "<h3>Pedidos</h3>";

  orders.forEach(o => {
    content.innerHTML += `
      <div class="admin-item">
        Pedido #${o.id} | ${o.status}
        <button onclick="updateOrderStatus(${o.id}, 'Enviado')">Marcar como enviado</button>
      </div>
    `;
  });
}

function updateOrderStatus(id, status) {
  const order = orders.find(o => o.id === id);
  if (!order) return;

  order.status = status;
  saveAll();
  alert("Status atualizado!");
  listOrders();
}

// ===============================
// INIT
// ===============================
listProducts();

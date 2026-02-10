import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const user = JSON.parse(localStorage.getItem("user"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function checkout() {
  if (!user) {
    alert("Faça login");
    return;
  }

  if (cart.length === 0) {
    alert("Carrinho vazio");
    return;
  }

  const total = cart.reduce((s, p) => s + p.price, 0);

  await addDoc(collection(db, "orders"), {
    userId: user.uid,
    items: cart,
    total,
    status: "Pago",
    createdAt: serverTimestamp()
  });

  localStorage.removeItem("cart");
  alert("Pedido realizado com sucesso!");
  window.location.href = "perfil.html";
}

window.checkout = checkout;

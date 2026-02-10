import { db } from "./firebase.js";
import { collection, query, where, getDocs }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const user = JSON.parse(localStorage.getItem("user"));
const ordersDiv = document.getElementById("orders");

async function loadOrders() {
  const q = query(
    collection(db, "orders"),
    where("userId", "==", user.uid)
  );

  const snap = await getDocs(q);

  snap.forEach(doc => {
    const o = doc.data();
    ordersDiv.innerHTML += `
      <div>
        <strong>Status:</strong> ${o.status}<br>
        <strong>Total:</strong> R$ ${o.total}
      </div>
    `;
  });
}

loadOrders();

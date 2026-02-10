import { db } from "./firebase.js";
import { collection, getDocs, updateDoc, doc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function listOrders() {
  adminContent.innerHTML = "<h3>Pedidos</h3>";

  const snap = await getDocs(collection(db, "orders"));

  snap.forEach(d => {
    const o = d.data();
    adminContent.innerHTML += `
      <div>
        Pedido ${d.id} - ${o.status}
        <button onclick="updateStatus('${d.id}')">Marcar Enviado</button>
      </div>
    `;
  });
}

async function updateStatus(id) {
  await updateDoc(doc(db, "orders", id), {
    status: "Enviado"
  });
  listOrders();
}

window.listOrders = listOrders;

/* =============================================
   EmpleoYA — Chat con Firebase
   ============================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBg5MZ3mxMfftjLiYFN-2Txq9mUx8kJWLY",
  authDomain: "empleosya-33f6e.firebaseapp.com",
  projectId: "empleosya-33f6e",
  storageBucket: "empleosya-33f6e.firebasestorage.app",
  messagingSenderId: "721165655185",
  appId: "1:721165655185:web:b8953e097b1874e6987330"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ── Estado del chat ──
let chatActivo    = null; // id de la conversación abierta
let unsubscribe   = null; // para dejar de escuchar mensajes al cerrar

// ── Sugerencias rápidas para candidatos sin experiencia ──
const sugerencias = [
  "¿Cuál es el horario de trabajo?",
  "¿El puesto es presencial o remoto?",
  "¿Qué documentación necesito para empezar?",
  "¿Cuándo sería la fecha de inicio?"
];

// ===================== ABRIR CHAT =====================

window.abrirChat = function(empresaNombre, vacanteId, vacanteTitulo) {
  const sesion = getSesion();
  if (!sesion) {
    mostrarNotif("⚠️ Tenés que iniciar sesión para chatear.");
    return;
  }

  // ID único de conversación: candidato + vacante
  chatActivo = `${sesion.email}_vacante_${vacanteId}`;

  // Rellenar encabezado
  document.getElementById("chat-empresa-nombre").textContent = empresaNombre;
  document.getElementById("chat-vacante-titulo").textContent = vacanteTitulo;

  // Mostrar overlay
  document.getElementById("chat-overlay").style.display = "flex";
  document.body.style.overflow = "hidden";

  // Escuchar mensajes en tiempo real
  escucharMensajes();

  // Foco en el input
  setTimeout(() => document.getElementById("chat-input").focus(), 200);
};

// ===================== CERRAR CHAT =====================

window.cerrarChat = function() {
  document.getElementById("chat-overlay").style.display = "none";
  document.body.style.overflow = "";
  if (unsubscribe) { unsubscribe(); unsubscribe = null; }
  chatActivo = null;
  document.getElementById("chat-mensajes").innerHTML = "";
};

// ===================== ESCUCHAR MENSAJES =====================

function escucharMensajes() {
  if (unsubscribe) unsubscribe();

  const ref = collection(db, "chats", chatActivo, "mensajes");
  const q   = query(ref, orderBy("timestamp", "asc"));

  unsubscribe = onSnapshot(q, (snapshot) => {
    const contenedor = document.getElementById("chat-mensajes");
    contenedor.innerHTML = "";

    if (snapshot.empty) {
      contenedor.innerHTML = `
        <div class="chat-vacio">
          <span>💬</span>
          <p>Presentate y contale por qué te interesa el puesto.</p>
        </div>`;
    } else {
      snapshot.forEach(doc => {
        const msg = doc.data();
        const sesion = getSesion();
        const esMio = msg.autor === sesion?.email;
        const div = document.createElement("div");
        div.className = "chat-burbuja " + (esMio ? "mia" : "suya");
        div.innerHTML = `
          <div class="chat-texto">${msg.texto}</div>
          <div class="chat-hora">${formatearHora(msg.timestamp)}</div>`;
        contenedor.appendChild(div);
      });
    }

    // Scroll al último mensaje
    contenedor.scrollTop = contenedor.scrollHeight;
  });
}

// ===================== ENVIAR MENSAJE =====================

window.enviarMensaje = async function() {
  const input  = document.getElementById("chat-input");
  const texto  = input.value.trim();
  const sesion = getSesion();

  if (!texto || !sesion || !chatActivo) return;

  input.value = "";
  input.focus();

  try {
    await addDoc(collection(db, "chats", chatActivo, "mensajes"), {
      texto,
      autor:  sesion.email,
      nombre: sesion.nombre,
      timestamp: serverTimestamp()
    });
  } catch (e) {
    mostrarNotif("❌ No se pudo enviar el mensaje. Intentá de nuevo.");
    console.error(e);
  }
};

// ── Enviar con Enter ──
window.chatKeyDown = function(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    enviarMensaje();
  }
};

// ── Sugerencias rápidas ──
window.usarSugerencia = function(texto) {
  document.getElementById("chat-input").value = texto;
  document.getElementById("chat-input").focus();
};

// ===================== HELPERS =====================

function formatearHora(timestamp) {
  if (!timestamp) return "";
  const d = timestamp.toDate ? timestamp.toDate() : new Date();
  return d.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
}

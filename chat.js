/* =============================================
   EmpleoYA — Chat en tiempo real (Firebase Firestore)
   ============================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore, collection, doc, setDoc, addDoc,
  onSnapshot, orderBy, query, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Configuración de tu proyecto Firebase (empleosya-33f6e)
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

let chatIdActual    = null;
let unsubscribeChat = null;

// Genera un ID único de conversación por vacante + candidato
function idChat(vacanteId, emailCandidato) {
  return vacanteId + '_' + emailCandidato.replace(/[^a-zA-Z0-9]/g, '_');
}

function renderMensajes(mensajes) {
  const cont = document.getElementById('chat-mensajes');
  const sesion = window.getSesion();

  if (!mensajes.length) {
    cont.innerHTML = `
      <div class="chat-vacio">
        <span>💬</span>
        <p>Presentate y contale por qué te interesa el puesto.</p>
      </div>`;
    return;
  }

  cont.innerHTML = mensajes.map(m => {
    const esMio = sesion && m.autorEmail === sesion.email;
    const hora = (m.timestamp && m.timestamp.toDate)
      ? m.timestamp.toDate().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
      : '';
    return `
      <div class="chat-burbuja ${esMio ? 'mia' : 'suya'}">
        <div class="chat-texto">${m.texto}</div>
        <span class="chat-hora">${hora}</span>
      </div>`;
  }).join('');

  cont.scrollTop = cont.scrollHeight;
}

// ── Abrir chat ──
// vacanteId, tituloVacante, empresaNombre: datos de la vacante/empresa
// emailCandidato: opcional. Si no se pasa, se asume que quien abre el chat ES el candidato (su propio email).
// La empresa SIEMPRE debe pasar el email del candidato con el que quiere hablar.
window.abrirChat = function (vacanteId, tituloVacante, empresaNombre, emailCandidato) {
  const sesion = window.getSesion();
  if (!sesion) {
    window.abrirModal('login');
    window.mostrarNotif('🔒 Iniciá sesión para chatear.');
    return;
  }

  const emailFinal = emailCandidato || sesion.email;
  chatIdActual = idChat(vacanteId, emailFinal);

  document.getElementById('chat-empresa-nombre').textContent = empresaNombre;
  document.getElementById('chat-vacante-titulo').textContent = tituloVacante;
  document.getElementById('chat-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Guarda/actualiza metadata de la conversación
  setDoc(doc(db, 'chats', chatIdActual), {
    vacanteId, tituloVacante, empresaNombre,
    emailCandidato: emailFinal,
    actualizadoEn: serverTimestamp()
  }, { merge: true }).catch(err => console.error('Error guardando metadata del chat:', err));

  if (unsubscribeChat) unsubscribeChat();
  const q = query(collection(db, 'chats', chatIdActual, 'mensajes'), orderBy('timestamp', 'asc'));
  unsubscribeChat = onSnapshot(q, snap => {
    renderMensajes(snap.docs.map(d => d.data()));
  }, err => {
    console.error('Error escuchando el chat:', err);
    window.mostrarNotif('⚠️ No se pudo conectar con el chat.');
  });
};

window.cerrarChat = function () {
  document.getElementById('chat-overlay').style.display = 'none';
  document.body.style.overflow = '';
  if (unsubscribeChat) { unsubscribeChat(); unsubscribeChat = null; }
  chatIdActual = null;
};

window.enviarMensaje = async function () {
  const input = document.getElementById('chat-input');
  const texto = input.value.trim();
  if (!texto || !chatIdActual) return;

  const sesion = window.getSesion();
  if (!sesion) return;

  input.value = '';
  try {
    await addDoc(collection(db, 'chats', chatIdActual, 'mensajes'), {
      texto,
      autorEmail: sesion.email,
      autorNombre: sesion.nombre,
      timestamp: serverTimestamp()
    });
  } catch (err) {
    console.error('Error enviando mensaje:', err);
    window.mostrarNotif('⚠️ No se pudo enviar el mensaje.');
  }
};

window.usarSugerencia = function (texto) {
  const input = document.getElementById('chat-input');
  input.value = texto;
  window.enviarMensaje();
};

window.chatKeyDown = function (event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    window.enviarMensaje();
  }
};

// ── Delegación de eventos: cualquier botón .btn-chat abre el chat correspondiente ──
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn-chat');
  if (!btn) return;
  window.abrirChat(
    Number(btn.dataset.vacanteId),
    btn.dataset.titulo,
    btn.dataset.empresa,
    btn.dataset.emailCandidato || undefined
  );
});

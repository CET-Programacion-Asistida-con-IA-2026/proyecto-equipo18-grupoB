/* =============================================
   EmpleoYA — Lógica principal
   ============================================= */

// ===================== DATOS Necesarios =====================

const vacantesBase = [
  {
    id: 1, titulo: "Desarrollador Frontend", empresa: "MercadoLibre",
    modalidad: "remoto", horario: "full-time", idioma: "ingles", zona: "remote",
    salario: "$600.000 – $900.000", ubicacion: "Remote · LATAM",
    area: "Tecnología", descripcion: "React, TypeScript, pruebas unitarias y CI/CD.",
    fecha: "hace 2 días"
  },
  {
    id: 2, titulo: "Diseñador UX/UI", empresa: "Despegar",
    modalidad: "tiempo-completo", horario: "full-time", idioma: "español", zona: "palermo",
    salario: "$450.000 – $650.000", ubicacion: "Palermo, CABA",
    area: "Diseño", descripcion: "Figma, investigación de usuarios, prototipado y design system.",
    fecha: "hace 1 día"
  },
  {
    id: 3, titulo: "Analista de Marketing Digital", empresa: "OLX",
    modalidad: "tiempo-completo", horario: "full-time", idioma: "español", zona: "microcentro",
    salario: "$350.000 – $500.000", ubicacion: "Microcentro, CABA",
    area: "Marketing", descripcion: "SEM, SEO, campañas pagas y reporting mensual.",
    fecha: "hace 3 días"
  },
  {
    id: 4, titulo: "Backend Developer", empresa: "Naranja X",
    modalidad: "remoto", horario: "full-time", idioma: "ingles", zona: "remote",
    salario: "$700.000 – $1.000.000", ubicacion: "Remote · Argentina",
    area: "Tecnología", descripcion: "Node.js, PostgreSQL, APIs REST y microservicios.",
    fecha: "hoy"
  },
  {
    id: 5, titulo: "Analista Financiero", empresa: "Banco Nación",
    modalidad: "tiempo-completo", horario: "full-time", idioma: "español", zona: "microcentro",
    salario: "$400.000 – $550.000", ubicacion: "Microcentro, CABA",
    area: "Finanzas", descripcion: "Excel avanzado, estados contables y proyecciones financieras.",
    fecha: "hace 5 días"
  },
  {
    id: 6, titulo: "Social Media Manager", empresa: "Globant",
    modalidad: "medio-tiempo", horario: "part-time", idioma: "español", zona: "villa-crespo",
    salario: "$250.000 – $380.000", ubicacion: "Villa Crespo, CABA",
    area: "Marketing", descripcion: "Instagram, TikTok, calendario editorial y community.",
    fecha: "hace 2 días"
  },
  {
    id: 7, titulo: "Data Analyst", empresa: "Santander Tech",
    modalidad: "remoto", horario: "full-time", idioma: "ingles", zona: "remote",
    salario: "$550.000 – $800.000", ubicacion: "Remote · Argentina",
    area: "Tecnología", descripcion: "Python, SQL, dashboards en Power BI y Tableau.",
    fecha: "hoy"
  },
  {
    id: 8, titulo: "Product Designer", empresa: "Ualá",
    modalidad: "tiempo-completo", horario: "full-time", idioma: "español", zona: "palermo",
    salario: "$500.000 – $750.000", ubicacion: "Palermo, CABA",
    area: "Diseño", descripcion: "Design systems, accesibilidad, Figma y motion design.",
    fecha: "hace 4 días"
  },
  {
    id: 9, titulo: "Representante de Ventas", empresa: "Telecom",
    modalidad: "tiempo-completo", horario: "flexible", idioma: "español", zona: "belgrano",
    salario: "$300.000 – $450.000 + comisiones", ubicacion: "Belgrano, CABA",
    area: "Ventas", descripcion: "Venta consultiva B2B, gestión de cartera y CRM.",
    fecha: "hace 1 día"
  },
  {
    id: 10, titulo: "DevOps Engineer", empresa: "Accenture",
    modalidad: "remoto", horario: "full-time", idioma: "ingles-avanzado", zona: "remote",
    salario: "$800.000 – $1.200.000", ubicacion: "Remote · Global",
    area: "Tecnología", descripcion: "AWS, Docker, Kubernetes, CI/CD pipelines.",
    fecha: "hoy"
  },
  {
    id: 11, titulo: "HR Business Partner", empresa: "Pedidos Ya",
    modalidad: "tiempo-completo", horario: "full-time", idioma: "portugues", zona: "palermo",
    salario: "$480.000 – $640.000", ubicacion: "Palermo, CABA",
    area: "Recursos Humanos", descripcion: "Gestión del talento, cultura organizacional y onboarding.",
    fecha: "hace 3 días"
  },
  {
    id: 12, titulo: "Copywriter Creativo", empresa: "Ogilvy",
    modalidad: "medio-tiempo", horario: "flexible", idioma: "español", zona: "san-telmo",
    salario: "$200.000 – $320.000", ubicacion: "San Telmo, CABA",
    area: "Marketing", descripcion: "Redacción de campañas, conceptos creativos y brand voice.",
    fecha: "hace 6 días"
  }
];

// ── Para el desarrollador: editá este array para agregar/quitar empresas en el mapa ──
// Campos: nombre, sector, vacantesNum, iniciales, color, lat, lng, direccion
const empresas = [
  { nombre: "MercadoLibre", sector: "E-commerce · Tech", vacantesNum: 12, iniciales: "ML", color: "#FFC107", lat: -34.5881, lng: -58.4335, direccion: "Arias 3751, Belgrano, CABA" },
  { nombre: "Globant",       sector: "Software · IT",     vacantesNum: 8,  iniciales: "GL", color: "#1B4FD8", lat: -34.5975, lng: -58.3771, direccion: "Av. Córdoba 1690, CABA" },
  { nombre: "Despegar",      sector: "Turismo · Tech",    vacantesNum: 5,  iniciales: "DE", color: "#0F8A5F", lat: -34.5765, lng: -58.4272, direccion: "Suipacha 1111, Retiro, CABA" },
  { nombre: "Naranja X",     sector: "Fintech",           vacantesNum: 6,  iniciales: "NX", color: "#F4511E", lat: -34.6158, lng: -58.3731, direccion: "Av. San Juan 1100, San Telmo, CABA" },
  { nombre: "Ualá",          sector: "Fintech",           vacantesNum: 4,  iniciales: "UA", color: "#673AB7", lat: -34.5869, lng: -58.4152, direccion: "Honduras 5860, Palermo, CABA" },
  { nombre: "OLX Argentina", sector: "Marketplace",       vacantesNum: 3,  iniciales: "OX", color: "#00897B", lat: -34.6082, lng: -58.3692, direccion: "Av. Paseo Colón 505, Microcentro, CABA" }
];

const tips = [
  { icon: "🎯", titulo: "Agregá palabras clave del sector",   desc: "Tu CV carece de términos técnicos buscados por los reclutadores. Incluí lenguajes, herramientas y metodologías específicas del área.", prioridad: "alta" },
  { icon: "📊", titulo: "Cuantificá tus logros",              desc: 'Evitá frases genéricas. Reemplazá "mejoré procesos" por "reduje el tiempo de entrega un 30% en 3 meses".', prioridad: "alta" },
  { icon: "🔍", titulo: "Optimizá para sistemas ATS",         desc: "Muchas empresas usan software de filtrado automático. Usá un formato limpio, sin columnas ni tablas complejas.", prioridad: "media" },
  { icon: "✉️", titulo: "Actualizá tu correo profesional",   desc: "Usá un email con tu nombre y apellido. Evitá apodos o números genéricos que den sensación de poca seriedad.", prioridad: "baja" },
  { icon: "📝", titulo: "Agregá un resumen profesional",      desc: "Falta una sección inicial de 3-4 líneas que comunique quién sos, tu experiencia y el valor que aportás.", prioridad: "alta" },
  { icon: "🌐", titulo: "Incluí links a tu trabajo",          desc: "Añadí tu perfil de LinkedIn, GitHub o portafolio. Los reclutadores valoran poder ver ejemplos concretos de tu trabajo.", prioridad: "media" }
];

// ===================== ESTADO DE FILTROS =====================

let vacantes = [...vacantesBase];

const filtrosActivos = {
  area: "",
  modalidad: "",
  horario: "",
  idioma: "",
  zona: ""
};

const labelsFiltros = {
  area:      { "": "Todas las áreas",     "Tecnología": "Tecnología", "Marketing": "Marketing", "Diseño": "Diseño", "Finanzas": "Finanzas", "Ventas": "Ventas", "Recursos Humanos": "RRHH" },
  modalidad: { "": "Cualquier modalidad", "tiempo-completo": "Tiempo completo", "medio-tiempo": "Medio tiempo", "remoto": "Remoto" },
  horario:   { "": "Cualquier horario",   "full-time": "Full-time", "part-time": "Part-time", "flexible": "Flexible" },
  idioma:    { "": "Cualquier idioma",    "español": "Español", "ingles": "Inglés", "ingles-avanzado": "Inglés avanzado", "portugues": "Portugués" },
  zona:      { "": "Toda la ciudad",      "palermo": "Palermo", "microcentro": "Microcentro", "belgrano": "Belgrano", "villa-crespo": "Villa Crespo", "san-telmo": "San Telmo", "remote": "Remoto" }
};

// ===================== TABS =====================

function mostrarTab(nombre) {
  ["vacantes", "mapa", "cv"].forEach(t => {
    document.getElementById("sec-" + t).classList.remove("visible");
    document.getElementById("tab-" + t).classList.remove("activo");
    document.getElementById("nav-" + t).classList.remove("activo");
  });
  document.getElementById("sec-" + nombre).classList.add("visible");
  document.getElementById("tab-" + nombre).classList.add("activo");
  document.getElementById("nav-" + nombre).classList.add("activo");

  // Inicializar mapa Leaflet la primera vez que se abre la tab
  if (nombre === 'mapa') {
    setTimeout(() => {
      inicializarMapa();
      if (mapaLeaflet) mapaLeaflet.invalidateSize();
    }, 100);
  }
}

// ===================== RENDER VACANTES =====================

function renderVacantes(lista) {
  const grid = document.getElementById("vacantes-grid");
  const conteo = document.getElementById("conteo-vacantes");
  const n = lista.length;
  conteo.textContent = n + " puesto" + (n !== 1 ? "s" : "") + " encontrado" + (n !== 1 ? "s" : "");

  if (n === 0) {
    grid.innerHTML = `
      <div class="vacantes-vacio">
        <span class="vacio-icon">🔎</span>
        <p>No se encontraron vacantes con esos filtros.<br>Probá combinaciones distintas.</p>
      </div>`;
    return;
  }

  const modalidadLabel = { "tiempo-completo": "Tiempo completo", "medio-tiempo": "Medio tiempo", "remoto": "Remoto" };
  const modalidadClass = { "tiempo-completo": "badge-tiempo-completo", "medio-tiempo": "badge-medio-tiempo", "remoto": "badge-remoto" };
  const idiomaLabel    = { "español": "Español", "ingles": "Inglés", "ingles-avanzado": "Inglés avanzado", "portugues": "Portugués" };
  const horarioLabel   = { "full-time": "Full-time", "part-time": "Part-time", "flexible": "Flexible" };

  grid.innerHTML = lista.map(v => `
    <div class="vacante-card">
      <div class="vacante-badges">
        <span class="vacante-badge ${modalidadClass[v.modalidad]}">${modalidadLabel[v.modalidad]}</span>
        <span class="vacante-badge badge-idioma">🌐 ${idiomaLabel[v.idioma] || v.idioma}</span>
        <span class="vacante-badge badge-zona">⏱ ${horarioLabel[v.horario] || v.horario}</span>
      </div>
      <h3>${v.titulo}</h3>
      <p class="vacante-empresa">🏢 ${v.empresa} · ${v.area}</p>
      <div class="vacante-detalles">
        <span>📍 ${v.ubicacion}</span>
        <span>🕐 ${v.fecha}</span>
      </div>
      <p class="vacante-desc">${v.descripcion}</p>
      <div class="vacante-footer">
        <span class="vacante-salario">${v.salario}</span>
        <div style="display:flex;gap:8px;">
          <button class="btn-chat" onclick="abrirChat('${v.empresa}', ${v.id}, '${v.titulo}')">💬 Chat</button>
          <button class="btn-postular" onclick="postular(${v.id})">Postularme</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ===================== FILTROS =====================

function aplicarFiltros() {
  const q = (document.getElementById("busqueda-hero").value || "").toLowerCase();

  const resultado = vacantes.filter(v => {
    const coincideTexto = !q ||
      v.titulo.toLowerCase().includes(q) ||
      v.empresa.toLowerCase().includes(q) ||
      v.area.toLowerCase().includes(q) ||
      v.descripcion.toLowerCase().includes(q);

    const coincideArea      = !filtrosActivos.area     || v.area      === filtrosActivos.area;
    const coincideModalidad = !filtrosActivos.modalidad || v.modalidad === filtrosActivos.modalidad;
    const coincideHorario   = !filtrosActivos.horario   || v.horario   === filtrosActivos.horario;
    const coincideIdioma    = !filtrosActivos.idioma    || v.idioma    === filtrosActivos.idioma;
    const coincideZona      = !filtrosActivos.zona      || v.zona      === filtrosActivos.zona;

    return coincideTexto && coincideArea && coincideModalidad && coincideHorario && coincideIdioma && coincideZona;
  });

  renderVacantes(resultado);
  renderTagsActivos();
}

function onCambioFiltro(clave, valor) {
  filtrosActivos[clave] = valor;
  aplicarFiltros();
}

function limpiarFiltros() {
  filtrosActivos.area = "";
  filtrosActivos.modalidad = "";
  filtrosActivos.horario = "";
  filtrosActivos.idioma = "";
  filtrosActivos.zona = "";

  ["f-area", "f-modalidad", "f-horario", "f-idioma", "f-zona"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  renderVacantes(vacantes);
  renderTagsActivos();
}

function renderTagsActivos() {
  const contenedor = document.getElementById("tags-activos");
  const claves = ["area", "modalidad", "horario", "idioma", "zona"];
  const tags = claves
    .filter(c => filtrosActivos[c])
    .map(c => {
      const label = labelsFiltros[c][filtrosActivos[c]] || filtrosActivos[c];
      return `<span class="tag-filtro">
        ${label}
        <button onclick="quitarFiltro('${c}')" title="Quitar filtro">×</button>
      </span>`;
    });
  contenedor.innerHTML = tags.join("");
}

function quitarFiltro(clave) {
  filtrosActivos[clave] = "";
  const id = "f-" + clave;
  const el = document.getElementById(id);
  if (el) el.value = "";
  aplicarFiltros();
}

function buscarVacantes() {
  mostrarTab("vacantes");
  aplicarFiltros();
}

// ===================== PUBLICAR VACANTE =====================

function publicarVacante() {
  const titulo  = document.getElementById("v-titulo").value.trim();
  const empresa = document.getElementById("v-empresa").value.trim();
  if (!titulo || !empresa) {
    mostrarNotif("⚠️ Completá al menos el título y la empresa.");
    return;
  }

  const nueva = {
    id:        vacantes.length + 1,
    titulo,
    empresa,
    modalidad: document.getElementById("v-modalidad").value,
    horario:   document.getElementById("v-horario").value,
    idioma:    document.getElementById("v-idioma").value,
    zona:      document.getElementById("v-zona-form").value,
    salario:   document.getElementById("v-salario").value || "A convenir",
    ubicacion: document.getElementById("v-ubicacion").value || "Buenos Aires",
    area:      document.getElementById("v-area").value,
    descripcion: document.getElementById("v-descripcion").value || "Ver descripción completa al postularte.",
    fecha:     "recién publicado"
  };

  vacantes.unshift(nueva);
  aplicarFiltros();

  ["v-titulo","v-empresa","v-salario","v-ubicacion","v-descripcion"].forEach(id => {
    document.getElementById(id).value = "";
  });

  mostrarNotif("✅ Vacante publicada correctamente.");
}

function postular(id) {
  const sesion = getSesion();

  if (!sesion) {
    abrirModal('login');
    mostrarNotif('🔒 Iniciá sesión para postularte.');
    return;
  }
  if (sesion.tipo === 'empresa') {
    mostrarNotif('⚠️ Las cuentas de empresa no pueden postularse a vacantes.');
    return;
  }

  // Verificar si ya se postuló
  const postulaciones = getPostulaciones(sesion.email);
  if (postulaciones.find(p => p.vacanteId === id)) {
    mostrarNotif('ℹ️ Ya te postulaste a esta vacante.');
    return;
  }

  const v = vacantes.find(x => x.id === id);
  const nueva = {
    vacanteId: id,
    titulo:    v.titulo,
    empresa:   v.empresa,
    fecha:     new Date().toLocaleDateString('es-AR'),
    estado:    'enviada'
  };
  guardarPostulacion(sesion.email, nueva);

  // Guardar postulante para la empresa
  guardarPostulante(sesion.email, sesion.nombre, id, v.titulo, v.empresa);

  mostrarNotif('🚀 Postulación enviada a ' + v.empresa + '. ¡Éxitos!');
}

// ===================== EMPRESAS =====================

function renderEmpresas() {
  document.getElementById("empresas-lista").innerHTML = empresas.map(e => `
    <div class="empresa-card">
      <div class="empresa-logo" style="background:${e.color}22; color:${e.color};">${e.iniciales}</div>
      <div class="empresa-info">
        <h4>${e.nombre}</h4>
        <p>${e.sector}</p>
        <span class="empresa-vacantes">${e.vacantesNum} vacantes</span>
      </div>
    </div>
  `).join("");
}

// ===================== CV =====================

function procesarCV(input) {
  if (!input.files || !input.files[0]) return;
  const archivo = input.files[0];
  if (archivo.size > 5 * 1024 * 1024) {
    mostrarNotif("⚠️ El archivo supera los 5 MB permitidos.");
    return;
  }
  document.getElementById("cv-analisis").classList.remove("visible");
  document.getElementById("loading-cv").classList.add("visible");
  setTimeout(() => {
    document.getElementById("loading-cv").classList.remove("visible");
    mostrarAnalisis(archivo.name);
  }, 2200);
}

function mostrarAnalisis(nombreArchivo) {
  document.getElementById("cv-nombre").textContent = nombreArchivo;
  document.getElementById("cv-fecha").textContent = new Date().toLocaleDateString("es-AR", {
    day: "numeric", month: "long", year: "numeric"
  });
  document.getElementById("cv-analisis").classList.add("visible");
  const score = 55 + Math.floor(Math.random() * 25);
  animarScore(score);
  renderTips();
  mostrarNotif("✅ CV analizado. Tu puntaje: " + score + "/100");
}

function animarScore(score) {
  const circle = document.getElementById("score-circle");
  const numEl  = document.getElementById("score-num");
  const C = 213.6;
  let actual = 0;
  const iv = setInterval(() => {
    actual += 2;
    if (actual >= score) { actual = score; clearInterval(iv); }
    numEl.textContent = actual;
    circle.style.strokeDashoffset = C - (actual / 100) * C;
    circle.style.stroke = actual >= 75 ? "#0F8A5F" : actual >= 50 ? "#D96C0A" : "#D32F2F";
  }, 22);
}

function renderTips() {
  document.getElementById("tips-grid").innerHTML = tips.map(t => `
    <div class="tip-card">
      <span class="tip-icon">${t.icon}</span>
      <h4>${t.titulo}</h4>
      <p>${t.desc}</p>
      <span class="tip-prioridad prioridad-${t.prioridad}">Prioridad ${t.prioridad}</span>
    </div>
  `).join("");
}

// ===================== DRAG & DROP CV =====================

document.addEventListener("DOMContentLoaded", () => {
  const uploadArea = document.getElementById("upload-area");

  uploadArea.addEventListener("dragover", e => {
    e.preventDefault();
    uploadArea.classList.add("drag-over");
  });
  uploadArea.addEventListener("dragleave", () => uploadArea.classList.remove("drag-over"));
  uploadArea.addEventListener("drop", e => {
    e.preventDefault();
    uploadArea.classList.remove("drag-over");
    const file = e.dataTransfer.files[0];
    if (file) {
      const inp = document.getElementById("cv-file");
      const dt = new DataTransfer();
      dt.items.add(file);
      inp.files = dt.files;
      procesarCV(inp);
    }
  });

  // Init
  renderVacantes(vacantes);
  renderEmpresas();
});

// ===================== NOTIFICACIÓN =====================

function mostrarNotif(msg) {
  const n = document.getElementById("notif");
  n.textContent = msg;
  n.classList.add("show");
  setTimeout(() => n.classList.remove("show"), 3200);
}

// ===================== CV — SELECTOR =====================

function mostrarOpcionCV(opcion) {
  document.getElementById('cv-selector').style.display  = 'none';
  document.getElementById('panel-subir').style.display  = opcion === 'subir' ? 'block' : 'none';
  document.getElementById('panel-crear').style.display  = opcion === 'crear' ? 'block' : 'none';

  if (opcion === 'crear') {
    // Inicializar con una entrada vacía si todavía no tiene ninguna
    if (!document.querySelector('#lista-experiencia .cv-entrada'))  agregarEntrada('experiencia');
    if (!document.querySelector('#lista-educacion .cv-entrada'))    agregarEntrada('educacion');
    if (!document.querySelector('#lista-herramientas .cv-entrada')) agregarEntrada('herramientas');
  }
}

function volverSelector() {
  document.getElementById('cv-selector').style.display  = '';
  document.getElementById('panel-subir').style.display  = 'none';
  document.getElementById('panel-crear').style.display  = 'none';
  // Limpiar estado del análisis
  document.getElementById('loading-cv').classList.remove('visible');
  document.getElementById('cv-analisis').classList.remove('visible');
  document.getElementById('upload-area').classList.remove('drag-over');
}

// ===================== CV — ENTRADAS DINÁMICAS =====================

const cvContadores = { experiencia: 0, educacion: 0, cursos: 0, herramientas: 0 };

const cvPlantillas = {
  experiencia: (id) => `
    <div class="cv-entrada" id="exp-${id}">
      <button class="cv-entrada-eliminar" onclick="eliminarEntrada('exp-${id}')" title="Eliminar">✕</button>
      <div class="cv-entrada-grid">
        <div class="cv-campo"><label>Empresa</label><input type="text" placeholder="Ej: Mercado Libre" data-campo="empresa"></div>
        <div class="cv-campo"><label>Puesto</label><input type="text" placeholder="Ej: Analista de Marketing" data-campo="puesto"></div>
        <div class="cv-campo"><label>Desde</label><input type="text" placeholder="Ej: Enero 2022" data-campo="desde"></div>
        <div class="cv-campo"><label>Hasta</label><input type="text" placeholder="Ej: Actualidad" data-campo="hasta"></div>
      </div>
      <div class="cv-campo" style="margin-top:12px;">
        <label>Descripción de tareas (opcional)</label>
        <textarea rows="2" placeholder="Ej: Gestioné campañas digitales, analicé métricas..." data-campo="descripcion"></textarea>
      </div>
    </div>`,

  educacion: (id) => `
    <div class="cv-entrada" id="edu-${id}">
      <button class="cv-entrada-eliminar" onclick="eliminarEntrada('edu-${id}')" title="Eliminar">✕</button>
      <div class="cv-entrada-grid">
        <div class="cv-campo"><label>Institución</label><input type="text" placeholder="Ej: UBA" data-campo="institucion"></div>
        <div class="cv-campo"><label>Título / Carrera</label><input type="text" placeholder="Ej: Lic. en Comunicación" data-campo="titulo"></div>
        <div class="cv-campo"><label>Desde</label><input type="text" placeholder="Ej: 2018" data-campo="desde"></div>
        <div class="cv-campo"><label>Hasta</label><input type="text" placeholder="Ej: 2023 / En curso" data-campo="hasta"></div>
      </div>
    </div>`,

  cursos: (id) => `
    <div class="cv-entrada" id="cur-${id}">
      <button class="cv-entrada-eliminar" onclick="eliminarEntrada('cur-${id}')" title="Eliminar">✕</button>
      <div class="cv-entrada-grid">
        <div class="cv-campo"><label>Nombre del curso</label><input type="text" placeholder="Ej: Google Analytics" data-campo="nombre"></div>
        <div class="cv-campo"><label>Plataforma / Institución</label><input type="text" placeholder="Ej: Coursera" data-campo="institucion"></div>
        <div class="cv-campo"><label>Año</label><input type="text" placeholder="Ej: 2023" data-campo="anio"></div>
        <div class="cv-campo"><label>Duración (opcional)</label><input type="text" placeholder="Ej: 40 horas" data-campo="duracion"></div>
      </div>
    </div>`,

  herramientas: (id) => `
    <div class="cv-entrada" id="her-${id}">
      <button class="cv-entrada-eliminar" onclick="eliminarEntrada('her-${id}')" title="Eliminar">✕</button>
      <div class="cv-entrada-grid">
        <div class="cv-campo"><label>Herramienta</label><input type="text" placeholder="Ej: Figma, Excel, Notion" data-campo="nombre"></div>
        <div class="cv-campo"><label>Nivel</label>
          <select data-campo="nivel">
            <option value="">Seleccioná el nivel</option>
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>
      </div>
    </div>`
};

function agregarEntrada(tipo) {
  cvContadores[tipo]++;
  const id = cvContadores[tipo];
  const lista = document.getElementById('lista-' + tipo);
  if (lista) lista.insertAdjacentHTML('beforeend', cvPlantillas[tipo](id));
}

function eliminarEntrada(entradaId) {
  const el = document.getElementById(entradaId);
  if (el) el.remove();
}

// ===================== CV — RECOPILAR DATOS =====================

function recopilarDatosCV() {
  const v = (id) => (document.getElementById(id) || {}).value || '';

  const recopilarLista = (listaId) => {
    const lista = document.getElementById(listaId);
    if (!lista) return [];
    return [...lista.querySelectorAll('.cv-entrada')].map(entrada => {
      const obj = {};
      entrada.querySelectorAll('[data-campo]').forEach(campo => {
        obj[campo.dataset.campo] = campo.value || '';
      });
      return obj;
    }).filter(obj => Object.values(obj).some(val => val.trim()));
  };

  return {
    nombre:    v('cv-nombre-completo'),
    email:     v('cv-email'),
    telefono:  v('cv-telefono'),
    ciudad:    v('cv-ciudad'),
    linkedin:  v('cv-linkedin'),
    puesto:    v('cv-puesto-objetivo'),
    resumen:   v('cv-resumen'),
    habilidadesBlandas:  v('cv-habilidades-blandas'),
    habilidadesTecnicas: v('cv-habilidades-tecnicas'),
    idiomas:   v('cv-idiomas'),
    experiencia:  recopilarLista('lista-experiencia'),
    educacion:    recopilarLista('lista-educacion'),
    cursos:       recopilarLista('lista-cursos'),
    herramientas: recopilarLista('lista-herramientas'),
  };
}

// ===================== CV — RENDERIZAR HTML =====================

function renderizarCV(d) {
  const seccion = (titulo, html) => html
    ? `<div class="preview-seccion"><div class="preview-seccion-titulo">${titulo}</div>${html}</div>`
    : '';

  const chips = (texto) => {
    if (!texto) return '';
    return '<div class="preview-chips">' +
      texto.split(',').map(t => t.trim()).filter(Boolean)
        .map(t => `<span class="preview-chip">${t}</span>`).join('') +
      '</div>';
  };

  const contacto = [d.email, d.telefono, d.ciudad, d.linkedin]
    .filter(Boolean).map(c => `<span>${c}</span>`).join('');

  const expHTML = d.experiencia.map(e => `
    <div class="preview-item">
      <div class="preview-item-titulo">${e.puesto || ''}</div>
      <div class="preview-item-sub">${e.empresa || ''}${e.desde || e.hasta ? ' · ' + (e.desde || '') + (e.hasta ? ' — ' + e.hasta : '') : ''}</div>
      ${e.descripcion ? `<div class="preview-item-desc">${e.descripcion}</div>` : ''}
    </div>`).join('');

  const eduHTML = d.educacion.map(e => `
    <div class="preview-item">
      <div class="preview-item-titulo">${e.titulo || ''}</div>
      <div class="preview-item-sub">${e.institucion || ''}${e.desde || e.hasta ? ' · ' + (e.desde || '') + (e.hasta ? ' — ' + e.hasta : '') : ''}</div>
    </div>`).join('');

  const curHTML = d.cursos.map(c => `
    <div class="preview-item">
      <div class="preview-item-titulo">${c.nombre || ''}</div>
      <div class="preview-item-sub">${c.institucion || ''}${c.anio ? ' · ' + c.anio : ''}${c.duracion ? ' · ' + c.duracion : ''}</div>
    </div>`).join('');

  const herHTML = d.herramientas.length
    ? '<div class="preview-chips">' +
        d.herramientas.map(h => `<span class="preview-chip">${h.nombre}${h.nivel ? ' · ' + h.nivel : ''}</span>`).join('') +
      '</div>'
    : '';

  const habilidadesHTML = (d.habilidadesBlandas || d.habilidadesTecnicas || d.idiomas) ? `
    ${d.habilidadesBlandas  ? `<p style="font-size:.78rem;font-weight:700;margin:4px 0 3px;color:#333;">Blandas</p>${chips(d.habilidadesBlandas)}` : ''}
    ${d.habilidadesTecnicas ? `<p style="font-size:.78rem;font-weight:700;margin:8px 0 3px;color:#333;">Técnicas</p>${chips(d.habilidadesTecnicas)}` : ''}
    ${d.idiomas             ? `<p style="font-size:.78rem;font-weight:700;margin:8px 0 3px;color:#333;">Idiomas</p>${chips(d.idiomas)}` : ''}
  ` : '';

  return `
    <div class="preview-nombre">${d.nombre || 'Tu nombre'}</div>
    ${d.puesto ? `<div class="preview-puesto">${d.puesto}</div>` : ''}
    <div class="preview-contacto">${contacto}</div>
    ${d.resumen ? seccion('Perfil profesional', `<p style="font-size:.85rem;color:#444;line-height:1.6;">${d.resumen}</p>`) : ''}
    ${expHTML ? seccion('Experiencia laboral', expHTML) : ''}
    ${eduHTML ? seccion('Educación', eduHTML) : ''}
    ${curHTML ? seccion('Cursos y capacitaciones', curHTML) : ''}
    ${habilidadesHTML ? seccion('Habilidades e idiomas', habilidadesHTML) : ''}
    ${herHTML ? seccion('Herramientas digitales', herHTML) : ''}
  `;
}

// ===================== CV — VISTA PREVIA =====================

function mostrarPreviewCV() {
  const datos = recopilarDatosCV();
  document.getElementById('cv-preview-contenido').innerHTML = renderizarCV(datos);
  document.getElementById('cv-preview-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarPreview() {
  document.getElementById('cv-preview-overlay').style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('click', function(e) {
  const overlay = document.getElementById('cv-preview-overlay');
  if (e.target === overlay) cerrarPreview();
});

// ===================== CV — DESCARGAR =====================

function descargarCV() {
  const datos = recopilarDatosCV();
  const contenido = renderizarCV(datos);
  const nombreArchivo = (datos.nombre || 'Mi_CV').replace(/\s+/g, '_');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>CV — ${datos.nombre || 'Mi CV'}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: Georgia, serif; color: #111; padding: 50px 60px; max-width: 800px; margin: auto; }
    .preview-nombre { font-size:1.8rem; font-weight:700; color:#1B4FD8; margin-bottom:2px; }
    .preview-puesto { font-size:.98rem; color:#555; margin-bottom:10px; }
    .preview-contacto { font-size:.8rem; color:#666; display:flex; flex-wrap:wrap; gap:16px; padding-bottom:14px; border-bottom:2px solid #1B4FD8; margin-bottom:4px; }
    .preview-seccion { margin-top:20px; }
    .preview-seccion-titulo { font-size:.72rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#1B4FD8; padding-bottom:4px; border-bottom:1px solid #E2E5EF; margin-bottom:10px; }
    .preview-item { margin-bottom:12px; }
    .preview-item-titulo { font-weight:700; font-size:.93rem; }
    .preview-item-sub { font-size:.85rem; color:#555; }
    .preview-item-desc { font-size:.82rem; color:#444; margin-top:3px; font-style:italic; }
    .preview-chips { display:flex; flex-wrap:wrap; gap:7px; margin-top:6px; }
    .preview-chip { background:#E8EFFE; color:#1B4FD8; border-radius:20px; padding:3px 11px; font-size:.78rem; font-family:Arial,sans-serif; }
    @media print { body { padding:20px 30px; } }
  </style>
</head>
<body>${contenido}</body>
</html>`;

  // Descargar .html
  const blob = new Blob([html], { type: 'text/html' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `${nombreArchivo}.html`;
  a.click();
  URL.revokeObjectURL(url);

  // Abrir en nueva pestaña para guardar como PDF con Ctrl+P
  const tab = window.open('', '_blank');
  if (tab) {
    tab.document.write(html);
    tab.document.close();
    setTimeout(() => tab.print(), 600);
  }

  mostrarNotif('✅ CV listo. En la nueva pestaña podés guardarlo como PDF (Ctrl+P).');
}

// ===================== MAPA LEAFLET =====================

let mapaLeaflet = null;
let marcadorUsuario = null;
let posUsuario = null;

function inicializarMapa() {
  if (mapaLeaflet) return; // ya inicializado

  // Centro por defecto: Buenos Aires
  mapaLeaflet = L.map('mapa-leaflet').setView([-34.6037, -58.3816], 13);

  // Tiles OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(mapaLeaflet);

  // Marcadores de empresas
  empresas.forEach(e => {
    const icono = L.divIcon({
      className: '',
      html: `<div style="
        background:${e.color};
        color:#fff;
        width:36px; height:36px;
        border-radius:50%;
        display:flex; align-items:center; justify-content:center;
        font-weight:700; font-size:0.75rem;
        border:3px solid #fff;
        box-shadow:0 2px 8px rgba(0,0,0,0.25);
        font-family:Inter,sans-serif;
      ">${e.iniciales}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -20]
    });

    L.marker([e.lat, e.lng], { icon: icono })
      .addTo(mapaLeaflet)
      .bindPopup(`
        <div style="font-family:Inter,sans-serif; min-width:160px;">
          <strong style="font-size:0.95rem;">${e.nombre}</strong><br>
          <span style="font-size:0.8rem; color:#666;">${e.sector}</span><br>
          <span style="font-size:0.78rem; color:#555; margin-top:4px; display:block;">📍 ${e.direccion}</span>
          <span style="
            display:inline-block; margin-top:6px;
            background:#E8EFFE; color:#1B4FD8;
            border-radius:20px; padding:2px 10px;
            font-size:0.75rem; font-weight:600;
          ">${e.vacantesNum} vacantes</span>
        </div>
      `);
  });

  // Geolocalización del usuario
  ubicarUsuario();
}

function ubicarUsuario() {
  const btn = document.getElementById('btn-ubicar');
  if (!navigator.geolocation) {
    mostrarNotif('⚠️ Tu navegador no soporta geolocalización.');
    return;
  }

  if (btn) { btn.textContent = '⏳ Buscando...'; btn.disabled = true; }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      posUsuario = { lat: pos.coords.latitude, lng: pos.coords.longitude };

      // Marcador usuario
      if (marcadorUsuario) mapaLeaflet.removeLayer(marcadorUsuario);
      const iconoUsuario = L.divIcon({
        className: '',
        html: `<div style="
          width:18px; height:18px;
          background:#1B4FD8;
          border-radius:50%;
          border:3px solid #fff;
          box-shadow:0 0 0 4px rgba(27,79,216,0.3);
        "></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      });
      marcadorUsuario = L.marker([posUsuario.lat, posUsuario.lng], { icon: iconoUsuario })
        .addTo(mapaLeaflet)
        .bindPopup('<strong style="font-family:Inter,sans-serif">📍 Tu ubicación</strong>');

      mapaLeaflet.flyTo([posUsuario.lat, posUsuario.lng], 14, { duration: 1.2 });
      actualizarDistancias();
      if (btn) { btn.textContent = '📍 Mi ubicación'; btn.disabled = false; }
    },
    (err) => {
      const msgs = {
        1: '🔒 Permiso de ubicación denegado.',
        2: '📡 No se pudo obtener la ubicación.',
        3: '⏱️ Tiempo de espera agotado.'
      };
      mostrarNotif(msgs[err.code] || '⚠️ Error de geolocalización.');
      if (btn) { btn.textContent = '📍 Mi ubicación'; btn.disabled = false; }
    },
    { timeout: 10000, enableHighAccuracy: true }
  );
}

function calcularDistanciaKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 +
            Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) *
            Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function actualizarDistancias() {
  if (!posUsuario) return;
  const lista = document.getElementById('empresas-lista');
  if (!lista) return;

  // Calcular distancias y ordenar
  const conDistancia = empresas.map(e => ({
    ...e,
    distancia: calcularDistanciaKm(posUsuario.lat, posUsuario.lng, e.lat, e.lng)
  })).sort((a, b) => a.distancia - b.distancia);

  lista.innerHTML = conDistancia.map((e, i) => {
    const dist = e.distancia < 1
      ? Math.round(e.distancia * 1000) + ' m'
      : e.distancia.toFixed(1) + ' km';
    const cercana = i === 0 ? `<span class="empresa-tag-cercana">⭐ Más cercana</span>` : '';
    return `
      <div class="empresa-card empresa-card-clickeable" onclick="irAEmpresa(${e.lat}, ${e.lng}, '${e.nombre}')">
        <div class="empresa-logo" style="background:${e.color}22; color:${e.color};">${e.iniciales}</div>
        <div class="empresa-info">
          <h4>${e.nombre} ${cercana}</h4>
          <p>${e.sector}</p>
          <p style="font-size:0.75rem; color:#888; margin-top:2px;">📍 ${e.direccion}</p>
          <div style="display:flex; gap:6px; margin-top:4px; flex-wrap:wrap;">
            <span class="empresa-vacantes">${e.vacantesNum} vacantes</span>
            <span class="empresa-distancia">🚶 ${dist}</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

function irAEmpresa(lat, lng, nombre) {
  if (!mapaLeaflet) return;
  mapaLeaflet.flyTo([lat, lng], 16, { duration: 1 });
}

// Override renderEmpresas para el estado inicial (sin distancias)
function renderEmpresas() {
  const lista = document.getElementById('empresas-lista');
  if (!lista) return;
  lista.innerHTML = empresas.map(e => `
    <div class="empresa-card empresa-card-clickeable" onclick="irAEmpresa(${e.lat}, ${e.lng}, '${e.nombre}')">
      <div class="empresa-logo" style="background:${e.color}22; color:${e.color};">${e.iniciales}</div>
      <div class="empresa-info">
        <h4>${e.nombre}</h4>
        <p>${e.sector}</p>
        <p style="font-size:0.75rem; color:#888; margin-top:2px;">📍 ${e.direccion}</p>
        <span class="empresa-vacantes">${e.vacantesNum} vacantes</span>
      </div>
    </div>
  `).join('');
}



// ===================== AUTH =====================
// Los usuarios se guardan en localStorage para simular persistencia.
// Estructura: { nombre, email, pass, tipo: 'candidato'|'empresa' }

let authTipoSeleccionado = 'candidato';

function getUsuarios() {
  return JSON.parse(localStorage.getItem('empleoya_usuarios') || '[]');
}
function guardarUsuarios(lista) {
  localStorage.setItem('empleoya_usuarios', JSON.stringify(lista));
}
function getSesion() {
  return JSON.parse(localStorage.getItem('empleoya_sesion') || 'null');
}
function guardarSesion(usuario) {
  localStorage.setItem('empleoya_sesion', JSON.stringify(usuario));
}
function borrarSesion() {
  localStorage.removeItem('empleoya_sesion');
}

// — Modal —
function abrirModal(tab) {
  document.getElementById('auth-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
  switchAuthTab(tab || 'login');
  // Limpiar errores
  document.getElementById('login-error').textContent = '';
  document.getElementById('reg-error').textContent = '';
}

function cerrarModalAuth(e) {
  if (e && e.target !== document.getElementById('auth-overlay')) return;
  document.getElementById('auth-overlay').style.display = 'none';
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  ['login','registro'].forEach(t => {
    document.getElementById('tab-' + t).classList.toggle('activo', t === tab);
    document.getElementById('panel-' + t).style.display = t === tab ? 'block' : 'none';
  });
}

function seleccionarTipo(tipo) {
  authTipoSeleccionado = tipo;
  ['candidato','empresa'].forEach(t => {
    document.getElementById('tipo-' + t).classList.toggle('activo', t === tipo);
  });
  document.getElementById('label-nombre-reg').textContent =
    tipo === 'empresa' ? 'Nombre de la empresa' : 'Nombre completo';
}

// — Registro —
function registrarse() {
  const nombre = document.getElementById('reg-nombre').value.trim();
  const email  = document.getElementById('reg-email').value.trim().toLowerCase();
  const pass   = document.getElementById('reg-pass').value;
  const err    = document.getElementById('reg-error');

  if (!nombre) { err.textContent = 'Ingresá tu nombre.'; return; }
  if (!email || !email.includes('@')) { err.textContent = 'Email inválido.'; return; }
  if (pass.length < 6) { err.textContent = 'La contraseña debe tener al menos 6 caracteres.'; return; }

  const usuarios = getUsuarios();
  if (usuarios.find(u => u.email === email)) {
    err.textContent = 'Ya existe una cuenta con ese email.'; return;
  }

  const nuevo = { nombre, email, pass, tipo: authTipoSeleccionado };
  usuarios.push(nuevo);
  guardarUsuarios(usuarios);
  guardarSesion(nuevo);

  cerrarModalAuth();
  actualizarUIAuth();
  mostrarNotif('✅ Cuenta creada. ¡Bienvenido/a, ' + nombre + '!');
}

// — Login —
function iniciarSesion() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pass  = document.getElementById('login-pass').value;
  const err   = document.getElementById('login-error');

  const usuario = getUsuarios().find(u => u.email === email && u.pass === pass);
  if (!usuario) {
    err.textContent = 'Email o contraseña incorrectos.'; return;
  }

  guardarSesion(usuario);
  cerrarModalAuth();
  actualizarUIAuth();
  mostrarNotif('👋 Bienvenido/a, ' + usuario.nombre + '!');
}

// — Cerrar sesión —
function cerrarSesion() {
  borrarSesion();
  toggleMenuUsuario(false);
  actualizarUIAuth();
  mostrarNotif('Sesión cerrada.');
}

// — Menú usuario —
function toggleMenuUsuario(forzar) {
  const menu = document.getElementById('nav-usuario-menu');
  const estado = forzar !== undefined ? forzar : menu.style.display === 'none';
  menu.style.display = estado ? 'block' : 'none';
}
document.addEventListener('click', e => {
  const avatar = document.getElementById('nav-avatar');
  const menu   = document.getElementById('nav-usuario-menu');
  if (menu && avatar && !avatar.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});

// — Actualizar toda la UI según sesión —
function actualizarUIAuth() {
  const sesion = getSesion();
  const navAuth    = document.getElementById('nav-auth');
  const navUsuario = document.getElementById('nav-usuario');
  const bloquePublicar = document.getElementById('bloque-publicar-vacante');

  if (sesion) {
    // Mostrar avatar, ocultar botones
    navAuth.style.display    = 'none';
    navUsuario.style.display = 'flex';
    document.getElementById('nav-avatar-inicial').textContent = sesion.nombre.charAt(0).toUpperCase();
    document.getElementById('menu-nombre').textContent = sesion.nombre;
    const badge = document.getElementById('menu-tipo-badge');
    badge.textContent = sesion.tipo === 'empresa' ? '🏢 Empresa' : '👤 Candidato/a';
    badge.className = 'menu-badge ' + sesion.tipo;

    // Mostrar / ocultar publicar vacante
    if (bloquePublicar) {
      bloquePublicar.style.display = sesion.tipo === 'empresa' ? 'block' : 'none';
    }

    // Actualizar empresa en campo si aplica
    if (sesion.tipo === 'empresa') {
      const campo = document.getElementById('v-empresa');
      if (campo && !campo.value) campo.value = sesion.nombre;
    }
  } else {
    navAuth.style.display    = 'flex';
    navUsuario.style.display = 'none';
    if (bloquePublicar) bloquePublicar.style.display = 'none';
  }
}

// Enter en campos de auth
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const overlay = document.getElementById('auth-overlay');
  if (!overlay || overlay.style.display === 'none') return;
  const panelLogin = document.getElementById('panel-login');
  if (panelLogin && panelLogin.style.display !== 'none') iniciarSesion();
  else registrarse();
});

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', actualizarUIAuth);

// ===================== PERFIL — STORAGE =====================

function getPerfilData(email) {
  return JSON.parse(localStorage.getItem('perfil_' + email) || '{}');
}
function guardarPerfilData(email, data) {
  const actual = getPerfilData(email);
  localStorage.setItem('perfil_' + email, JSON.stringify({ ...actual, ...data }));
}

function getPostulaciones(email) {
  return JSON.parse(localStorage.getItem('postulaciones_' + email) || '[]');
}
function guardarPostulacion(email, postulacion) {
  const lista = getPostulaciones(email);
  lista.unshift(postulacion);
  localStorage.setItem('postulaciones_' + email, JSON.stringify(lista));
}

function getPostulantes() {
  return JSON.parse(localStorage.getItem('empleoya_postulantes') || '[]');
}
function guardarPostulante(emailCandidato, nombreCandidato, vacanteId, tituloVacante, empresaNombre) {
  const lista = getPostulantes();
  // evitar duplicados
  if (lista.find(p => p.emailCandidato === emailCandidato && p.vacanteId === vacanteId)) return;
  lista.unshift({ emailCandidato, nombreCandidato, vacanteId, tituloVacante, empresaNombre, fecha: new Date().toLocaleDateString('es-AR') });
  localStorage.setItem('empleoya_postulantes', JSON.stringify(lista));
}

// ===================== PERFIL — ABRIR / CERRAR =====================

function abrirPerfil() {
  toggleMenuUsuario(false);
  const sesion = getSesion();
  if (!sesion) return;

  document.getElementById('perfil-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';

  document.getElementById('perfil-candidato').style.display = sesion.tipo === 'candidato' ? 'block' : 'none';
  document.getElementById('perfil-empresa').style.display   = sesion.tipo === 'empresa'   ? 'block' : 'none';
  document.getElementById('perfil-titulo').textContent      = sesion.tipo === 'empresa' ? 'Perfil empresa' : 'Mi perfil';

  if (sesion.tipo === 'candidato') cargarPerfilCandidato(sesion);
  else                              cargarPerfilEmpresa(sesion);
}

function cerrarPerfil() {
  document.getElementById('perfil-overlay').style.display = 'none';
  document.body.style.overflow = '';
}
function cerrarPerfilOverlay(e) {
  if (e.target === document.getElementById('perfil-overlay')) cerrarPerfil();
}

function switchPerfilTab(tabId) {
  // Buscar todos los panels y tabs dentro del panel activo
  const panels = document.querySelectorAll('.perfil-tab-panel');
  const tabs   = document.querySelectorAll('.perfil-tab');
  panels.forEach(p => p.style.display = p.id === tabId ? 'block' : 'none');
  tabs.forEach(t => {
    const estaActivo = t.getAttribute('onclick') && t.getAttribute('onclick').includes(tabId);
    t.classList.toggle('activo', estaActivo);
  });
}

// ===================== PERFIL CANDIDATO =====================

function cargarPerfilCandidato(sesion) {
  const data = getPerfilData(sesion.email);

  // Foto
  actualizarFotoUI('candidato', data.foto || null, sesion.nombre);

  // Datos básicos
  document.getElementById('candidato-nombre-input').value = data.nombre || sesion.nombre || '';
  document.getElementById('candidato-puesto-input').value = data.puesto || '';
  document.getElementById('candidato-ciudad-input').value = data.ciudad || '';

  // CV
  document.getElementById('p-resumen').value       = data.resumen  || '';
  document.getElementById('p-hab-blandas').value   = data.habBlandas  || '';
  document.getElementById('p-hab-tecnicas').value  = data.habTecnicas || '';
  document.getElementById('p-idiomas').value       = data.idiomas     || '';

  // Listas dinámicas del perfil
  cargarListaPerfil('p-lista-experiencia', data.experiencia || [], 'experiencia');
  cargarListaPerfil('p-lista-educacion',   data.educacion   || [], 'educacion');
  cargarListaPerfil('p-lista-herramientas',data.herramientas|| [], 'herramientas');

  // Postulaciones
  renderPostulaciones(sesion.email);

  // Reset tabs
  switchPerfilTab('cv-tab');
}

function guardarDatosCandidato() {
  const sesion = getSesion();
  guardarPerfilData(sesion.email, {
    nombre: document.getElementById('candidato-nombre-input').value.trim(),
    puesto: document.getElementById('candidato-puesto-input').value.trim(),
    ciudad: document.getElementById('candidato-ciudad-input').value.trim(),
  });
  mostrarNotif('✅ Datos guardados.');
}

function guardarCV() {
  const sesion = getSesion();
  guardarPerfilData(sesion.email, {
    resumen:      document.getElementById('p-resumen').value.trim(),
    habBlandas:   document.getElementById('p-hab-blandas').value.trim(),
    habTecnicas:  document.getElementById('p-hab-tecnicas').value.trim(),
    idiomas:      document.getElementById('p-idiomas').value.trim(),
    experiencia:  recopilarListaPerfil('p-lista-experiencia'),
    educacion:    recopilarListaPerfil('p-lista-educacion'),
    herramientas: recopilarListaPerfil('p-lista-herramientas'),
  });
  mostrarNotif('✅ CV guardado correctamente.');
}

function renderPostulaciones(email) {
  const lista = getPostulaciones(email);
  const cont  = document.getElementById('lista-postulaciones');
  if (!lista.length) {
    cont.innerHTML = `<div class="perfil-vacio"><span class="vacio-icon">📬</span><p>Todavía no te postulaste a ninguna vacante.</p></div>`;
    return;
  }
  cont.innerHTML = lista.map(p => `
    <div class="postulacion-card">
      <div class="postulacion-info">
        <h4>${p.titulo}</h4>
        <p>${p.empresa} · ${p.fecha}</p>
      </div>
      <span class="postulacion-estado estado-${p.estado}">${
        p.estado === 'enviada'  ? '📤 Enviada'   :
        p.estado === 'revision' ? '🔍 En revisión' : '✅ Aceptada'
      }</span>
    </div>`).join('');
}

// ===================== PERFIL EMPRESA =====================

function cargarPerfilEmpresa(sesion) {
  const data = getPerfilData(sesion.email);

  actualizarFotoUI('empresa', data.foto || null, sesion.nombre);

  document.getElementById('empresa-nombre-input').value    = data.nombre      || sesion.nombre || '';
  document.getElementById('empresa-sector-input').value    = data.sector      || '';
  document.getElementById('empresa-web-input').value       = data.web         || '';
  document.getElementById('empresa-descripcion').value     = data.descripcion || '';
  document.getElementById('empresa-email-contacto').value  = data.emailContacto|| '';
  document.getElementById('empresa-telefono').value        = data.telefono    || '';

  renderMisVacantes(sesion);
  renderPostulantesEmpresa(sesion);

  switchPerfilTab('descripcion-tab');
}

function guardarDatosEmpresa() {
  const sesion = getSesion();
  guardarPerfilData(sesion.email, {
    nombre: document.getElementById('empresa-nombre-input').value.trim(),
    sector: document.getElementById('empresa-sector-input').value.trim(),
    web:    document.getElementById('empresa-web-input').value.trim(),
  });
  mostrarNotif('✅ Datos de empresa guardados.');
}

function guardarDescripcionEmpresa() {
  const sesion = getSesion();
  guardarPerfilData(sesion.email, {
    descripcion:    document.getElementById('empresa-descripcion').value.trim(),
    emailContacto:  document.getElementById('empresa-email-contacto').value.trim(),
    telefono:       document.getElementById('empresa-telefono').value.trim(),
  });
  mostrarNotif('✅ Descripción guardada.');
}

function renderMisVacantes(sesion) {
  const cont = document.getElementById('lista-mis-vacantes');
  // Filtrar vacantes publicadas por esta empresa
  const misV = vacantes.filter(v => v.empresa && v.empresa.toLowerCase() === sesion.nombre.toLowerCase());
  if (!misV.length) {
    cont.innerHTML = `<div class="perfil-vacio"><span class="vacio-icon">📋</span><p>Todavía no publicaste ninguna vacante.</p></div>`;
    return;
  }
  const todosPostulantes = getPostulantes();
  cont.innerHTML = misV.map(v => {
    const cantPost = todosPostulantes.filter(p => p.vacanteId === v.id).length;
    return `
    <div class="mis-vacante-card">
      <h4>${v.titulo}</h4>
      <p>${v.ubicacion || ''} · ${v.modalidad || ''}</p>
      <div class="mis-vacante-footer">
        <span class="mis-vacante-postulantes">👥 ${cantPost} postulante${cantPost !== 1 ? 's' : ''}</span>
        <button class="btn-eliminar-vacante" onclick="eliminarVacante(${v.id})">🗑 Eliminar</button>
      </div>
    </div>`;
  }).join('');
}

function eliminarVacante(id) {
  if (!confirm('¿Eliminás esta vacante?')) return;
  vacantes = vacantes.filter(v => v.id !== id);
  renderVacantes();
  const sesion = getSesion();
  renderMisVacantes(sesion);
  mostrarNotif('🗑 Vacante eliminada.');
}

function renderPostulantesEmpresa(sesion) {
  const cont = document.getElementById('lista-postulantes-empresa');
  const todos = getPostulantes().filter(p => p.empresaNombre && p.empresaNombre.toLowerCase() === sesion.nombre.toLowerCase());
  if (!todos.length) {
    cont.innerHTML = `<div class="perfil-vacio"><span class="vacio-icon">👥</span><p>Todavía no hay postulantes a tus vacantes.</p></div>`;
    return;
  }
  cont.innerHTML = todos.map(p => {
    const perfilP = getPerfilData(p.emailCandidato);
    const inicial = p.nombreCandidato.charAt(0).toUpperCase();
    const fotoHtml = perfilP.foto
      ? `<img src="${perfilP.foto}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
      : inicial;
    return `
    <div class="postulante-card">
      <div class="postulante-avatar">${fotoHtml}</div>
      <div class="postulante-info">
        <h4>${p.nombreCandidato}</h4>
        <p>${perfilP.puesto || p.emailCandidato}</p>
      </div>
      <div class="postulante-vacante">
        <div style="font-size:0.78rem;font-weight:600;color:var(--azul)">${p.tituloVacante}</div>
        <div style="font-size:0.73rem;color:var(--texto-sec);margin-top:2px;">${p.fecha}</div>
      </div>
    </div>`;
  }).join('');
}

// ===================== FOTO DE PERFIL =====================

function subirFotoPerfil(event, tipo) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const base64 = e.target.result;
    const sesion = getSesion();
    guardarPerfilData(sesion.email, { foto: base64 });
    actualizarFotoUI(tipo, base64, sesion.nombre);
    // También actualizar el avatar de la nav
    actualizarAvatarNav(sesion, base64);
    mostrarNotif('✅ Foto actualizada.');
  };
  reader.readAsDataURL(file);
}

function actualizarFotoUI(tipo, base64, nombre) {
  const img      = document.getElementById(tipo + '-foto-img');
  const inicial  = document.getElementById(tipo + '-foto-inicial');
  if (base64) {
    img.src = base64;
    img.style.display = 'block';
    if (tipo === 'empresa') img.style.borderRadius = '16px';
    inicial.style.display = 'none';
  } else {
    img.style.display = 'none';
    inicial.style.display = 'flex';
    inicial.textContent = (nombre || 'U').charAt(0).toUpperCase();
  }
}

function actualizarAvatarNav(sesion, foto) {
  const avatarEl = document.getElementById('nav-avatar');
  const inicialEl = document.getElementById('nav-avatar-inicial');
  if (!avatarEl) return;
  // Limpiar contenido previo
  avatarEl.innerHTML = '';
  if (foto) {
    const img = document.createElement('img');
    img.src = foto;
    img.style.cssText = 'width:36px;height:36px;border-radius:50%;object-fit:cover;';
    avatarEl.appendChild(img);
  } else {
    const sp = document.createElement('span');
    sp.id = 'nav-avatar-inicial';
    sp.textContent = (sesion.nombre || 'U').charAt(0).toUpperCase();
    avatarEl.appendChild(sp);
  }
}

// ===================== ENTRADAS DINÁMICAS PERFIL =====================

const perfilPlantillas = {
  experiencia: (i, d = {}) => `
    <div class="cv-entrada" id="pexp-${i}">
      <button class="cv-entrada-eliminar" onclick="eliminarEntradaPerfil('pexp-${i}')">✕</button>
      <div class="cv-entrada-grid">
        <div class="cv-campo"><label>Empresa</label><input type="text" data-campo="empresa" value="${d.empresa||''}"></div>
        <div class="cv-campo"><label>Puesto</label><input type="text" data-campo="puesto" value="${d.puesto||''}"></div>
        <div class="cv-campo"><label>Desde</label><input type="text" data-campo="desde" value="${d.desde||''}"></div>
        <div class="cv-campo"><label>Hasta</label><input type="text" data-campo="hasta" value="${d.hasta||''}"></div>
      </div>
      <div class="cv-campo" style="margin-top:10px;">
        <label>Descripción (opcional)</label>
        <textarea rows="2" data-campo="descripcion">${d.descripcion||''}</textarea>
      </div>
    </div>`,
  educacion: (i, d = {}) => `
    <div class="cv-entrada" id="pedu-${i}">
      <button class="cv-entrada-eliminar" onclick="eliminarEntradaPerfil('pedu-${i}')">✕</button>
      <div class="cv-entrada-grid">
        <div class="cv-campo"><label>Institución</label><input type="text" data-campo="institucion" value="${d.institucion||''}"></div>
        <div class="cv-campo"><label>Título</label><input type="text" data-campo="titulo" value="${d.titulo||''}"></div>
        <div class="cv-campo"><label>Desde</label><input type="text" data-campo="desde" value="${d.desde||''}"></div>
        <div class="cv-campo"><label>Hasta</label><input type="text" data-campo="hasta" value="${d.hasta||''}"></div>
      </div>
    </div>`,
  herramientas: (i, d = {}) => `
    <div class="cv-entrada" id="pher-${i}">
      <button class="cv-entrada-eliminar" onclick="eliminarEntradaPerfil('pher-${i}')">✕</button>
      <div class="cv-entrada-grid">
        <div class="cv-campo"><label>Herramienta</label><input type="text" data-campo="nombre" value="${d.nombre||''}"></div>
        <div class="cv-campo"><label>Nivel</label>
          <select data-campo="nivel">
            <option value="">Nivel</option>
            ${['Básico','Intermedio','Avanzado'].map(n => `<option ${d.nivel===n?'selected':''}>${n}</option>`).join('')}
          </select>
        </div>
      </div>
    </div>`
};

let perfilContadores = { experiencia: 0, educacion: 0, herramientas: 0 };

function agregarEntradaPerfil(tipo) {
  perfilContadores[tipo]++;
  const id = perfilContadores[tipo];
  document.getElementById('p-lista-' + tipo).insertAdjacentHTML('beforeend', perfilPlantillas[tipo](id));
}

function eliminarEntradaPerfil(entradaId) {
  const el = document.getElementById(entradaId);
  if (el) el.remove();
}

function cargarListaPerfil(listaId, datos, tipo) {
  const cont = document.getElementById(listaId);
  cont.innerHTML = '';
  perfilContadores[tipo] = 0;
  if (!datos.length) {
    // al menos una vacía
    perfilContadores[tipo]++;
    cont.insertAdjacentHTML('beforeend', perfilPlantillas[tipo](perfilContadores[tipo]));
    return;
  }
  datos.forEach(d => {
    perfilContadores[tipo]++;
    cont.insertAdjacentHTML('beforeend', perfilPlantillas[tipo](perfilContadores[tipo], d));
  });
}

function recopilarListaPerfil(listaId) {
  const cont = document.getElementById(listaId);
  if (!cont) return [];
  return [...cont.querySelectorAll('.cv-entrada')].map(entrada => {
    const obj = {};
    entrada.querySelectorAll('[data-campo]').forEach(c => { obj[c.dataset.campo] = c.value || ''; });
    return obj;
  }).filter(obj => Object.values(obj).some(v => v.trim()));
}

// Actualizar avatar con foto al cargar sesión
const _actualizarUIAuthOriginal = actualizarUIAuth;
function actualizarUIAuth() {
  _actualizarUIAuthOriginal();
  const sesion = getSesion();
  if (sesion) {
    const perfil = getPerfilData(sesion.email);
    if (perfil.foto) actualizarAvatarNav(sesion, perfil.foto);
  }
}
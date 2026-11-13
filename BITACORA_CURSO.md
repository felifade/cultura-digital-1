# 📓 Bitácora y Contexto Maestro — Cultura Digital I (CEB 5/4)

> **Propósito de este archivo:** Mantener la memoria viva del proyecto, las reglas pedagógicas del curso, el estado de cada semana y el historial de ajustes para nunca perder contexto entre sesiones.

---

## 👨‍🏫 1. Datos Generales del Proyecto
- **Asignatura:** Cultura Digital I (1er Semestre — CEB 5/4, DGB / SEMS)
- **Docente:** Prof. Felipe López Salazar (`d.flopez54@dgb.edu.mx`)
- **Repositorio GitHub:** `felifade/cultura-digital-1`
- **Flujo de compilación y despliegue (MUY IMPORTANTE):**
  - Los contenidos editables viven en `content/semanaXX/` (`meta.json`, `hora1.md`, `hora2.md`, `hora3.md`, `productos.md`).
  - Al terminar cualquier cambio en `.md` o `meta.json`, **siempre ejecutar `python3 build.py`** para empaquetar todo en `js/data.js` y actualizar el cache-buster (`?v=...`) en `index.html`.
  - ⚠️ **GitHub Pages sirve desde la rama `gh-pages`:** Siempre publicar en ambas ramas con `git push origin main main:gh-pages`.

---

## 📐 2. Reglas Pedagógicas y de Diseño Visual (Estándar para los Alumnos)
Para que los grupos de 40+ estudiantes de 1er semestre no se pierdan en el laboratorio de cómputo:
1. **Estructura uniforme por cada Hora (`hora1.md`, `hora2.md`, `hora3.md`):**
   - **🟢 Inicio (10 min):** Dictado en Google Docs dentro de la pestaña de la semana correspondiente.
     - **Regla 20/14/10:** Título en **Tamaño 20 • Negrita • Centrado** | Texto en **Tamaño 14 • Justificado** | Tablas en **Tamaño 10**.
     - **5 Palabras Clave por dictado:** **<u>Negrita + Subrayado</u> + Emoji enfrente**.
   - **🔵 Desarrollo (30 min):** Siempre en **2 columnas de acción (`<div class="task-grid-2">`)** apoyadas en **tablas simples**:
     - **Columna 1 (Qué hacer paso a paso):** Tabla corta con los pasos o campos exactos de la práctica.
     - **Columna 2 (Qué pegar en Google Docs):** Vista previa visual de la **Tabla de Evidencias (Tamaño 10)** que el alumno debe insertar debajo de su dictado en Google Docs.
   - **🔴 Cierre (10 min):** Checklist rápido de 4 puntos en cuadrícula (`cierre-checklist-box`).

### 🧘‍♂️ 2.1 Técnicas de "Respiro Docente" y Gestión de Autonomía en Laboratorio (Tips de Aula)
Para grupos masivos de 40+ alumnos donde hablar, dictar y explicar continuamente agota la energía vocal del docente:
1. **La Técnica de Pantalla Dividida en Chrome (Regla Proporcional 70/30):**
   - Enseñarles a organizar dos ventanas o división interna en el navegador Chrome:
     - **70% de la pantalla:** Su documento de **Google Docs (Portafolio Digital)**, garantizando espacio amplio y cómodo para la edición de texto, diseño de tablas y pegado de capturas sin apreturas.
     - **30% de la pantalla:** El **Portal Web de Cultura Digital**, que al contar con diseño responsivo y tarjetas compactas funciona perfectamente como panel lateral de instrucciones y lista de verificación.
   - **El Reto de Transcripción / Replicación Autónoma:** Se proyecta la estructura y se les da el reto de transcribir o armar la tabla ellos mismos consultando el portal lateral (30%). Esto genera **8 a 10 minutos de concentración plena y silencio operativo**, dándole un respiro vital al docente para caminar por el aula, monitorear o descansar la voz.
2. **Temporizador Musical ("Lo que dura una canción"):**
   - Tras el dictado inicial guiado, se pone **1 canción instrumental de fondo (3 a 4 min)**.
   - Durante ese tema musical, los alumnos realizan de forma autónoma su **lectura de comprensión individual**, identifican las 5 palabras clave, aplican el formato (`<u>Negrita + Subrayado</u>`) y colocan los emojis correspondientes.
   - La música actúa como ancla de tiempo: cuando la canción termina, el dictado debe estar 100% formateado y listo.
3. **Traspaso Gradual al Desarrollo Autónomo:**
   - Una vez familiarizados con el formato 20/14/10 y las tablas de pasos del portal, los estudiantes no esperan a que el profesor explique cada renglón: leen su Columna 1 del portal y construyen su Columna 2 en Docs, consultando dudas puntuales y fortaleciendo su autonomía digital.

---

## 📅 3. Mapa y Estado de Semanas (Segundo y Tercer Parcial)

| Semana | Pestaña en Docs | Tema Principal | Visible en Web | Estado / Notas Clave |
| :---: | :--- | :--- | :---: | :--- |
| **S06** | `Semana 06 📄` | Procesadores de Texto (Regla 20/14/10) y Ficha PEC | ✅ `true` | Impresión física PEC (Matutino: Museo / Vespertino: Altar). |
| **S07** | `Semana 07 📁` | La Mochila Digital (Google Drive: 7 carpetas y colores) | ✅ `true` | Permisos de enlace en modo **Lector**. |
| **S08** | `Semana 08 📊` | Hojas de Cálculo (Google Sheets) y Presupuesto PEC | ✅ `true` | Regla del `=`, multiplicación `*`, `=SUMA()` y formato `$`. |
| **S09** | `Semana 09 📊` | Métricas de Velocidad (Typing.com) y Estadísticas | ✅ `true` | 5 rondas en Typing.com, tabla 2×3 en Docs y `=MAX()`, `=MIN()`, `=PROMEDIO()`. |
| **S10** | *(Repaso / Examen)* | Nivelación (50%), Torneo Kahoot y Examen 2º Parcial | ✅ `true` | H1: Regularización (50%) • H2: Kahoot (20 reactivos) • H3: Examen P2 (grupos regulares). |
| **S11** | `Semana 11 ✉️` | Higiene Digital en Gmail, Netiqueta en Parejas y Calendar/Tasks (Arranque 3er Parcial) | ✅ `true` | H1: Borrado masivo Classroom + Filtro `Classroom CEB` + Tabla 2×2.<br>H2: Correo formal en parejas (saludo 3er Parcial) + Respuesta ↩️ + Tabla 2×2.<br>H3: Calendar (16 y 19 Nov) + Tasks + Tabla 2×2 + Examen P2 para grupos de lunes. |
| **S12** | `Semana 12 🎬` | 3er Parcial · Preproducción Audiovisual con Smartphone y Guion PEC (Aislamiento por Turno) | ✅ `true` | H1: 4 Mandamientos y 5 Planos maestos.<br>H2: Selector de Turno + Narrativa PEC (Matutino: Mercado Artesanal 09-Dic / Vespertino: Altar de Muertos) + Pista MP3 Drive.<br>H3: Storyboard 10 tomas en Docs (5×11). |

---

## 🎬 4. Insumos Maestros Localizados en Drive para el Tercer Parcial (S12–S16)
1. **`00_PEC_Tercer_Parcial_Cortometraje_Vespertino.md`:**
   - **Producto cumbre P3:** Cortometraje Documental Audiovisual (`2:00 a 3:00 min`, `MP4 1080p Full HD`, `Horizontal 16:9`, `< 150 MB`, Cortinilla Institucional CEB 5/4 de `5 seg`, Música *Creative Commons*).
   - **Ruta S12–S16:**
     - **Semana 12:** Preproducción con Smartphone, 5 Planos y Storyboard Oficial de 10 tomas en Docs.
     - **Semana 13:** Montaje del Corte Grueso (Rough Cut), Curaduría Sonora CC y Voz en Off / Audio Ducking.
     - **Semana 14:** Cortinilla Institucional CEB 5/4 (5 s), Plecas (Lower Thirds), Créditos y Afinación Visual.
     - **Semana 15:** Renderizado MP4 1080p, Auditoría Técnica y Entrega en Classroom.
2. **`00_Minuta_y_Logistica_PEC_Final_Matutino_2026-12-09.md` y `00_Estrategia_Unificada_PEC_Redes_Sociales_Matutino_y_Vespertino_S12-S16.md`:**
   - **☀️ Turno Matutino (101–106):** *«Ahorramos, Emprendemos y Viajamos»* $\rightarrow$ Campaña Teaser de 45–60 seg para promocionar el **Mercado Artesanal PEC del Miércoles 09 de Diciembre de 2026** (venta de productos artesanales elaborados por alumnos para recaudar fondos para el viaje al Museo Memoria y Tolerancia en CDMX).
   - **🌙 Turno Vespertino (107–111):** *«Raíces que permanecen: Lo que permanece»* $\rightarrow$ Cortometraje documental poético de 2 a 3 min sobre el Altar de Día de Muertos y memoria viva de los deudos.
3. **Acervo Oficial BIDIBAN (Biblioteca Digital de Bachillerato - SEP / SEMS) en `Recursos Sitio WEB`:**
   - **`9788410791428.pdf`:** *Jóvenes y teléfonos móviles en las aulas. Discursos y dinámicas de prohibición, promoción e indeterminación* (Cristina Alonso Cano y Gustavo Herrera Urízar, coords., Octaedro / Horizontes Universidad, 142 pp.). Respaldo científico y pedagógico del smartphone como herramienta activa de indagación y producción.
   - **`9789689801030.pdf`:** *Cultura Digital I: Ciudadanía Digital* (Daniel Serrano Cortés, Editorial SE / Saber Creativo, 32 pp.). Libro de texto alineado al MCCEMS 2025 con rúbricas de autoevaluación, coevaluación y matrices formativas.

---

## 🛠️ 5. Historial de Ajustes Recientes (Changelog)

### 📌 12 de Noviembre de 2026 — Despliegue de Semana 12 con Aislamiento Interactivo por Turno
- **Implementación del Selector de Turno Dinámico:**
  - Se añadieron estilos en `css/style.css` (`.turno-selector-bar`, `.turno-pill-btn`, `.turno-banner-matutino`, `.turno-banner-vespertino`) y lógica en `js/app.js` (`window.switchTurno`, `initTurnoSelector`).
  - Los alumnos pueden alternar con un clic entre `☀️ Turno Matutino (G101–G106)` y `🌙 Turno Vespertino (G107–G111)`. La interfaz oculta completamente el contenido del otro turno para evitar confusiones de tablas o temas, guardando la preferencia en `localStorage`.
  - **☀️ Matutino:** Focalizado en la campaña audiovisual para el **Mercado Artesanal del 09 de Diciembre** y el fondo del Museo Memoria y Tolerancia.
  - **🌙 Vespertino:** Focalizado en el cortometraje documental poético **«Raíces que Permanecen»** (Altar de Día de Muertos y memoria familiar).
  - Semana 12 activada con `"visible": true`.
- **Registro de Recursos BIDIBAN:** Se registraron formalmente los dos libros oficiales de la Biblioteca Digital de Bachillerato.

### 📌 07–08 de Noviembre de 2026 — Simplificación Visual en Tablas de Semana 11 y Candado Automático
- **Problema detectado:** El bloque de `Desarrollo` de la Semana 11 tenía demasiadas tarjetas (3 columnas en H1, 3 bloques en H2) y no mostraba de forma homogénea las tablas de pasos ni la tabla `2×2` de evidencias en Docs, lo que podía confundir a los alumnos.
- **Solución aplicada:**
  - **`content/semana11/hora1.md`:** Se simplificó de 3 tarjetas a **2 columnas (`task-grid-2`)**: Columna 1 con tabla de 3 pasos en Gmail (`1️⃣ Borrado Masivo`, `2️⃣ Crear Filtro`, `3️⃣ Papelera`) y Columna 2 con el dibujo exacto de la **Tabla 2×2 en Docs (Tamaño 10)**.
  - **`content/semana11/hora2.md`:** Se unificó de 3 tarjetas a **2 columnas (`task-grid-2`)**: Columna 1 con tabla de campos del correo en parejas (`Para`, `Asunto`, `Cuerpo`, `Responder ↩️`) y Columna 2 con la **Tabla 2×2 en Docs (Tamaño 10)**.
  - **`content/semana11/hora3.md` y `productos.md`:** Se estructuró en **2 columnas (`task-grid-2`)**: Columna 1 con tabla de las 3 actividades (`16 Nov`, `19 Nov`, `Tasks`) y Columna 2 con la **Tabla 2×2 en Docs (Tamaño 10)** + cintillo compacto de Evaluación SEMS (grupos de lunes).
  - **`index.html`:** Se actualizó el botón de acceso rápido de `Calificaciones Oficiales SAGYC (1er Parcial)` a `Calificaciones Oficiales SAGYC` para que aplique de forma general en todos los parciales.
  - **Activación Semana 11 (`content/semana11/meta.json`):** Activada con `"visible": true` y publicada en `main` y `gh-pages`.
  - Se creó esta bitácora (`BITACORA_CURSO.md`) y su respaldo persistente en `~/.gemini/MEMORIA_CULTURA_DIGITAL.md`.

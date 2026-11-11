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
| **S12** | `Semana 12 🎬` | 3er Parcial · Preproducción Audiovisual con Smartphone (Mandamientos, 5 Planos y Storyboard 10 Tomas) | 🔒 `false` | Articulado con el Cortometraje PEC (2–3 min, MP4 1080p 16:9) para **ambos turnos** (Vespertino: *Raíces que permanecen* / Matutino: *La Odisea del Ahorro y Museo*). |

---

## 🎬 4. Insumos Maestros Localizados en Drive para el Tercer Parcial (S12–S16)
1. **`00_PEC_Tercer_Parcial_Cortometraje_Vespertino.md`:**
   - **Producto cumbre P3:** Cortometraje Documental Audiovisual (`2:00 a 3:00 min`, `MP4 1080p Full HD`, `Horizontal 16:9`, `< 150 MB`, Cortinilla Institucional CEB 5/4 de `5 seg`, Música *Creative Commons*).
   - **Ruta S12–S16:**
     - **Semana 12:** Acopio de Insumos en Drive, Clasificación de Tomas (A-Roll vs B-Roll / 8 tomas clave) y Escaleta de Montaje (2 a 3 min).
     - **Semana 13:** Montaje del Corte Grueso (Rough Cut), Curaduría Sonora CC y Voz en Off / Audio Ducking.
     - **Semana 14:** Cortinilla Institucional CEB 5/4 (5 s), Plecas (Lower Thirds), Créditos y Afinación Visual.
     - **Semana 15:** Renderizado MP4 1080p, Auditoría Técnica y Entrega en Classroom.
2. **`00_Propuesta_Audiovisual_Smartphone_Matutino.md`:**
   - Adapta la misma metodología cinematográfica para **ambos turnos**:
     - **🌙 Turno Vespertino (107–111):** *«Raíces que permanecen: Lo que permanece»* (Tradición, festival 28 oct, memoria e identidad).
     - **☀️ Turno Matutino (101–106):** *«Ahorramos, emprendemos y viajamos / Conocer al otro para convivir»* (La odisea del ahorro, trabajo en equipo y preparación hacia el Museo Memoria y Tolerancia).

---

## 🛠️ 5. Historial de Ajustes Recientes (Changelog)

### 📌 07–08 de Noviembre de 2026 — Simplificación Visual en Tablas de Semana 11 y Candado Automático
- **Problema detectado:** El bloque de `Desarrollo` de la Semana 11 tenía demasiadas tarjetas (3 columnas en H1, 3 bloques en H2) y no mostraba de forma homogénea las tablas de pasos ni la tabla `2×2` de evidencias en Docs, lo que podía confundir a los alumnos.
- **Solución aplicada:**
  - **`content/semana11/hora1.md`:** Se simplificó de 3 tarjetas a **2 columnas (`task-grid-2`)**: Columna 1 con tabla de 3 pasos en Gmail (`1️⃣ Borrado Masivo`, `2️⃣ Crear Filtro`, `3️⃣ Papelera`) y Columna 2 con el dibujo exacto de la **Tabla 2×2 en Docs (Tamaño 10)**.
  - **`content/semana11/hora2.md`:** Se unificó de 3 tarjetas a **2 columnas (`task-grid-2`)**: Columna 1 con tabla de campos del correo en parejas (`Para`, `Asunto`, `Cuerpo`, `Responder ↩️`) y Columna 2 con la **Tabla 2×2 en Docs (Tamaño 10)**.
  - **`content/semana11/hora3.md` y `productos.md`:** Se estructuró en **2 columnas (`task-grid-2`)**: Columna 1 con tabla de las 3 actividades (`16 Nov`, `19 Nov`, `Tasks`) y Columna 2 con la **Tabla 2×2 en Docs (Tamaño 10)** + cintillo compacto de Evaluación SEMS (grupos de lunes).
  - **`index.html`:** Se actualizó el botón de acceso rápido de `Calificaciones Oficiales SAGYC (1er Parcial)` a `Calificaciones Oficiales SAGYC` para que aplique de forma general en todos los parciales.
  - **Activación Semana 11 (`content/semana11/meta.json`):** Activada con `"visible": true` y publicada en `main` y `gh-pages`.
  - Se creó esta bitácora (`BITACORA_CURSO.md`) y su respaldo persistente en `~/.gemini/MEMORIA_CULTURA_DIGITAL.md`.

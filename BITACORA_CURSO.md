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
| **S11** | `Semana 11 ✉️` | Higiene Digital en Gmail, Netiqueta en Parejas y Calendar/Tasks | ✅ `true` | H1: Borrado masivo Classroom + Filtro `Classroom CEB` + Tabla 2×2.<br>H2: Correo formal en parejas + Respuesta ↩️ + Tabla 2×2.<br>H3: Calendar (16 y 19 Nov) + Tasks + Tabla 2×2 + Examen P2 para grupos de lunes. |
| **S12** | `Semana 12 🎨` | Presentaciones Electrónicas / Diseño Visual (Inicio 3er Parcial) | 🔒 `false` | Pendiente de revisión y simplificación en tablas antes de publicar. |

---

## 🛠️ 4. Historial de Ajustes Recientes (Changelog)

### 📌 07–08 de Noviembre de 2026 — Simplificación Visual en Tablas de Semana 11 y Candado Automático
- **Problema detectado:** El bloque de `Desarrollo` de la Semana 11 tenía demasiadas tarjetas (3 columnas en H1, 3 bloques en H2) y no mostraba de forma homogénea las tablas de pasos ni la tabla `2×2` de evidencias en Docs, lo que podía confundir a los alumnos.
- **Solución aplicada:**
  - **`content/semana11/hora1.md`:** Se simplificó de 3 tarjetas a **2 columnas (`task-grid-2`)**: Columna 1 con tabla de 3 pasos en Gmail (`1️⃣ Borrado Masivo`, `2️⃣ Crear Filtro`, `3️⃣ Papelera`) y Columna 2 con el dibujo exacto de la **Tabla 2×2 en Docs (Tamaño 10)**.
  - **`content/semana11/hora2.md`:** Se unificó de 3 tarjetas a **2 columnas (`task-grid-2`)**: Columna 1 con tabla de campos del correo en parejas (`Para`, `Asunto`, `Cuerpo`, `Responder ↩️`) y Columna 2 con la **Tabla 2×2 en Docs (Tamaño 10)**.
  - **`content/semana11/hora3.md` y `productos.md`:** Se estructuró en **2 columnas (`task-grid-2`)**: Columna 1 con tabla de las 3 actividades (`16 Nov`, `19 Nov`, `Tasks`) y Columna 2 con la **Tabla 2×2 en Docs (Tamaño 10)** + cintillo compacto de Evaluación SEMS (grupos de lunes).
  - **`index.html`:** Se actualizó el botón de acceso rápido de `Calificaciones Oficiales SAGYC (1er Parcial)` a `Calificaciones Oficiales SAGYC` para que aplique de forma general en todos los parciales.
  - **Candado Automático (`content/semana11/meta.json`, `build.py` y `js/app.js`):** Se implementó el campo `"unlockAt": "2026-11-09T09:00:00-06:00"` para que la Semana 11 permanezca oculta para los estudiantes hoy domingo y se desbloquee sola el **lunes 9 de noviembre a las 9:00 AM (hora CDMX)** sin intervención manual.
  - Se creó esta bitácora (`BITACORA_CURSO.md`) y su respaldo persistente en `~/.gemini/MEMORIA_CULTURA_DIGITAL.md`.

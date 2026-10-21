# Hora 2: Estadísticas Oficiales en Google Sheets

<section class="momento momento-inicio">
<h2>Inicio: Segundo Dictado en Google Docs</h2>
</section>

Continúa en la misma pestaña **`Semana 09 📊`**, debajo de la tabla anterior de la Hora 1.

> 📐 **Regla de Formato:** Título: **Tamaño 20 • Negrita • Centrado** | Texto: **Tamaño 14 • Justificado** | 5 Palabras Clave: **<u>Negrita + Subrayado</u> + Emoji enfrente**

> ### Análisis Cuantitativo en Hojas de Cálculo
> *"Una hoja de cálculo no solo guarda números; su verdadero valor está en el **<u>análisis</u>** 📊 automático de datos. Funciones como el **<u>promedio</u>** 📈 nos indican el rendimiento general de un grupo o proceso, mientras que los valores **<u>máximo</u>** 🚀 y **<u>mínimo</u>** 📉 detectan los picos y caídas. Saber interpretar estas **<u>estadísticas</u>** 🧠 nos ayuda a tomar mejores decisiones."*

---

<section class="momento momento-explicacion">
<h2>Desarrollo: Hoja de Métricas y Fórmulas (3 Pasos)</h2>
</section>

### 1. Crear tu Archivo en Google Drive
1. Entra a `drive.google.com` con tu cuenta institucional.
2. Abre tu carpeta: `1er Semestre - CEB 5/4` ➔ `07 Cultura Digital I`.
3. Haz clic en **`+ Nuevo` ➔ `Hojas de cálculo de Google`**.
4. Nombra tu archivo arriba a la izquierda como: **`Metricas_Velocidad_[TuNombre]`**.

---

### 2. Capturar Datos y Aplicar Fórmulas

Crea la siguiente tabla con tus 5 intentos de velocidad:

| Fila | A (Ronda) | B (Velocidad WPM) | C (Precisión %) | D (Errores) | Fórmulas que aplicas |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **1** | **Ronda de Prueba** | **Velocidad (WPM)** | **Precisión (%)** | **Errores** | *(Encabezados con fondo de color y negrita)* |
| **2** | Ronda 1 | 32 | 94% | 3 | Datos de tu intento 1 |
| **3** | Ronda 2 | 38 | 96% | 2 | Datos de tu intento 2 |
| **4** | Ronda 3 | 41 | 95% | 2 | Datos de tu intento 3 |
| **5** | Ronda 4 | 35 | 92% | 4 | Datos de tu intento 4 |
| **6** | Ronda 5 | 44 | 98% | 1 | Datos de tu intento 5 |
| **7** | **MÁXIMO (Récord):** | **44** | | | En B7: **`=MAX(B2:B6)`** |
| **8** | **MÍNIMO (Más baja):** | **32** | | | En B8: **`=MIN(B2:B6)`** |
| **9** | **PROMEDIO REAL:** | **38.0** | | | En B9: **`=PROMEDIO(B2:B6)`** |
| **10** | **MARGEN DE MEJORA:** | **+12** | | | En B10: **`=B7-B8`** *(Resta)* |

> 💡 **Formato Profesional:**
> * Selecciona las celdas de la columna C (`C2:C6`) y haz clic en el botón **`%` (Formato de porcentaje)** en la barra de herramientas.
> * Selecciona toda la cuadrícula y aplica **Bordes ➔ Todos los bordes**.

---

### 📊 Ejemplo Visual en Pantalla:
![Ejemplo Visual - Estadísticas en Google Sheets](./assets/semana09/semana09_hora02_metricas.svg)

---

### 3. Entregar tu Archivo Directamente en Classroom
1. Entra a **Google Classroom** y abre la tarea correspondiente de Cultura Digital.
2. En el panel lateral derecho (*"Tu trabajo"*), da clic en:  
   **`+ Añadir o crear` ➔ `Google Drive`**.
3. Selecciona tu hoja **`Metricas_Velocidad_[TuNombre]`** y da clic en **Insertar**.
4. *(No es necesario generar enlace compartido, tu archivo queda adjuntado de forma directa).*

---

<section class="momento momento-cierre">
<h2>Cierre: Checklist de Verificación</h2>
</section>

- [ ] Dictado 2 completo con título en **20 (centrado/negrita)** y texto en **14 (justificado)**.
- [ ] 5 palabras clave identificadas con **<u>Negrita + Subrayado</u>** y emoji enfrente.
- [ ] Hoja de cálculo con encabezados coloreados, bordes y porcentaje (`%`) en la columna C.
- [ ] Las 4 fórmulas oficiales aplicadas (`MAX`, `MIN`, `PROMEDIO` y resta).
- [ ] Archivo de Google Sheets adjuntado exitosamente en Classroom.

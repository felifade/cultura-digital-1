# Hora 2: Presupuesto PEC, Fórmulas y Formato Profesional

<section class="momento momento-inicio">
<h2>Inicio: Segundo Dictado en Google Docs</h2>
</section>

Continúa en la misma pestaña **`Semana 08 📊`**, debajo de la tabla de la Hora 1.

> 📐 **Reglas de Formato:** Título: **Tamaño 20 • Negrita • Centrado** | Texto: **Tamaño 14 • Justificado** | Tablas: **Tamaño 10**

> ### El Formato Formal y el Cálculo Financiero Automático
> *"El verdadero poder de una hoja de cálculo no radica solo en ordenar datos con formato de moneda y colores, sino en su capacidad para calcular por sí misma. Al escribir la regla de oro del signo igual (`=`) y utilizar referencias de celdas en lugar de números fijos, logramos que cualquier presupuesto se recalcule en tiempo real ante imprevistos, cambios de costos o descuentos de último momento."*  
>  
> 💡 *Idea clave: Las fórmulas con celdas transforman tablas estáticas en presupuestos vivos e inteligentes.*

---

<section class="momento momento-explicacion">
<h2>Desarrollo: Captura, Fórmulas, Formato y Enlace</h2>
</section>

Abre tu archivo de Google Sheets (`Presupuesto_Museo_[Nombre]` o `Cotizacion_Altar_[Nombre]`) creado en la Hora 1 y realiza los siguientes pasos:

### 1. Capturar los Datos de tu Proyecto (Filas 1 a 6)

#### ☀️ Turno Matutino (Presupuesto del Viaje al Museo):
* **Fila 1 (Encabezados):** `A1: Concepto de Gasto` | `B1: Costo Estimado ($)` | `C1: Ahorro Rescatado ($)` | `D1: Saldo Restante ($)`
* **Fila 2:** `Transporte viaje CDMX` | `120.00` | `30.00`
* **Fila 3:** `Entrada al Museo` | `50.00` | `10.00`
* **Fila 4:** `Almuerzo económico` | `65.00` | `25.00`
* **Fila 5:** `Refrigerio / Agua` | `25.00` | `15.00`
* **Fila 6:** `Permiso y credencial` | `15.00` | `5.00`

#### 🌙 Turno Vespertino (Cotización de Elementos del Altar):
* **Fila 1 (Encabezados):** `A1: Elemento Tradicional` | `B1: Cantidad` | `C1: Precio Unitario ($)` | `D1: Costo Total ($)`
* **Fila 2:** `Flor de Cempasúchil (ramo)` | `3` | `35.00`
* **Fila 3:** `Veladoras de vaso grandes` | `6` | `18.50`
* **Fila 4:** `Papel picado tradicional` | `10` | `4.00`
* **Fila 5:** `Copal e incienso (bolsa)` | `2` | `25.00`
* **Fila 6:** `Pan de muerto tradicional` | `5` | `15.00`

---

### 2. Aplicar Fórmulas Aritméticas (La Regla del Signo `=`)

> 🔑 **Regla Fundamental:** Toda operación inicia con `=`. Nunca multipliques números fijos (ejemplo: no escribas `=3*35`); utiliza las coordenadas de las celdas (ejemplo: `=B2*C2`).

#### ☀️ Turno Matutino (Resta y Sumas):
1. En la celda **`D2`**, escribe la fórmula de resta: **`=B2-C2`** y presiona **Enter**.
2. Da clic en `D2`, toma el puntito azul de la esquina inferior derecha y **arrástralo hacia abajo hasta la fila 6** (autocompletar).
3. En la celda **`A7`**, escribe: **`TOTALES:`** en negrita.
4. En **`B7`**, escribe: **`=SUMA(B2:B6)`** *(Gasto total estimado)*.
5. En **`C7`**, escribe: **`=SUMA(C2:C6)`** *(Ahorro total rescatado)*.
6. En **`D7`**, escribe: **`=SUMA(D2:D6)`** *(Saldo pendiente por liquidar)*.

#### 🌙 Turno Vespertino (Multiplicación, Suma y División):
1. En la celda **`D2`**, escribe la fórmula de multiplicación: **`=B2*C2`** y presiona **Enter**.
2. Da clic en `D2`, toma el puntito azul de la esquina y **arrástralo hacia abajo hasta la fila 6**.
3. En la celda **`A7`**, escribe: **`COSTO TOTAL DEL ALTAR:`** en negrita.
4. En **`D7`**, escribe: **`=SUMA(D2:D6)`** *(Gasto global)*.
5. En la celda **`A8`**, escribe: **`COOPERACIÓN POR ALUMNO (5):`** en negrita.
6. En **`D8`**, escribe la fórmula de división: **`=D7/5`** *(Gasto equitativo)*.

---

### 3. Aplicar Formato Profesional
1. **Encabezados:** Selecciona `A1:D1`, aplica fondo de color institucional, texto en **Negrita** y alineación **Centrada**.
2. **Formato de Moneda:** Selecciona las celdas que contienen dinero y presiona el ícono **`$` (Formatear como moneda)**.
3. **Bordes:** Selecciona toda la tabla y haz clic en **Bordes ➔ Todos los bordes**.

---

### 📊 Ejemplo Visual en Pantalla según tu Turno:

#### ☀️ Turno Matutino (`Presupuesto_Museo_[Nombre]`):
![Ejemplo Visual Matutino - Google Sheets](./assets/semana08/semana08_matutino_sheets.svg)

#### 🌙 Turno Vespertino (`Cotizacion_Altar_[Nombre]`):
![Ejemplo Visual Vespertino - Google Sheets](./assets/semana08/semana08_vespertino_sheets.svg)

---

### 4. Tabla Resumen y Enlace en Google Docs *(Tamaño 10)*
1. En tu documento de Docs, debajo del segundo dictado, inserta la tabla con los datos capturados de tu turno en **tamaño 10**.
2. En tu archivo de Google Sheets, da clic en el botón superior **Compartir**.
3. En **Acceso general**, selecciona: **Cualquiera en DGB con el enlace** en rol **Lector**.
4. Copia el enlace y pégalo en tu documento de Google Docs:  
   **Enlace a mi Hoja de Cálculo PEC:** `[Pega tu enlace aquí]`

---

<section class="momento momento-cierre">
<h2>Cierre: Verificación Rápida</h2>
</section>

- [ ] Dictado 2 con título en **20 (centrado/negrita)** y texto en **14 (justificado)**.
- [ ] Fórmulas con celdas aplicadas correctamente (`=B2-C2` o `=B2*C2`).
- [ ] Función `=SUMA(...)` calculada en la fila de totales.
- [ ] Formato de moneda (`$`), bordes y encabezados coloreados.
- [ ] Tabla resumen en Docs (tamaño 10) y **enlace compartido en modo Lector**.
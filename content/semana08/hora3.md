# Hora 3: Fórmulas Aritméticas y Cálculo Automático

<section class="momento momento-inicio">
<h2>Inicio: La Regla de Oro del Signo Igual (=)</h2>
</section>

En una hoja de cálculo, para que la computadora realice una operación matemática por ti, **siempre debes iniciar escribiendo el signo `=`**.

> 🔑 **Regla Fundamental:** Nunca sumes ni multipliques números fijos (ejemplo: no escribas `=3*35`). Usa siempre el nombre de las celdas (ejemplo: `=B2*C2`). Así, si un precio cambia, ¡el resultado se actualiza solo!

* **Operadores Básicos:** Suma (`+`), Resta (`-`), Multiplicación (`*`), División (`/`).

---

<section class="momento momento-explicacion">
<h2>Desarrollo: Fórmulas en Google Sheets y Enlace</h2>
</section>

Abre tu archivo de Google Sheets y agrega los cálculos automáticos:

### 1. Aplicar Fórmulas en la Columna D

#### ☀️ Turno Matutino (Cálculo de Saldo y Ahorro):
1. En la celda **`D1`**, escribe el encabezado: **`Saldo Restante ($)`**.
2. En la celda **`D2`**, escribe la fórmula de resta:  
   **`=B2-C2`**  
   *(Resta el gasto estimado menos el dinero rescatado)*.
3. Presiona **Enter**.
4. Haz clic sobre la celda `D2`, toma el puntito azul de la esquina inferior derecha y **arrástralo hacia abajo hasta la fila 6** para autocompletar.
5. En la celda **`B7`**, escribe: **`=SUMA(B2:B6)`** *(Costo total estimado)*.
6. En la celda **`C7`**, escribe: **`=SUMA(C2:C6)`** *(Ahorro total rescatado)*.
7. En la celda **`D7`**, escribe: **`=SUMA(D2:D6)`** *(Saldo pendiente por cubrir)*.

#### 🌙 Turno Vespertino (Cálculo de Costos y Cooperación del Altar):
1. En la celda **`D1`**, escribe el encabezado: **`Costo Total ($)`**.
2. En la celda **`D2`**, escribe la fórmula de multiplicación:  
   **`=B2*C2`**  
   *(Multiplica la cantidad de piezas por el precio unitario)*.
3. Presiona **Enter**.
4. Haz clic sobre `D2`, toma el puntito azul de la esquina y **arrástralo hacia abajo hasta la fila 6**.
5. En la celda **`D7`**, calcula el costo total del altar escribiendo:  
   **`=SUMA(D2:D6)`**
6. En la celda **`D8`**, calcula la cooperación por integrante (equipo de 5) escribiendo:  
   **`=D7/5`**

---

### 📊 Ejemplo de Cómo Debe Verse la Hoja en Google Sheets:

#### ☀️ Turno Matutino (`Presupuesto_Museo_[Nombre]`):
| Fila | A (Concepto de Gasto) | B (Costo $) | C (Ahorro $) | D (Saldo $) | Fórmulas que aplicas |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **1** | **Concepto de Gasto** | **Costo ($)** | **Ahorro ($)** | **Saldo ($)** | *(Encabezados con fondo de color y negrita)* |
| **2** | Transporte viaje CDMX | $120.00 | $30.00 | **$90.00** | En D2: `=B2-C2` |
| **3** | Entrada al Museo | $50.00 | $10.00 | **$40.00** | En D3: `=B3-C3` |
| **4** | Almuerzo económico | $65.00 | $25.00 | **$40.00** | En D4: `=B4-C4` |
| **5** | Refrigerio / Agua | $25.00 | $15.00 | **$10.00** | En D5: `=B5-C5` |
| **6** | Permiso y credencial | $15.00 | $5.00 | **$10.00** | En D6: `=B6-C6` |
| **7** | **TOTALES:** | **$275.00** | **$85.00** | **$190.00** | En B7: `=SUMA(B2:B6)` \| C7: `=SUMA(C2:C6)` \| D7: `=SUMA(D2:D6)` |

#### 🌙 Turno Vespertino (`Cotizacion_Altar_[Nombre]`):
| Fila | A (Elemento Tradicional) | B (Cantidad) | C (Precio Unit.) | D (Costo Total) | Fórmulas que aplicas |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **1** | **Elemento Tradicional** | **Cantidad** | **Precio Unit. ($)** | **Costo Total ($)** | *(Encabezados con fondo de color y negrita)* |
| **2** | Flor de Cempasúchil (ramo) | 3 | $35.00 | **$105.00** | En D2: `=B2*C2` |
| **3** | Veladoras de vaso grandes | 6 | $18.50 | **$111.00** | En D3: `=B3*C3` |
| **4** | Papel picado tradicional | 10 | $4.00 | **$40.00** | En D4: `=B4*C4` |
| **5** | Copal e incienso (bolsa) | 2 | $25.00 | **$50.00** | En D5: `=B5*C5` |
| **6** | Pan de muerto tradicional | 5 | $15.00 | **$75.00** | En D6: `=B6*C6` |
| **7** | **COSTO TOTAL DEL ALTAR:** | | | **$341.00** | En D7: `=SUMA(D2:D6)` |
| **8** | **COOPERACIÓN POR ALUMNO (5):** | | | **$68.20** | En D8: `=D7/5` |

---

### 🖼️ Ejemplo Visual en Pantalla:
![Ejemplo Visual - Hoja de Cálculo en Google Sheets](./assets/semana08/semana08_hora03_ejemplo.svg)

---

### 2. El Reto de Comprobación: ¡Cálculo en Tiempo Real!
1. Cambia un precio o una cantidad en tu tabla (por ejemplo, cambia la cantidad de veladoras de 6 a 10, o el costo de transporte).
2. Observa cómo el resultado final y la cooperación se recalculan **en automático al instante**.

---

### 3. Enlace Compartido en Google Docs
1. En tu hoja de cálculo, haz clic en el botón superior **Compartir**.
2. En **Acceso general**, selecciona: **Cualquiera en DGB con el enlace** en rol **Lector**.
3. Copia el enlace.
4. En tu documento de Google Docs, al final de la pestaña `Semana 08 📊`, pega el enlace:  
   **Enlace a mi Hoja de Cálculo PEC:** `[Pega tu enlace aquí]`

---

<section class="momento momento-cierre">
<h2>Cierre: Verificación Rápida</h2>
</section>

- [ ] Fórmulas con celdas aplicadas correctamente (`=B2*C2` o `=B2-C2`).
- [ ] Función `=SUMA(...)` calculada en la parte inferior.
- [ ] Reto de comprobación realizado (el total cambia automáticamente).
- [ ] Enlace de Google Sheets pegado en modo Lector en Google Docs.
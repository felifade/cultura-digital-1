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
5. En la celda **`C7`**, escribe la fórmula: **`=SUMA(C2:C6)`** para calcular el total de ahorro rescatado.

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
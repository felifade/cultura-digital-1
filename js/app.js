/**
 * APP.JS - Lógica Principal del Cuaderno Digital
 * Requiere window.notebookData definido por data.js
 * Requiere marked.js cargado en el HTML
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos
    lucide.createIcons();

    // Estado de la aplicación
    let currentWeek = 'semana01';
    let currentHour = '1';
    const completedTasks = JSON.parse(localStorage.getItem('ceb_completed_tasks')) || {};

    // Elementos del DOM
    const sidebarNav = document.getElementById('sidebar-nav');
    const mdContent = document.getElementById('md-content');
    const weekBadge = document.getElementById('current-week-badge');
    const weekTitle = document.getElementById('current-week-title');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const markDoneBtn = document.getElementById('mark-done-btn');
    
    // UI: Progreso
    const progressBar = document.getElementById('progress-bar-fill');
    const progressText = document.getElementById('progress-percentage');
    
    // CRONÓMETRO DE CLASE
    const timerDisplay = document.getElementById('class-timer-display');
    const timerToggle = document.getElementById('class-timer-toggle');
    const timerReset = document.getElementById('class-timer-reset');
    const timerMinutes = document.getElementById('class-timer-minutes');
    let timerStartSeconds = 30 * 60;
    let timerSeconds = timerStartSeconds;
    let timerRunning = false;
    let timerInterval = null;

    function renderTimer() {
        if (!timerDisplay) return;
        const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
        const seconds = String(timerSeconds % 60).padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }

    function stopTimer() {
        timerRunning = false;
        if (timerToggle) timerToggle.textContent = 'Iniciar';
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = null;
    }

    function setTimerFromSelect() {
        const selectedMinutes = timerMinutes ? parseInt(timerMinutes.value, 10) : 30;
        timerStartSeconds = selectedMinutes * 60;
        timerSeconds = timerStartSeconds;
        renderTimer();
    }

    if (timerToggle && timerReset) {
        if (timerMinutes) {
            timerMinutes.addEventListener('change', () => {
                stopTimer();
                setTimerFromSelect();
            });
        }

        timerToggle.addEventListener('click', () => {
            if (timerRunning) {
                stopTimer();
                return;
            }
            timerRunning = true;
            timerToggle.textContent = 'Pausa';
            timerInterval = setInterval(() => {
                timerSeconds = Math.max(0, timerSeconds - 1);
                renderTimer();
                if (timerSeconds === 0) stopTimer();
            }, 1000);
        });

        timerReset.addEventListener('click', () => {
            stopTimer();
            timerSeconds = timerStartSeconds;
            renderTimer();
        });

        setTimerFromSelect();
    }

    // MODO OSCURO
    const themeToggle = document.getElementById('theme-toggle');
    const isDark = localStorage.getItem('ceb_theme') === 'dark';
    if (isDark) {
        document.body.classList.replace('light-mode', 'dark-mode');
        updateThemeIcon(true);
    }
    
    themeToggle.addEventListener('click', () => {
        const isNowDark = document.body.classList.contains('light-mode');
        if(isNowDark) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('ceb_theme', 'dark');
            updateThemeIcon(true);
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('ceb_theme', 'light');
            updateThemeIcon(false);
        }
    });

    function updateThemeIcon(isDark) {
        themeToggle.innerHTML = isDark 
            ? `<i data-lucide="sun"></i> <span>Modo Claro</span>` 
            : `<i data-lucide="moon"></i> <span>Modo Oscuro</span>`;
        lucide.createIcons();
    }

    // MODO PROFESOR SECRETO
    let isTeacherMode = localStorage.getItem('ceb_teacher_mode') === 'true';
    let clickCount = 0;
    let clickTimer;
    
    const mainTitle = document.querySelector('.main-title');
    const notebookPaper = document.getElementById('notebook-paper');
    
    // Configurar estado inicial de copia
    if (isTeacherMode) {
        notebookPaper.classList.remove('no-copy');
    }
    
    mainTitle.style.cursor = 'pointer';
    mainTitle.addEventListener('click', () => {
        clickCount++;
        clearTimeout(clickTimer);
        
        if (clickCount >= 5) {
            isTeacherMode = !isTeacherMode;
            localStorage.setItem('ceb_teacher_mode', isTeacherMode);
            clickCount = 0;
            
            if (isTeacherMode) {
                notebookPaper.classList.remove('no-copy');
            } else {
                notebookPaper.classList.add('no-copy');
            }
            
            // Animación de feedback visual (destello)
            mainTitle.style.color = isTeacherMode ? '#f59e0b' : 'var(--accent)';
            setTimeout(() => { mainTitle.style.color = 'var(--accent)'; }, 500);
            
            renderSidebar();
            updateView();
        }
        
        clickTimer = setTimeout(() => { clickCount = 0; }, 2000);
    });

    // MENU MÓVIL
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    
    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if(sidebar.classList.contains('open')) {
            mobileBtn.innerHTML = `<i data-lucide="x"></i>`;
        } else {
            mobileBtn.innerHTML = `<i data-lucide="menu"></i>`;
        }
        lucide.createIcons();
    });

    // 1. RENDERIZAR MENÚ LATERAL
    function renderSidebar() {
        if (!window.notebookData) return;
        
        sidebarNav.innerHTML = '';
        const weeks = Object.keys(window.notebookData);
        
        // Determinar qué semanas son visibles
        // En modo profesor, todas son visibles.
        // En modo estudiante, solo las que tienen visible = true en data.js
        
        const partials = [
            { id: 1, title: 'Parcial 1', range: 'Semanas 1-5' },
            { id: 2, title: 'Parcial 2', range: 'Semanas 6-10' },
            { id: 3, title: 'Parcial 3', range: 'Semanas 11-15' },
        ];

        partials.forEach((partial) => {
            const partialWeeks = weeks
                .map((weekKey, index) => ({ weekKey, index, weekInfo: window.notebookData[weekKey] }))
                .filter(({ weekInfo }) => Number(weekInfo.partial || 1) === partial.id)
                .filter(({ weekInfo }) => isTeacherMode || weekInfo.visible);

            if (!partialWeeks.length) return;

            const group = document.createElement('section');
            group.className = 'partial-group';
            group.innerHTML = `
                <div class="partial-heading">
                    <span>${partial.title}</span>
                    <small>${partial.range}</small>
                </div>
            `;
            sidebarNav.appendChild(group);

            partialWeeks.forEach(({ weekKey, index, weekInfo }) => {
            
            const btn = document.createElement('button');
            btn.className = `week-btn ${weekKey === currentWeek ? 'active' : ''}`;
            btn.dataset.week = weekKey;
            
            // Determinar status (simplificado)
            const isCompleted = completedTasks[weekKey] && completedTasks[weekKey].h1 && completedTasks[weekKey].h2 && completedTasks[weekKey].h3;
            let statusClass = 'locked';
            if (isCompleted) statusClass = 'done';
            else if (weekKey === currentWeek) statusClass = 'current';

            // Si es modo profesor y la semana original estaba oculta, le ponemos un icono especial o estilo
            const lockIcon = (isTeacherMode && !weekInfo.visible) ? '<i data-lucide="lock" style="width:12px; opacity:0.5; margin-right:4px;"></i>' : '';

            btn.innerHTML = `
                <div class="week-btn-content">
                    <i data-lucide="book"></i>
                    <div class="week-title-wrap">
                        <span>${lockIcon}Semana ${index + 1}</span>
                        <span class="week-date">${weekInfo.dateRange || ''}</span>
                        <span class="week-short-title">${weekInfo.title || ''}</span>
                    </div>
                </div>
                <div class="status-indicator ${statusClass}"></div>
            `;
            
            btn.addEventListener('click', () => {
                currentWeek = weekKey;
                currentHour = '1'; // Reiniciar a la hora 1 al cambiar de semana
                updateView();
                // Cerrar sidebar en móvil
                if(window.innerWidth <= 900) {
                    sidebar.classList.remove('open');
                    mobileBtn.innerHTML = `<i data-lucide="menu"></i>`;
                    lucide.createIcons();
                }
            });
            
            sidebarNav.appendChild(btn);
            });
        });
        lucide.createIcons();
    }

    // 2. ACTUALIZAR VISTA CENTRAL
    function updateView() {
        if (!window.notebookData || !window.notebookData[currentWeek]) return;
        
        const data = window.notebookData[currentWeek];
        
        // Actualizar Cabecera
        weekBadge.textContent = currentWeek.toUpperCase();
        weekTitle.textContent = data.title || "Semana de Trabajo";

        // Actualizar Pestañas
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.hour === currentHour) {
                btn.classList.add('active');
            }
        });

        // Obtener Markdown
        const contentKey = currentHour === 'productos' ? 'productos' : `hora${currentHour}`;
        const mdText = data[contentKey] || "### Contenido no disponible\nEl profesor aún no ha publicado esta actividad.";
        
        // Renderizar Markdown
        mdContent.innerHTML = marked.parse(mdText);

        // Actualizar estado del Checkbox
        if (!completedTasks[currentWeek]) completedTasks[currentWeek] = {};
        markDoneBtn.checked = !!completedTasks[currentWeek][contentKey];

        // Re-render sidebar para marcar activa
        renderSidebar();
        updateProgress();
    }

    // 3. EVENTOS DE PESTAÑAS (HORAS)
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentHour = e.currentTarget.dataset.hour;
            updateView();
        });
    });

    // 4. CHECKBOX DE COMPLETADO
    markDoneBtn.addEventListener('change', (e) => {
        if (!completedTasks[currentWeek]) completedTasks[currentWeek] = {};
        const contentKey = currentHour === 'productos' ? 'productos' : `hora${currentHour}`;
        completedTasks[currentWeek][contentKey] = e.target.checked;
        localStorage.setItem('ceb_completed_tasks', JSON.stringify(completedTasks));
        renderSidebar();
        updateProgress();
    });

    // 5. CÁLCULO DE PROGRESO
    function updateProgress() {
        if(!window.notebookData) return;
        const totalWeeks = Object.keys(window.notebookData).length;
        const totalTasks = totalWeeks * 3; // 3 horas por semana
        let completed = 0;

        for (const w in completedTasks) {
            if(completedTasks[w].hora1 || completedTasks[w].h1) completed++;
            if(completedTasks[w].hora2 || completedTasks[w].h2) completed++;
            if(completedTasks[w].hora3 || completedTasks[w].h3) completed++;
        }

        const percentage = totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0;
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}%`;
    }

    // Inicialización
    // Solo renderizar si data.js cargó correctamente
    if (window.notebookData) {
        // Encontrar la primera semana automáticamente
        const weeks = Object.keys(window.notebookData);
        if (weeks.length > 0) {
            currentWeek = weeks[0];
            renderSidebar();
            updateView();
        }
    } else {
        mdContent.innerHTML = `<div class="empty-state">
            <p>Error: No se encontró el archivo de contenidos (data.js). Por favor ejecuta el script build.py.</p>
        </div>`;
    }
});

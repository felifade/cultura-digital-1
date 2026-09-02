#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

DRIVE_SRC="/Users/felipelopezsalazar/Library/Mobile Documents/com~apple~CloudDocs/School/CEB/01_Academico_y_Clases/Ciclo_2026-2027/Cultura Digital 1.26.27/01_Cultura_Digital_I/03_Presentaciones_y_Clases/Plataforma_Web_y_PWA/PWA_Notebook_v2"

if [ -d "$DRIVE_SRC" ]; then
    echo "🔄 Sincronizando cambios desde iCloud Drive (Nueva Ruta)..."
    rsync -av --update "$DRIVE_SRC/content/" "$DIR/content/"
    rsync -av --update "$DRIVE_SRC/assets/" "$DIR/assets/" 2>/dev/null || true
    rsync -av --update "$DRIVE_SRC/css/" "$DIR/css/" 2>/dev/null || true
    rsync -av --update "$DRIVE_SRC/js/" "$DIR/js/" 2>/dev/null || true
    cp "$DRIVE_SRC/index.html" "$DIR/index.html" 2>/dev/null || true
fi

echo "⚙️ Compilando semanas con build.py..."
python3 build.py

echo "📦 Guardando y subiendo a GitHub..."
TOKEN=$(gh auth token)
git add .
git commit -m "update: sincronizacion desde Drive y compilacion $(date '+%Y-%m-%d %H:%M')"
git push "https://felifade:${TOKEN}@github.com/felifade/cultura-digital-1.git" main
git push -f "https://felifade:${TOKEN}@github.com/felifade/cultura-digital-1.git" main:gh-pages

echo "✅ ¡Listo! Sitio actualizado en https://felifade.github.io/cultura-digital-1/"

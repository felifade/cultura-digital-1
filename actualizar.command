#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "⚙️ Compilando semanas con build.py..."
python3 build.py

echo "📦 Guardando y subiendo a GitHub..."
TOKEN=$(gh auth token)
git add .
git commit -m "update: actualizacion de contenido $(date '+%Y-%m-%d %H:%M')"
git push "https://felifade:${TOKEN}@github.com/felifade/cultura-digital-1.git" main
git push -f "https://felifade:${TOKEN}@github.com/felifade/cultura-digital-1.git" main:gh-pages

echo "✅ ¡Listo! Sitio actualizado en https://felifade.github.io/cultura-digital-1/"

import os
import json
import time
import re

base_path = os.path.dirname(os.path.abspath(__file__))
content_dir = os.path.join(base_path, "content")
output_file = os.path.join(base_path, "js", "data.js")
index_html = os.path.join(base_path, "index.html")

notebook_data = {}

# Leer semanas
for w in range(1, 16):
    week_str = f"semana{w:02d}"
    w_dir = os.path.join(content_dir, week_str)
    
    if os.path.exists(w_dir):
        week_data = {}
        
        # Leer meta.json
        meta_path = os.path.join(w_dir, "meta.json")
        if os.path.exists(meta_path):
            with open(meta_path, "r", encoding="utf-8") as f:
                try:
                    meta = json.load(f)
                    week_data["title"] = meta.get("title", f"Semana {w}")
                    week_data["dateRange"] = meta.get("dateRange", "")
                    week_data["partial"] = meta.get("partial", 1 if w <= 5 else 2 if w <= 10 else 3)
                    # Semanas 1, 2 y 3 visibles por defecto
                    week_data["visible"] = meta.get("visible", (w in [1, 2, 3]))
                except:
                    week_data["title"] = f"Semana {w}"
                    week_data["dateRange"] = ""
                    week_data["partial"] = 1 if w <= 5 else 2 if w <= 10 else 3
                    week_data["visible"] = (w in [1, 2, 3])
        else:
            week_data["title"] = f"Semana {w}"
            week_data["dateRange"] = ""
            week_data["partial"] = 1 if w <= 5 else 2 if w <= 10 else 3
            week_data["visible"] = (w in [1, 2, 3])
            
        # Leer MD files
        for h in range(1, 4):
            h_path = os.path.join(w_dir, f"hora{h}.md")
            if os.path.exists(h_path):
                with open(h_path, "r", encoding="utf-8") as f:
                    week_data[f"hora{h}"] = f.read()
            else:
                week_data[f"hora{h}"] = ""
        
        productos_path = os.path.join(w_dir, "productos.md")
        if os.path.exists(productos_path):
            with open(productos_path, "r", encoding="utf-8") as f:
                week_data["productos"] = f.read()
        else:
            week_data["productos"] = "### Productos de la semana\\nEl profesor aún no ha publicado los productos de esta semana."
                
        notebook_data[week_str] = week_data

# Generar data.js
js_content = f"// Archivo Auto-Generado por build.py\\nwindow.notebookData = {json.dumps(notebook_data, indent=2, ensure_ascii=False)};"

os.makedirs(os.path.dirname(output_file), exist_ok=True)
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

# Actualizar cache-buster en index.html
timestamp = int(time.time())
if os.path.exists(index_html):
    with open(index_html, "r", encoding="utf-8") as f:
        html_content = f.read()
    html_content = re.sub(r"data\.js\?v=\d+", f"data.js?v={timestamp}", html_content)
    html_content = re.sub(r"app\.js\?v=\d+", f"app.js?v={timestamp}", html_content)
    with open(index_html, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"✅ index.html actualizado con cache-buster v={timestamp}")

print(f"✅ data.js compilado exitosamente con {len(notebook_data)} semanas.")

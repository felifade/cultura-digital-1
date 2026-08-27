import os
import json

base_path = os.path.dirname(os.path.abspath(__file__))
content_dir = os.path.join(base_path, "content")
output_file = os.path.join(base_path, "js", "data.js")

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
                    # Default visibility to true only for week 1 if not specified
                    week_data["visible"] = meta.get("visible", w == 1)
                except:
                    week_data["title"] = f"Semana {w}"
                    week_data["dateRange"] = ""
                    week_data["partial"] = 1 if w <= 5 else 2 if w <= 10 else 3
                    week_data["visible"] = (w == 1)
        else:
            week_data["title"] = f"Semana {w}"
            week_data["dateRange"] = ""
            week_data["partial"] = 1 if w <= 5 else 2 if w <= 10 else 3
            week_data["visible"] = (w == 1)
            
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
            week_data["productos"] = "### Productos de la semana\nEl profesor aún no ha publicado los productos de esta semana."
                
        notebook_data[week_str] = week_data

# Generar data.js
js_content = f"// Archivo Auto-Generado por build.py\nwindow.notebookData = {json.dumps(notebook_data, indent=2, ensure_ascii=False)};"

os.makedirs(os.path.dirname(output_file), exist_ok=True)
with open(output_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print("✅ data.js compilado exitosamente. La plataforma está actualizada.")

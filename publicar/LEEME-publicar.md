# Publicar el portafolio en GitHub Pages con tu dominio

## Archivos de esta carpeta
- `index.html` — el sitio completo en un solo archivo (fuentes, imágenes y scripts incluidos).
- `robots.txt` — permite la indexación y apunta al sitemap.
- `sitemap.xml` — mapa del sitio para Google Search Console.
- `CNAME` — el dominio que va a servir GitHub Pages. **Ábrelo y escribe tu dominio real**, una sola línea, sin `https://` y sin barra final. Ej: `alejandragarcia.co`
- `cv/` — sube aquí tu CV con el nombre exacto `Alejandra-Garcia-CV.pdf` y borra el archivo de aviso.

## Paso 1 · Reemplaza el dominio en el código
Busca `alejandragarciagomez.com` y cámbialo por tu dominio en:
- `index.html` (aparece en canonical, hreflang, Open Graph, Twitter y en el bloque de datos estructurados)
- `robots.txt` (línea Sitemap)
- `sitemap.xml` (todas las URL)
- `CNAME` (solo el dominio)

## Paso 2 · Crea el repositorio
1. En GitHub: **New repository**, nómbralo `portafolio` (o `tuusuario.github.io`), público.
2. **Add file → Upload files**, arrastra todo el contenido de esta carpeta —incluido `CNAME` y la carpeta `cv`— y confirma con **Commit changes**. Deben quedar en la raíz del repo, no dentro de otra carpeta.

## Paso 3 · Activa GitHub Pages
1. **Settings → Pages**.
2. En *Source* elige **Deploy from a branch**; branch `main`, carpeta `/ (root)`. Guarda.
3. En *Custom domain* escribe tu dominio y guarda. GitHub verificará el DNS.
4. Cuando el DNS resuelva, marca **Enforce HTTPS** (puede tardar hasta 24 h en habilitarse).

## Paso 4 · Configura el DNS del dominio
En el panel de tu proveedor de dominio (o en GitHub si lo compraste ahí, dentro de la gestión del dominio):

**Para el dominio raíz** (`tudominio.com`) — cuatro registros **A**:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
Opcional, IPv6 — cuatro registros **AAAA**:
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**Para www** — un registro **CNAME** con nombre `www` apuntando a `tuusuario.github.io` (con el punto final si el panel lo pide).

La propagación tarda entre unos minutos y unas horas. Mientras tanto el sitio ya funciona en `https://tuusuario.github.io/portafolio`.

## Paso 5 · Posicionamiento
1. Entra a **Google Search Console**, agrega la propiedad de dominio y verifica con un registro TXT.
2. Envía `https://tudominio.com/sitemap.xml`.
3. Pon el enlace del portafolio en tu perfil de LinkedIn: es la señal externa más fuerte que tienes hoy.

## Para actualizar el sitio después
Sube el `index.html` nuevo al repositorio (**Add file → Upload files**, mismo nombre, *Commit*). GitHub republica en un par de minutos.

## SEO que ya viene incluido
Título y descripción con las palabras clave del rol · canonical y hreflang · `robots: index, follow, max-image-preview:large` · Open Graph y Twitter Card con imagen para LinkedIn y WhatsApp · datos estructurados JSON-LD tipo `Person` (cargo, ubicación, formación, LinkedIn) · favicon SVG · `lang="es"` · jerarquía H1 → H2 → H3 · texto alternativo en la foto.

## Lo que falta para que rinda
- El PDF del CV publicado en `cv/`.
- Imágenes reales de cada proyecto: los espacios están vacíos y las imágenes con nombre descriptivo también posicionan.

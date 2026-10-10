# Hacienda La Esmeralda Farm Explorer

Sitio estatico preparado para publicarse con GitHub Pages.

## Direcciones

- Principal: `https://map.haciendaesmeralda.com/`
- Respaldo GitHub: `https://bgalvarado151993.github.io/map/`

## Contenido

- `index.html`: pagina principal del explorador.
- `.nojekyll`: indica a GitHub Pages que publique los archivos sin procesarlos con Jekyll.
- `CNAME`: conserva el dominio personalizado `map.haciendaesmeralda.com` al publicar.

## Publicacion y actualizaciones

1. Copia `index.html`, `.nojekyll`, `CNAME`, `README.md`, `.gitignore` y la carpeta completa `assets` a la raiz del repositorio `map`.
2. Confirma los cambios con GitHub Desktop y ejecuta `Push origin`.
3. Abre `Settings` > `Pages`.
4. Confirma `Deploy from a branch`, rama `main` y carpeta `/ (root)`.
5. En `Custom domain`, confirma `map.haciendaesmeralda.com`.
6. Cuando el certificado este disponible, activa `Enforce HTTPS`.

## Antes de hacerlo publico

- MapLibre, los limites, los textos y las fotos estan guardados localmente en `assets`.
- Internet se utiliza para Adobe Fonts y las imagenes satelitales de Esri. Si se pierde la conexion, el contenido y los limites permanecen disponibles sobre el fondo local.

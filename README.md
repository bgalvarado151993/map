# Hacienda La Esmeralda Farm Explorer

Carpeta preparada para publicarse como un sitio estatico con GitHub Pages.

## Contenido

- `index.html`: pagina principal del explorador.
- `.nojekyll`: indica a GitHub Pages que publique los archivos sin procesarlos con Jekyll.
- `CNAME`: conserva el dominio personalizado `map.haciendaesmeralda.com` al publicar.

## Publicacion

1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `.nojekyll`, `CNAME`, `README.md` y la carpeta completa `assets` a la raiz del repositorio.
3. Abre `Settings` > `Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Selecciona la rama `main`, la carpeta `/ (root)` y pulsa `Save`.
6. Espera unos minutos y abre la direccion indicada por GitHub Pages.

## Antes de hacerlo publico

- Confirma que se pueden publicar las coordenadas y limites de fincas y lotes.
- Decide si los textos, estadisticas y fotos provisionales deben permanecer visibles.
- MapLibre, los limites, los textos y las fotos estan guardados localmente en `assets`.
- Internet se utiliza para Adobe Fonts y las imagenes satelitales de Esri. Si se pierde la conexion, el contenido y los limites permanecen disponibles sobre el fondo local.

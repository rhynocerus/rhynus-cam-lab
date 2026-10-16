---
title: RHYNUS CAM LAB
emoji: 🦏
colorFrom: blue
colorTo: gray
sdk: static
app_file: index.html
pinned: false
short_description: Experimento de cámara, detección de movimiento y máscara de rinoceronte local.
---

# RHYNUS CAM LAB 🦏

Demo gratuita de cámara web para Hugging Face Spaces (Static HTML).

## Versión 0.1
- Cámara bajo consentimiento explícito.
- Detección de cambios de imagen (movimiento) mediante Canvas 2D.
- Máscara gráfica original de rinoceronte que se activa con movimiento.
- Umbral ajustable y estado de detección.
- Procesamiento íntegramente local en el navegador: sin subir imágenes a servidores.

**Importante:** no reconoce rostros ni sonrisas todavía. La máscara se dibuja en una posición fija, como efecto experimental, no sigue la cara.

## Probar localmente

```bash
python3 -m http.server 8000
```

Abrir `http://localhost:8000`. Autorizar el permiso de cámara. También funciona al publicarse en HTTPS.

## Publicación en Hugging Face

1. Crear un Space con SDK **Static HTML**.
2. Subir `README.md`, `index.html`, `style.css` y `app.js` al repositorio del Space, o conectar el repositorio Git como remoto adicional.
3. Tras el commit, Hugging Face sirve la aplicación automáticamente.

## GitHub y Hugging Face

GitHub será el repositorio principal; Hugging Face Spaces será otro remoto Git, no necesariamente una copia automática. Para sincronizar, hacer `git push` a ambos remotos o configurar una acción de GitHub más adelante.

## Privacidad

Ninguna imagen sale del navegador. No guardamos ni enviamos fotogramas. La cámara se detiene al pulsar **Detener** o al salir de la página. El permiso de cámara lo controla el navegador.

## Próxima etapa

Seguimiento de rostro y detección de expresión/sonrisa mediante un modelo que se ejecute en el navegador, tras revisar licencias, rendimiento y privacidad.

Licencia: MIT (añadir archivo LICENSE al publicar si se elige esta licencia).

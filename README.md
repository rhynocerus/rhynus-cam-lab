---
title: RHYNUS CAM LAB
emoji: 🦏
colorFrom: blue
colorTo: gray
sdk: static
app_file: index.html
license: gpl-3.0
pinned: false
short_description: Laboratorio de cámara y movimiento RIW
---

# RHYNUS CAM LAB 🦏
**RHYNUS Interactive Works (RIW) · v0.1.1 · Rhynus Mode**

Experimento web de visión artificial con cámara, detección de movimiento y máscara gráfica de rinoceronte. Creado con HTML, CSS y JavaScript, sin servicios de pago ni procesamiento remoto de vídeo.

## Funciones de la versión 0.1.1

- Activación y detención voluntarias de la cámara con permiso del navegador.
- Detección de movimiento por comparación de fotogramas con Canvas 2D; sensibilidad ajustable y medidor visual.
- Máscara 2D experimental de rinoceronte, con persistencia temporal y botón para mostrarla.
- Interfaz Cyber HUD «Rhynus Mode», adaptable y con identidad institucional RIW.
- Procesamiento de imagen local en el navegador. La aplicación no envía fotogramas a un servidor.

**Límite actual:** todavía no reconoce rostros ni sonrisas ni coloca la máscara siguiendo puntos faciales. No identifica a personas.

## Ejecutar localmente

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000` y concede acceso a la cámara si quieres probarla. En un Space público, la página funcionará bajo HTTPS.

## Código y demostración

- Repositorio principal: https://github.com/rhynocerus/rhynus-cam-lab
- Demostración pública: https://huggingface.co/spaces/rhynus/rhynus-cam-lab

GitHub es el origen del código; el Space es el escaparate para probarlo. Se sincronizarán mediante un procedimiento de publicación explícito.

## Licencia y atribución

**Código fuente: GNU General Public License, versión 3.0 (GPL-3.0).** Los avisos de copyright y de licencia deben conservarse según sus condiciones. La GPL permite estudiar, modificar y redistribuir el software, también comercialmente, cumpliendo sus términos; no obliga a enviar las modificaciones a este repositorio.

Texto oficial: https://www.gnu.org/licenses/gpl-3.0.html

El texto íntegro de GNU GPL v3 se encuentra en `LICENSE`. El identificador `license: gpl-3.0` de esta cabecera declara la licencia ante Hugging Face.

**Identidad corporativa y material gráfico:** los nombres, emblemas y logotipos institucionales de RHYNUS Interactive Works, incluido `assets/branding/RIW_Logo_Principal_Horizontal_Transparente_v1.png`, no se ofrecen como marcas de libre uso ni conceden permiso de suplantación o patrocinio. Su uso como marca requiere autorización de su titular. Las condiciones específicas de la identidad institucional se explican en `TRADEMARKS.md`.

No se declara por ahora que todas las imágenes y los recursos gráficos estén bajo CC BY-SA 4.0: cualquier licencia específica de fotografía o ilustración se indicará archivo por archivo, una vez revisada su titularidad.

## Colaboraciones

¡Se aceptan propuestas de mejora! Para contribuir:

1. Abre un **Issue** describiendo el cambio o problema, cuando proceda.
2. Crea un fork y una rama dedicada a una sola mejora.
3. Comprueba que la cámara y los controles siguen funcionando.
4. Envía un **Pull Request** con explicación y pruebas.

Los PR pasan por revisión del mantenedor antes de incorporarse. La posibilidad de crear forks viene de la licencia; no es obligatorio que otras personas presenten sus cambios como PR. Consulta `CONTRIBUTING.md` para las instrucciones detalladas.

## Privacidad

La cámara requiere consentimiento explícito en el navegador. Esta versión no almacena ni transmite vídeos o fotografías; analiza fotogramas localmente y libera la cámara al pulsar **Detener**. El usuario puede retirar el permiso desde los controles del navegador.

## Hoja de ruta

- **v0.1.1:** visor Cyber HUD, movimiento y rinoceronte 2D experimental, validado en escritorio y móvil, con publicación pública comprobada.
- **Publicación:** GitHub y Static Space de Hugging Face, completada el 16 de octubre de 2026.
- **v0.2:** seguimiento facial y detección de sonrisas con herramientas ejecutadas en navegador, sujetos a revisión de licencias, accesibilidad y rendimiento.

Consulta `ROADMAP.md` y `CHECKLIST.md` para el estado de cada fase.

© 2026 RHYNUS Interactive Works. Identidad corporativa RIW.

## Validación del lanzamiento (16 de octubre de 2026)

- Validación funcional/visual local: 8/8 comprobaciones confirmadas.
- Validación móvil pública: 6/6 comprobaciones confirmadas por el usuario (interfaz adaptable, logo, permisos de cámara, indicador de movimiento, máscara y controles táctiles).
- Demo: https://huggingface.co/spaces/rhynus/rhynus-cam-lab
- Estado: **v0.1.1 cerrada**. Mejoras de seguimiento facial y expresiones permanecen en el backlog v0.2.

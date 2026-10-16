# RHYNUS CAM LAB — Checklist visual v0.1.1

**Estado:** diseño acordado; integración pendiente.
**Objetivo único:** integrar identidad RIW y marco HUD conservando las funciones de cámara y movimiento.

## Planificación
- [x] Definir dirección Rhynus Mode
- [x] Elegir logotipo horizontal como principal
- [x] Establecer paleta, tipografía y elementos del HUD
- [x] Preparar mini hoja de estilo y checklist visual

## Material necesario
- [x] Copiar el PNG oficial horizontal a `assets/branding/`
- [x] Comprobar dimensiones, transparencia y legibilidad del logo

## Integración visual
- [ ] Crear rama `feat/riw-cam-hud`
- [x] Añadir logo oficial en cabecera y versión en pie
- [x] Incorporar variables CSS de paleta y tipografía
- [x] Diseñar marco HUD de cámara responsive
- [x] Añadir estados e indicador visual de movimiento
- [x] Implementar persistencia temporal de la máscara
- [x] Añadir botón de prueba «Mostrar rinoceronte»

## Pruebas y cierre
- [ ] Comprobar cámara, máscara y sensibilidad en Chromium
- [ ] Comprobar cámara en Chrome sin otro proceso bloqueándola
- [ ] Revisar móvil, accesibilidad y reducción de movimiento
- [ ] Actualizar README con captura y detalles de privacidad
- [ ] Commit, push, revisión y merge
- [ ] Marcar v0.1.1 cerrada y retomar publicación a Hugging Face

## Backlog (no ejecutar en esta rama)
- Seguimiento facial, sonrisa, rinoceronte 3D y app de checklists RIW.

**Nota:** implementación entregada para prueba; aún no verificada con la cámara real del usuario.

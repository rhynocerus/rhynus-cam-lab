# RHYNUS CAM LAB — Hoja de ruta

**Proyecto:** RHYNUS CAM LAB · RHYNUS Interactive Works  
**Estado:** prototipo v0.1 preparado; prueba local pendiente  
**Regla de trabajo:** un objetivo activo por vez. Ideas nuevas al backlog.  
**Fuente de verdad:** `CHECKLIST.md` actualizado en Git.

## Fase 0 — Preparación (actual)
**Objetivo:** verificar que la v0.1 funciona de verdad en Linux Mint.

**Criterios de cierre:** cámara autorizada, vídeo visible, movimiento detectado, efecto visible y prueba anotada. No declarar validado antes de probar.

## Fase 1 — Publicación v0.1
- Inicializar Git y revisar licencias/dependencias.
- Crear repositorio en GitHub (`rhynocerus/rhynus-cam-lab`).
- Publicar un Space estático en Hugging Face.
- Verificar funcionamiento desde escritorio y móvil (HTTPS/permisos).
- Documentar resultado y cerrar la versión.

## Fase 2 — Rostro y sonrisa (v0.2)
- Integrar detección facial en el navegador.
- Localizar rostro, ojos y boca.
- Definir umbral de sonrisa y ofrecer calibración.
- Responder a la sonrisa con un efecto 2D de rinoceronte.
- Comprobar privacidad, rendimiento y accesibilidad.

## Fase 3 — Avatar 3D (v0.3)
- Seleccionar un modelo propio o con licencia compatible.
- Preparar cuernos, orejas, hocico y animaciones.
- Vincular orientación/gestos faciales con Three.js.
- Optimizar para dispositivos modestos.

## Fase 4 — Experiencia compartible (v1.0)
- Capturar imagen o vídeo solo por acción explícita del visitante.
- Explicar permisos, privacidad y límites del reconocimiento de expresiones.
- Diseñar interfaz final RIW; probar en varios navegadores.
- Lanzar demo pública y recopilar comentarios.

## Backlog: ideas, NO tareas activas
- Detector de manos y gestos.
- Máscaras temáticas y efectos WebXR.
- Conexión futura con Packet Runner / Rinosaur.
- Aplicación RIW reutilizable de roadmaps y checklists.

## Ritual de cierre por objetivo
1. Implementar solo el objetivo actual.
2. Probar y registrar evidencia.
3. Commit, push y PR/merge si corresponde.
4. Marcar cierre y escoger el siguiente objetivo.

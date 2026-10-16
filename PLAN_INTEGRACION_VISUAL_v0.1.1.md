# Plan de integración · RHYNUS CAM LAB v0.1.1

**Principio:** una rama y un objetivo. No tocar el algoritmo de detección salvo para la persistencia y la visualización de actividad que se validarán aparte.

1. **Preparar materiales:** copiar el PNG original horizontal desde `~/Documentos/RIW/02_Logo_Institucional/01_Principal/` a `assets/branding/`; revisar licencia de tipografía.
2. **Crear rama:** `git switch -c feat/riw-cam-hud` cuando exista el repositorio Git y el árbol esté limpio; antes de ello, hacer respaldo local del prototipo funcional.
3. **Integrar cabecera:** insertar el logo RIW en `index.html` con texto alternativo, nombre del proyecto y `v0.1.1 · RIW`.
4. **Actualizar presentación:** variables CSS en `style.css`; marco HUD responsive sin cubrir el vídeo y estilos de estado accesibles.
5. **Mejoras acotadas de interacción:** indicador de actividad y persistencia de máscara durante 2–3 segundos; botón de prueba opcional que se pueda retirar tras validar.
6. **Probar:** vídeo, máscara, sensibilidad, permisos, Chrome y Chromium, móvil, teclado, accesibilidad y rendimiento.
7. **Documentar y cerrar:** captura, README, checklist, commit, push y revisión/merge, después pasar a publicación del Space.

**Criterio de cierre:** identidad auténtica RIW + HUD visible, controles claros y cero regresiones de cámara/detección. El simple diseño de documentos no significa que la interfaz ya esté implementada.

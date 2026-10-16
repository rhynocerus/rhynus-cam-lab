# RHYNUS CAM LAB · v0.1.1 · RIW
## Mini hoja de estilo visual (propuesta)

**Dirección:** Rhynus Mode: laboratorio cibernético, sobrio y funcional.
**Alcance:** diseño y planificación; integración aún pendiente.

### Marca
- Logo principal: `RIW_Logo_Principal_Horizontal_Transparente_v1.png` (archivo oficial sin redibujar ni modificar).
- Logo alternativo para portada: `RIW_Logo_Principal_Vertical_Transparente_v1.png`.
- Nombre y versión visibles: `RHYNUS CAM LAB · v0.1.1 · RIW`.
- Ruta propuesta de los recursos: `assets/branding/`.
- No publicar hasta comprobar que el logo original es legible en tamaños pequeños y móvil.

### Colores
| Rol | Hex |
|---|---|
| Fondo | `#081426` |
| Superficie | `#10243B` |
| Acento/HUD | `#62DCF3` |
| Actividad | `#59D9AD` |
| Texto principal | `#F0F7FF` |

### Tipografía
- Propuesta: IBM Plex Sans, títulos y texto; IBM Plex Mono, indicadores técnicos.
- Cargar con licencia compatible y alternativa `system-ui` y `monospace` sin depender de CDN.

### Cámara y ambiente
- Visor responsive con esquinas HUD, cuadrícula muy tenue y contorno cian.
- Estado textual (no depender solo de color): inactiva, activa, movimiento detectado, error.
- Medidor numérico o barra de actividad de movimiento.
- Mantener máscara 2–3 s tras un evento para poder apreciarla (propuesta; medir después).
- Botón manual temporal `Mostrar rinoceronte` para pruebas.
- Microanimaciones discretas, respetar `prefers-reduced-motion`.
- No enviar fotogramas a servidores; permiso de cámara explícito.

### Criterios de aceptación visual
- Se lee bien en desktop y móvil; no tapa controles ni vídeo.
- Un error de cámara se explica con texto.
- Buen contraste en elementos interactivos y foco visible por teclado.
- El estilo no afecta al vídeo ni a la detección de movimiento.
- Logo auténtico RIW presente y probado.

### Fuera de alcance v0.1.1
Detección de sonrisa, tracking facial y avatar 3D. Van al roadmap posterior.

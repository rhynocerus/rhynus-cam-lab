# Cómo contribuir a RHYNUS CAM LAB

Gracias por tu interés en mejorar RHYNUS CAM LAB de RHYNUS Interactive Works (RIW).

## Flujo recomendado

1. Abre un Issue para describir un error o proponer una mejora importante.
2. Realiza un fork y crea una rama con un solo objetivo.
3. Conserva el comportamiento existente de cámara y privacidad; evita enviar fotogramas fuera del navegador.
4. Comprueba `node --check app.js` y prueba la cámara y el botón «Mostrar rinoceronte» en navegador.
5. Envía un Pull Request con alcance, cambios y resultados de las pruebas.
6. Espera la revisión antes de considerar integrada la mejora.

## Licencias y autoría

El código fuente está disponible bajo GNU GPL v3 (consulta `LICENSE`). Conserva los avisos aplicables y asegúrate de tener derecho a aportar el código y los recursos que incluyes. Las marcas RIW están descritas en `TRADEMARKS.md`.

Este procedimiento es la política de aceptación de cambios **en este repositorio oficial**, no una restricción adicional a las libertades otorgadas por GPL.

## Alcance de la versión actual

La v0.1.1 detecta movimiento y muestra una máscara 2D experimental. El reconocimiento de rostro y expresiones pertenece a una versión futura.

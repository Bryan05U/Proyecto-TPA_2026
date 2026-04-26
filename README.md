# DomoServ
<img width="500" height="500" alt="1777168773540" src="https://github.com/user-attachments/assets/334d38a2-26fb-4368-af00-a7fb46673946" />

Proyecto enfocado a Sistema de Gestión de Smart Home (Domótica)

## Integrantes
- Bryan Cárcamo Molina
- Joaquín Macías Panichine
- Ian Fack Cárdenas

## Descripción
Software con un panel de control centralizado para hogares inteligentes que permite automatizar luces, climatización y seguridad. El objetivo es permitir que el usuario cree "escenas" (por ejemplo: Escena 'Cine' que baja persianas y atenua luces) y que estas acciones se puedan programar, deshacer o ejecutar en cola de forma asíncrona.

## Herramientas ha ocupar
- VS Code
- Deno
- Gemini
- ChatGPT

## Herramientas de diseño
- Figma
- Canva

## Funciones que tendrá el software
**Inicio de sesión (Usuario y contraseña):**
Función para restablecer la contraseña.

**Historial de comandos:**
El usuario podrá ver un historial de funciones y también podrá deshacer alguna función hecha.

**Panel de seguridad:**
El usuario puede acceder a las cámaras de seguridad y otros dispositivos de vigilancia de la casa.

**Panel de dispositivos:**
Acceso a variados dispositivos.

Funciones:
- Cerrar las puertas de habitaciones (Abrir o cerrar las puertas).
- Controlar aire acondicionado (Subir o bajar la temperatura).
- Controlar estufa pellet (Imaginando que la casa tuviera estufa pellet) (Subir o bajar temperatura).
- Abrir o cerrar persianas de la habitaciones.
- Hacer funcionar al robot aspiradora.
- Programar la cafetera inteligente, horno, microondas y refrigeradores.
- Prender/apagar teles (o incluso controlar la tele) o barras de sonido de la habitación.

**Editor de escenas:**
El usuario dependiendo de su conveniencia pueda seleccionar una escena o momento donde pueda hacer que varios dispositivos interactúen para lograr que surja la escena.

Ejemplos:

"Escena mañana"

Si el usuario aprieta “escena mañana” logra que los siguientes dispositivos:
- La cafetera se encenderá, haciendo las funciones de hacer un café o 2.
- El robot aspiradora se encenderá haciendo sus tareas.
- Las persianas se abrirán.
- Se encenderá la tele.
- Se encenderá la estufa pellet (programada con una temperatura dada por el usuario).

"Escena salida la trabajo"

Si el usuario aprieta “Escena salida al trabajo” logra que los dispositivos:
- La cafetera y la tele se apagan.
- El robot dejará de hacer su función.
- La estufa pellet quedará configurada con una cierta temperatura.
- Se activarán las cámaras de seguridad.

"Escena vuelta a casa"

- El robot volverá a prenderse haciendo otra pasada.

"Escena momento de relax"

- El robot se apagará.
- Las persianas se cerrarán.
- La puerta del living se cerrará.

"Escena Buenas Noches"

- Todos los dispositivos se apagan.

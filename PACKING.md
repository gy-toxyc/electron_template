# Esto es una plantilla para empaquetar proyectos de Electron.JS

Para empaquetar el proyecto terminado de ElectronJS, debemos hacer lo siguiente.
## 1) Introducir el proyecto en Electron Forge

Ejecuta los siguientes comandos en la terminal:

>npm install --save-dev @electron-forge/cli<br>
>npx electron-forge import

## 2) Empaquetamos el proyecto

Ejecuta el siguiente comando en la terminal:

>npx run make

~~~
Finalmente, el proyecto se habrá empaquetado y se habrá creado un repositorio llamado "out". Dentro de "out" encontraremos una carpeta que contendrá nuestro proyecto distribuíble.
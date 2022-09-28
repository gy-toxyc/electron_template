# Esto es una plantilla para iniciar proyectos con Electron.JS

Para instalar ElectronJS junto a NodeJS y comenzar un proyecto, hay dos caminos.
## 1) Ejecutar el .BAT

~~~
Ejecutando el archivo "startProject.bat" se creará ya todo lo necesario para que el proyecto pueda funcionar, pero tendrás igualmente que introducir todos los metadatos del proyecto en la terminal.
~~~

## 2) Instalación manual

Para comenzar, introduciremos el siguiente comando en cualquier terminal (cmd, VSCode, etc) mientras estemos ubicados dentro del directorio del proyecto:
> npm init

~~~
Esto inicializa un proyecto con NodeJS. Te pedirá cierta información a rellenar que se almacenará en un package.json cuando termine el proceso.
~~~

Tras eso, ejecutamos el siguiente comando:
> npm install electron --save-dev

~~~
Habremos instalado Electron en nuestro proyecto (se habrán generado node_modules).
~~~

Ya podremos organizar el archivo como queramos sin tocar las partes esenciales para el funcionamiento de Electron y NodeJS, que son las siguientes:

>Carpeta "node_modules".<br>
>Carpeta "electronjs_base".<br>
>render.js<br>
>package.json<br>
>package-lock.json.<br>
>Carpeta ".git".

El resto de organización del código, del HTML y del CSS es libre.

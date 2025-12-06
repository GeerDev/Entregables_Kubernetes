# Monolito en memoria

## Probamos la aplicación en local y utilizando contenedores

- Nos copiamos la carpeta que contiene el frontal y el back en nuestro directorio.

Se ha añadido la carpeta que incluye ambos proyectos `todo-app` a este directorio `1_monolith`.

- Instalamos las dependencias del front y del back.
```bash
# Instalación dependencias del front
cd ./todo-app/frontend
npm install

# Instalación dependencias del back
cd ./todo-app
npm i
```

**Nota:**ñadimos a nivel de raiz de la carpeta `laboratory` un `.gitignore` para ir descartando subir las dependencias instaladas.

- Le echamos un ojo por encima a los 2 proyectos y establecemos las variables de entorno en este caso: `NODE_ENV` Y `PORT`.
- Arrancamos localmente los proyectos.
- Construimos la imagen de Docker a partir del Dockerfile de la raiz.
- Corremos la imagen construida y comprobamos que hemos podido levantar el proyecto partiendo de la imagen en local.

## Despliegue en Kubernetes

- 
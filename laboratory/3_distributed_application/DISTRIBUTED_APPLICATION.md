# Aplicación Distribuida.

Run solutions loacally
Open two terminals, in one of them change directory to todo-api, and run npm start, in the other terminal change directory to todo-front, and run npm start

Run solutions locally using Docker
Start backend

$ docker run -d -p 3000:3000 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  --name todo-api \
  lemoncode/todo-api
Start frontend, in order to get connected fron and back, you must build the image as follows docker build -t lemoncode/todo-front --build-arg  API_HOST=http://localhost:3000 .

$ docker run -d -p 80:80 --name todo-front lemoncode/todo-front



Enunciado
Construir los distintos recursos de Kubernetes para generar un clúster, como el de la siguiente imagen:

distributed

Para ello seguir los siguientes pasos:
Paso 1. Crear todo-front.
Crear un Deployment para todo-front, usar el Dockerfile de este directorio 02-distributed/todo-front, para generar la imagen necesaria. Notar que existe ARG API_HOST dentro del fichero Dockerfile, lo podemos omitir en este caso, sólo está ahí para poder probar el contenedor de Docker en local.

Nota: Podéis usar la imagen lemoncodersbc/lc-todo-front:v5-2024

Al ejecutar un contenedor a partir de la imagen anterior, el puerto expuesto para http es el 80.

Crear un Cluster IP Service que exponga todo-front dentro del clúster.

Paso 2. Crear todo-api.
Crear un Deployment para todo-api, usar el Dockerfile de este directorio 02-distributed/todo-api, para generar la imagen necesaria.

Nota: Puedes usar la imagen lemoncodersbc/lc-todo-api:v5-2024

Al ejecutar un contenedor a partir de la imagen anaterior, el puerto por defecto es el 3000, pero se lo podemos alimentar a partir de variables de entorono, las variables de entorno serían las siguientes

NODE_ENV : El entorno en que se está ejecutando el contenedor, nos vale cualquier valor que no sea test
PORT : El puerto por el que va a escuchar el contenedor
(Opcional) Crear un ConfigMap que exponga las variables de entorno anteriores.

Crear un Cluster IP Service que exponga todo-api dentro del clúster.

Paso 3. Crear un Ingress para acceder a los servicios del clúster
Crear un Ingress para exponer los servicios anteriormente creados. Como referencia para crear este controlardor con minikube tomar como referencia el siguiente ejemplo Set up Ingress on Minikube with the NGINX Ingress Controller
# Aplicación Distribuida.

## Prueba en local del entorno y con Docker

En dos terminales para ejecutarlo en local

Utilizando Docker compose para levantar los 2 contenedores

## Despliegue en Kubernetes

### Crear Deployment para el front

### Servicio ClusterID que exponga el front dentro del cluster

### Crear Deployment para el back, utilizando un ConfigMap para las variables de entorno

### Servicio ClusterID que exponga el back dentro del cluster

### Crear Ingress para acceder a los servicios del cluster 

## Preguntas y reflexiones relacionadas

1. ¿Podríamos crear también las rutas del Ingress para tener los 3 aplicativos del laboratorio levantados a la vez?
2. ¿Qué otras arquitecturas se pueden montar en Kubernetes?
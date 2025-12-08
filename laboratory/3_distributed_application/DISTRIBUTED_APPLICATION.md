# Aplicación Distribuida.

## 📑 Tabla de Contenidos

| Nivel | Sección |
| :---: | :------ |
| **1.0** | **[Prueba en local del entorno y con Docker](#prueba-en-local-del-entorno-y-con-docker)** |
| **2.0** | **[Despliegue en Kubernetes](#despliegue-en-kubernetes)** |
| 2.1 | [Crear Deployment para el front](#crear-deployment-para-el-front) |
| 2.2 | [Servicio ClusterID que exponga el front dentro del cluster](#servicio-clusterid-que-exponga-el-front-dentro-del-cluster) |
| 2.3 | [Crear Deployment para el back, utilizando un ConfigMap para las variables de entorno](#crear-deployment-para-el-back-utilizando-un-configmap-para-las-variables-de-entorno) |
| 2.4 | [Servicio ClusterID que exponga el back dentro del cluster](#servicio-clusterid-que-exponga-el-back-dentro-del-cluster) |
| 2.5 | [Crear Ingress para acceder a los servicios del cluster](#crear-ingress-para-acceder-a-los-servicios-del-cluster) |
| **3.0** | **[Preguntas y reflexiones relacionadas](#preguntas-y-reflexiones-relacionadas)** |

---

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
# Monolito con base de datos.

## 📑 Tabla de Contenidos

| Nivel | Sección |
| :---: | :------ |
| **1.0** | **[Prueba en local del monolito conectado a la base de datos](#prueba-en-local-del-monolito-conectado-a-la-base-de-datos)** |
| **2.0** | **[Despliegue en Kubernetes](#despliegue-en-kubernetes)** |
| 2.1 | [ConfigMap con la configuración para base de datos](#configmap-con-las-configuración-para-base-de-datos-pienso-que-también-habría-que-utilizar-secrets) |
| 2.2 | [StorageClass para el aprovisionamiento dinámico](#storageclass-para-el-aprovisionamiento-dinámico) |
| 2.3 | [PersistentVolume y PersistentVolumeClaim](#persistentvolume-y-persistentvolumeclaim-que-referencie-al-storageclass-anterior) |
| 2.4 | [Crear un servicio ClusterIP interno](#crear-un-servicio-clusterip-interno-para-la-comunicación-con-el-deployment-donde-se-encuentra-el-monolito) |
| 2.5 | [Creación de StatefulSet utilizando todo lo creado anteriormente](#creación-de-statefulset-utilizando-todo-lo-creado-anteriormente-en-su-configuración-para-levantar-la-base-de-datos) |
| 2.6 | [Ejecutar seed de datos](#ejecutar-seed-de-datos) |
| 2.7 | [Deployment de la aplicación con su configuración de variables de entorno](#deployment-de-la-aplicación-con-su-configuración-de-variables-de-entorno-a-través-de-un-configmap) |
| 2.8 | [Acceso desde el exterior con un servicio LoadBalancer](#acceso-desde-el-exterior-con-un-servicio-loadbalancer) |
| **3.0** | **[Preguntas y reflexiones relacionadas](#preguntas-y-reflexiones-relacionadas)** |

---

## Prueba en local del monolito conectado a la base de datos

Creamos y levantamos el contenedor de la base de datos postgres localmente

Ejecutamos unos seeders para empezar con la base de datos con algunos datos

Creamos las variables de entorno necesarias sumandolas a las anteriores del monolito para la conexión a base de datos

Comprobamos que ahora los datos si son persistentes

## Despliegue en Kubernetes

### ConfigMap con las configuración para base de datos (pienso que también habría que utilizar Secrets)

### StorageClass para el aprovisionamiento dinámico

### PersistentVolume y PersistentVolumeClaim que referencie al StorageClass anterior

### Crear un servicio ClusterIP interno para la comunicación con el Deployment donde se encuentra el monolito

### Creación de StatefulSet utilizando todo lo creado anteriormente en su configuración para levantar la base de datos

### Ejecutar seed de datos

### Deployment de la aplicación con su configuración de variables de entorno a través de un ConfigMap

### Acceso desde el exterior con un servicio LoadBalancer

## Preguntas y reflexiones relacionadas

1. ¿Por qué no podemos utilizar un Deployment en vez de un StatefulSet para desplegar los pods relacionados a la base de datos?
2. Ya que los pods pueden tener más de 1 contenedor dentro, ¿no sería mejor desplegar servidor más base de datos en cada pod?
3. ¿Qué mas mecanismos de ejecutar seeders en base de datos puedes hacer?
4. ¿Podemos tener accesible desde el LoadBalancer el ejercicio anterior y este a la vez?
5. ¿Qué pasa si cambiamos las variables de entorno del Deployment sin tumbarlo?
6. ¿Podemos escalar y desescalar el aplicativo?

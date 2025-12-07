# Laboratorio Kubernetes

## Ejercicio 1. Monolito en memoria.
Se trata de una aplicación web que expone una aplicación de UI (la típica aplicación TODO), y una API para gestionar en un servidor los 'TODOS'. La persistencia de los TODOS es en memoria, eso significa que cuando apaguemos la aplicación dejarán de persistir los datos.

## Ejercicio 2. Monolito con base de datos.
Se trata de la misma aplicación pero en este caso la persistencia en memoria se hace a través de una base de datos.

## Ejercicio 3. Aplicación Distribuida.
See trata de dos aplicaciones, una UI expuesta a través de un nginx y una API que corre sobre express/nodejs y se conecta con una base de datos postgres.
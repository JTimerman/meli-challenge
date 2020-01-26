# Meli Frontend Challenge

## Instalación

Dentro del directorio principal ejecutar el siguiente comando:

### `npm install`

## Ejecución

Para levantar la aplicación es necesario ejecutar los siguientes comandos:

### `npm start`

### `npm run server`

## Tests

Se corren ejecutando el comando:

### `npm test`

# Overview

Para realizar la aplicación utilicé el stack de tecnologías pedido en la consigna.
El Frontend está desarrollado con React y Sass para los estilos.
El Backend consiste en un sencillo servidor en Node utilizando Express.

## Backend

El Backend se encuentra dividido en tres módulos:

1. Cliente
2. Servicios
3. Servidor

El Cliente tiene la responsabilidad de conectarse con la API de MercadoLibre para obtener los recursos necesarios.
Los Servicios tienen la responsabilidad de consumir esos recursos para exponer la información que requiere Frontend.
El Servidor tiene la responsabilidad de proveer esta información por medio de los endpoints acordados en el Contrato.

## Frontend

El Frontend consiste en el Header que contiene la barra de búsqueda y dos vistas:

1. Search
2. Detail

La vista de Search muestra los resultados de la búsqueda.
La vista de Detail muestra el detalle de un item.

# Consideraciones

## Generales

1. Me tomé la libertad de no utilizar ningún modelo en particular de workflow de git dado que soy el único autor del repositorio. De tener que utilizar alguno prefiero el Feature Branch Workflow con el que estoy extremadamente familiarizado.
2. Limité la cantidad de items (4) del lado del servidor a modo de reducir el tamaño de la respuesta.
3. Utilizo enzyme (la libreria de Airbnb) para unit tests por una cuestion de familiaridad y conocimiento de la misma.
4. La aplicación puede utilizarse solo con el teclado, sin uso del mouse.
5. Prescindí de Redux dado que consideré que la cantidad de boilerplate que agrega no justifica su uso en una aplicación de este tamaño. De ser mayor probablemente hubiese utilizado Redux o alguna otra forma de control de estado.
6. La categoría del item no forma parte del contrato para el endpoint de detalle, por esto no se incluyó en esa vista.
7. Se puede acceder a la vista de detalle de item con el ID del mismo por medio de la URL.

## Time constraints

De tener más tiempo para dedicarle a la aplicación, tendría en cuenta las siguientes mejoras:

1. Implementacion de webpack aliases para mejorar imports readability
2. Cantidad de Unti Tests
3. Creación de servicios en el FE para conectar con BE
4. Implementación de Loader
5. Implementación de Mensajes de Error
6. Implementación de animaciones para mejorar la UX

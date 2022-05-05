# Maratona - Desafio 2 Parte 1
## Run Book
Project name: Maratona, Desafio 2 Parte 1\
Prepared by: Sebastián Fripp\
04/05/2022

## Alcance del proyecto
Dada una serie de datos, detectar si presentan algun fallo.\
Se deberá utilizar Cloud Functions para que una vez analizados los valores recibidos de los sensores y el ambiente en el que se encuentre el sensor, devuelva una advertencia.

## Marco teórico
Antes de hablar de cómo hacer para resolver este problema, me gustaría dar una introducción a Cloud Functions para que estemos todos en la misma sintonía.

¿Qué es IBM Cloud Functions?

Es una plataforma de programación de funciones como serivicio (o FaaS) políglota para desarrollar código ligero que se ejecuta de forma escalable bajo demanda.\
En otras palabras, nos permite ejecutar código, en cualquier lenguaje, sin la necesidad de preocuparnos por la creación, modificación o mantenimiento de un servidor.

Dentro del servicio, podemos crear: 

+ **Actions:** Contienen un pequeño fragmento de código (function). Pueden ser invocados directamente (REST API) o mediante una secuencia.
+ **Sequences:** Invoca actions en un orden lineal, pasando parámetros de una a otra.
+ **Triggers:** Reciben un evento desde fuera de IBM Cloud Functions e invoca todas las actions conectadas al mismo trigger.

## Resumen de la solución
Como bien se puede ver en el repositorio, cree 2 actions, 1 llamada *actionPrincipal* y otra llamada *actionValidar*.

*actionPrincipal* se encarga de recibir el parámetro con los datos a validar (nombre del cuarto y valores de las medidas que detectó el sensor), y enviarselo a *actionValidar* para realizar las validaciones correspondientes.

*actionValidar* recibe esos datos, los evalúa y retorna el nombre de las medidas que se salieron de rango.\
Como se puede ver en el código, yo tengo almacenados en variables los valores permitidos para cada medicion, pero se podría perfectamente cargar una tabla desde una base de datos por ejemplo y así dejar un poco más limpio el código.

## Links de interés
Más allá de la consigna del desafío, recomiendo consultar los siguientes links, algunos fueron de gran ayuda a la hora de solucionar el problema.
* [Cloud Functions](https://cloud.ibm.com/functions/) - Página principal de Cloud Functions
* [Video introductorio a IBM Cloud Functions](https://www.youtube.com/watch?v=lq6BXii31Eo) - Para entrar en ambiente, recomiendo ver este video.
* [Ejemplo como llamar una action, desde otra](https://cloud.ibm.com/docs/openwhisk?topic=openwhisk-tutorial_action) - Ejemplo en el que se llama una primer y segunda action, desde una tercera.

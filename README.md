# Maratona - Desafio 2 Parte 1
## Run Book
Project name: Maratona, Desafio 2 Parte 1\
Prepared by: Sebastián Fripp\
04/05/2022

## Alcance del proyecto
Dada una serie de datos, detectar si presentan algun fallo.\
Se deberá utilizar Cloud Functions para que una vez analizados los valores recibidos de los sensores y el ambiente en el que se encuentre el sensor, devuelva una advertencia.

## Resumen de la solución
En primer lugar cree la action que va a recibir el JSON como parámetro que contiene la habitación y los valores de las mediciones.\
Luego la action, teniendo en cuenta la tabla con el rango de valores permitido para cada medicion en cada habitación, alerta si se presenta o no, alguna anomalía en los datos de entrada.\

## Links de interés
* [Cloud Functions](https://cloud.ibm.com/functions/) - Página principal de Cloud Functions
* [Video introductorio a IBM Cloud Functions](https://www.youtube.com/watch?v=lq6BXii31Eo) - Para entrar en ambiente, recomiendo ver este video.
* [Ejemplo como llamar una action, desde otra](https://cloud.ibm.com/docs/openwhisk?topic=openwhisk-tutorial_action) - Ejemplo en el que se llama una primer y segunda action, desde una tercera.
